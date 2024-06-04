import { useContext, useEffect } from "react";
import DBConfig from "./DBConfig";
import { defaultCartItems } from "../mock";
import { initDB, useIndexedDB } from "react-indexed-db-hook";
import { CartContext } from "../context/CartContext";

initDB(DBConfig);

const useCartItems = (): void => {
	const db = useIndexedDB("cartItems");
	const { updateCartItems } = useContext(CartContext);

	useEffect(() => {
		const initializeDB = async () => {
			const DBValues = await db.getAll().then((res) => res);

			if (!DBValues?.length) {
				for (const item of defaultCartItems) {
					await db.add(item);
				}
			} else {
				updateCartItems(DBValues);
			}
		};

		initializeDB();
	}, []);
};

export default useCartItems;
