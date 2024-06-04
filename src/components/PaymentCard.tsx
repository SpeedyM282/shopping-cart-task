import React from "react";
import { cards } from "../mock";
import CardForm from "./CardForm";
import arrowRight from "../assets/icons/arrow-right.svg";
import profileImg from "../assets/images/profile-img.png";

const PaymentCard = () => {
	return (
		<div className="p-[20px] w-[388px] rounded-[20px] bg-[#565ABB] flex flex-col gap-[15px]">
			<div className="flex justify-between items-center">
				<h2 className="text-[22px] text-white font-semibold">Card Details</h2>

				<img className="rounded-lg" src={profileImg} alt="Profile" />
			</div>

			<div className="flex flex-col gap-3.5">
				<p className="text-base  text-white">Card type</p>

				<div className="flex gap-4">
					{cards.map((card) => (
						<img
							className="rounded-[5px]"
							key={card}
							src={card}
							alt="Credit card"
						/>
					))}

					<button className="w-[75px] bg-[#D9D9D933] rounded-[5px] text-white font-bold text-sm">
						See all
					</button>
				</div>
			</div>

			<CardForm />

			<div className="flex flex-col gap-1.5">
				<div className="flex justify-between items-center">
					<p className="text-white text-sm ">Subtotal</p>
					<p className="text-white text-sm ">$</p>
				</div>

				<div className="flex justify-between items-center">
					<p className="text-white text-sm ">Shipping</p>
					<p className="text-white text-sm ">$</p>
				</div>

				<div className="flex justify-between items-center">
					<p className="text-white text-sm ">Total (Tax incl.)</p>
					<p className="text-white text-sm ">$</p>
				</div>
			</div>

			<button className="py-[18px] px-5 mt-2.5 flex justify-between items-center rounded-xl text-base  text-white bg-[#4DE1C1]">
				<p>$1,672</p>

				<p className="flex gap-[5px]">
					Checkout <img src={arrowRight} alt="Arrow icon" />
				</p>
			</button>
		</div>
	);
};

export default PaymentCard;
