import React, { ReactNode, createContext, useEffect, useState } from "react";
import { defaultCartItems } from "../mock";
import { useIndexedDB } from "react-indexed-db-hook";

export interface ICartItem {
	id: number;
	image: string;
	title: string;
	price: number;
	amount: number;
	subtitle: string;
}

interface ICartContext {
	total: number;
	subTotal: number;
	shipping: number;
	cartItems: ICartItem[];
	deleteCartItem: (id: number) => void;
	incrementCartItem: (id: number) => void;
	decrementCartItem: (id: number) => void;
}

interface ICartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
	total: 0,
	subTotal: 0,
	shipping: 0,
	cartItems: [],
	deleteCartItem: () => {},
	decrementCartItem: () => {},
	incrementCartItem: () => {},
});

export const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<ICartItem[]>(defaultCartItems);
	const [shipping, setShipping] = useState(0);
	const [subTotal, setSubTotal] = useState(0);
	const [total, setTotal] = useState(0);
	const cartItemsTable = useIndexedDB("cartItems");
	const shippingTable = useIndexedDB("shipping");

	useEffect(() => {
		const initializeDB = async () => {
			const DBValues = await cartItemsTable.getAll();
			const shippingTableData = await shippingTable.getAll();

			if (!shippingTableData?.length) {
				shippingTable
					.add({ cost: 4 })
					.catch((e) => alert("Something happened please try again later."));
				setShipping(4);
			}

			if (!DBValues?.length) {
				setCartItems(defaultCartItems);
				for (const item of defaultCartItems) {
					await cartItemsTable
						.add(item)
						.catch((e) => alert("Something happened please try again later."));
				}
			} else {
				setCartItems(DBValues);
			}
		};

		initializeDB();
	}, []);

	useEffect(() => {
		shippingTable.getAll().then((res) => {
			const cost = res[0]?.cost || shipping;
			setShipping(cost);

			let sT = 0;
			cartItems.forEach((e) => {
				sT += e.amount * e.price;
			});

			setSubTotal(sT);
			setTotal(sT + cost);
		});
	}, [cartItems]);

	const deleteCartItem = (id: number) => {
		setCartItems((prev) => prev.filter((e) => e.id !== id));
	};

	const incrementCartItem = (id: number) => {
		setCartItems((prev) =>
			prev.map((e) => (e.id === id ? { ...e, amount: e.amount + 1 } : e))
		);
	};

	const decrementCartItem = (id: number) => {
		setCartItems((prev) =>
			prev.map((e) =>
				e.id === id ? { ...e, amount: e.amount - 1 >= 1 ? e.amount - 1 : 1 } : e
			)
		);
	};

	return (
		<CartContext.Provider
			value={{
				total,
				subTotal,
				shipping,
				cartItems,
				deleteCartItem,
				incrementCartItem,
				decrementCartItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
