import React from "react";

const CardForm = () => {
	return (
		<form className="pb-[22px] mt-[12px] flex flex-col gap-3.5 border-b-[1px] border-solid border-[#5F65C3]">
			<label className="flex flex-col gap-[5px]  text-sm text-white">
				Name on card
				<input
					placeholder="Name"
					className="py-[11px] px-[18px] rounded-md bg-[#6268C6]"
				/>
			</label>

			<label className="flex flex-col gap-[5px]  text-sm text-white">
				Card Number
				<input
					placeholder="1111 2222 3333 4444"
					className="py-[11px] px-[18px] rounded-md bg-[#6268C6]"
				/>
			</label>

			<div className="flex gap-2">
				<label className="flex flex-col gap-[5px]  text-sm text-white">
					Expiration date
					<input
						placeholder="mm/yy"
						className="py-[11px] px-[18px] rounded-md bg-[#6268C6] w-full"
					/>
				</label>

				<label className="flex flex-col gap-[5px]  text-sm text-white">
					CVV
					<input
						placeholder="123"
						className="py-[11px] px-[18px] rounded-md bg-[#6268C6] w-full"
					/>
				</label>
			</div>
		</form>
	);
};

export default CardForm;
