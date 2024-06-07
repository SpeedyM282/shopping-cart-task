import { ChangeEvent, useContext, useState } from "react";
import CardForm from "./CardForm";
import { cards, formatCurrency } from "../mock";
import { CartContext } from "../context/CartContext";
import { useIndexedDB } from "react-indexed-db-hook";
import arrowRight from "../assets/icons/arrow-right.svg";
import profileImg from "../assets/images/profile-img.png";

const PaymentCard = () => {
	const { add } = useIndexedDB("order");
	const { total, subTotal, shipping, cartItems } = useContext(CartContext);
	const [cardDetails, setCardDetails] = useState({
		name: "",
		cardNumber: "",
		expDate: "",
		cvv: "",
	});

	const handleCheckout = () => {
		const order = {
			cardDetails,
			items: cartItems,
		};
		add(order).catch((e) =>
			alert("Something happened please try again later.")
		);
	};

	const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCardDetails((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<div className="p-[20px] max-w-[388px] min-w-[280px] rounded-[20px] bg-[#565ABB] flex flex-col gap-[15px]">
			<div className="flex justify-between items-center">
				<h2 className="text-[22px] text-white font-semibold">Card Details</h2>

				<img className="rounded-lg" src={profileImg} alt="Profile" />
			</div>

			<div className="flex flex-col gap-3.5">
				<p className="text-base  text-white">Card type</p>

				<div className="flex gap-4">
					{cards.map((card) => (
						<img
							className="rounded-[5px] w-[40px] phoneMedium:w-[55px] phoneLarge:w-auto"
							key={card}
							src={card}
							alt="Credit card"
						/>
					))}

					<button className="w-[55px] bg-[#D9D9D933] rounded-[5px] text-white font-bold text-sm phoneLarge:w-[75px]">
						See all
					</button>
				</div>
			</div>

			<CardForm data={cardDetails} handleChange={handleFormChange} />

			<div className="flex flex-col gap-1.5">
				<div className="flex justify-between items-center">
					<p className="text-white text-sm ">Subtotal</p>
					<p className="text-white text-sm ">${formatCurrency(subTotal)}</p>
				</div>

				<div className="flex justify-between items-center">
					<p className="text-white text-sm ">Shipping</p>
					<p className="text-white text-sm ">${formatCurrency(shipping)}</p>
				</div>

				<div className="flex justify-between items-center">
					<p className="text-white text-sm ">Total (Tax incl.)</p>
					<p className="text-white text-sm ">${formatCurrency(total)}</p>
				</div>
			</div>

			<button
				disabled={
					!cardDetails.cardNumber ||
					!cardDetails.cvv ||
					!cardDetails.expDate ||
					!cardDetails.name
				}
				onClick={handleCheckout}
				className="py-[18px] px-5 mt-2.5 flex justify-between items-center rounded-xl text-base  text-white bg-[#4DE1C1] disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<p>${formatCurrency(total)}</p>

				<p className="flex gap-[5px]">
					Checkout <img src={arrowRight} alt="Arrow icon" />
				</p>
			</button>
		</div>
	);
};

export default PaymentCard;
