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
	const { deleteCartItem, incrementCartItem, decrementCartItem } =
		useContext(CartContext);

	const handleDelete = () => {
		deleteRecord(id).catch((e) =>
			alert("Something happened please try again later.")
		);
		deleteCartItem(id);
	};

	return (
		<div className="p-2.5 flex flex-col items-center justify-between gap-4 rounded-[15px] w-[200px] tabletSm:w-full shadow-cartItem tabletSm:flex-row">
			<div className="flex flex-col items-center gap-4 tabletSm:w-2/4 tabletSm:flex-row">
				<img
					className="rounded-lg w-full max-w-[100px] tabletSm:w-auto"
					src={image}
					alt="Cart item"
				/>

				<div>
					<h5 className="text-lg text-center tabletSm:text-left">{title}</h5>
					<p className="text-sm text-center text-ellipsis overflow-hidden text-nowrap w-44 tabletSm:text-left tabletSm:w-auto tabletSm:text-wrap tabletSm:overflow-auto">
						{subtitle}
					</p>
				</div>
			</div>

			<AddReduceButtons
				amount={amount}
				onAdd={() => incrementCartItem(id)}
				onReduce={() => decrementCartItem(id)}
			/>

			<p className="text-base tabletSm:text-sm ">${price}</p>

			<button
				className="tabletSm:mr-[13px] cursor-pointer"
				onClick={handleDelete}
			>
				<img src={trash} alt="Trash icon" />
			</button>
		</div>
	);
};

export default CartItem;
