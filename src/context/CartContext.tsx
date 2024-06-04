import React, { ReactNode, createContext, useState } from "react";
import { defaultCartItems } from "../mock";

export interface ICartItem {
	id: number;
	image: string;
	title: string;
	price: number;
	amount: number;
	subtitle: string;
}

interface ICartContext {
	cartItems: ICartItem[];
	deleteCartItem: (id: number) => void;
	updateCartItems: (data: ICartItem[]) => void;
}

interface ICartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
	cartItems: [],
	deleteCartItem: () => {},
	updateCartItems: () => {},
});

export const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<ICartItem[]>(defaultCartItems);

	const deleteCartItem = (id: number) => {
		setCartItems((prev) => prev.filter((e) => e.id !== id));
	};

	const updateCartItems = (data: ICartItem[]) => {
		setCartItems(data);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, deleteCartItem, updateCartItems }}
		>
			{children}
		</CartContext.Provider>
	);
};
