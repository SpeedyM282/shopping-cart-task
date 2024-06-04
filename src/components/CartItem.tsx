import React, { useContext } from "react";
import trash from "../assets/icons/trash.svg";
import AddReduceButtons from "./AddReduceButtons";
import { CartContext, ICartItem } from "../context/CartContext";
import { useIndexedDB } from "react-indexed-db-hook";

const CartItem: React.FC<ICartItem> = ({
	id,
	image,
	title,
	price,
	amount,
	subtitle,
}) => {
	const { deleteRecord } = useIndexedDB("cartItems");
	const { deleteCartItem } = useContext(CartContext);

	const handleDelete = () => {
		deleteRecord(1).then(() => console.log("deleted"));
		deleteCartItem(id);
	};

	return (
		<div className="p-2.5 flex items-center justify-between gap-4 rounded-[15px] w-[600px] shadow-cartItem">
			<div className="flex items-center gap-4 w-2/4">
				<img className="rounded-lg" src={image} alt="Cart item" />

				<div>
					<h5 className="text-lg ">{title}</h5>
					<p className="text-sm ">{subtitle}</p>
				</div>
			</div>

			<div className="flex items-center gap-1.5 text-[22px] font-semibold">
				<p>{amount}</p>

				<AddReduceButtons
					onAdd={() => console.log("hello")}
					onReduce={() => console.log("hello")}
				/>
			</div>

			<p className="text-sm ">${price}</p>

			<button className="mr-[13px] cursor-pointer" onClick={handleDelete}>
				<img src={trash} />
			</button>
		</div>
	);
};

export default CartItem;
