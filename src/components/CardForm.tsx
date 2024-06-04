import React, { ChangeEvent } from "react";

interface FormData {
	name: string;
	cardNumber: string;
	expDate: string;
	cvv: string;
}

interface IProps {
	data: FormData;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CardForm: React.FC<IProps> = ({ data, handleChange }) => {
	return (
		<form className="pb-[22px] mt-[12px] flex flex-col gap-3.5 border-b-[1px] border-solid border-[#5F65C3]">
			<label className="flex flex-col gap-[5px]  text-sm text-white">
				Name on card
				<input
					name="name"
					placeholder="Name"
					onChange={handleChange}
					className="py-[11px] px-[18px] rounded-md bg-[#6268C6]"
				/>
			</label>

			<label className="flex flex-col gap-[5px]  text-sm text-white">
				Card Number
				<input
					type="number"
					name="cardNumber"
					onChange={handleChange}
					placeholder="1111 2222 3333 4444"
					className="py-[11px] px-[18px] rounded-md bg-[#6268C6]"
				/>
			</label>

			<div className="flex gap-2">
				<label className="flex flex-col gap-[5px]  text-sm text-white">
					Expiration date
					<input
						name="expDate"
						placeholder="mm/yy"
						onChange={handleChange}
						className="py-[11px] px-[18px] rounded-md bg-[#6268C6] w-full"
					/>
				</label>

				<label className="flex flex-col gap-[5px]  text-sm text-white">
					CVV
					<input
						name="cvv"
						type="number"
						placeholder="123"
						onChange={handleChange}
						className="py-[11px] px-[18px] rounded-md bg-[#6268C6] w-full"
					/>
				</label>
			</div>
		</form>
	);
};

export default CardForm;
