import React from "react";
import add from "../assets/icons/add.svg";
import reduce from "../assets/icons/reduce.svg";
import useWindowDimensions from "../hooks/useWindowDimensons";

interface IProps {
	amount: number;
	onAdd: () => void;
	onReduce: () => void;
}

const AddReduceButtons: React.FC<IProps> = ({ onAdd, onReduce, amount }) => {
	const { width } = useWindowDimensions();

	return (
		<div className="flex items-center gap-1.5 text-[22px] font-semibold">
			{width >= 530 && <p>{amount}</p>}

			<div className="flex flex-col items-center gap-[3px]">
				<button onClick={onAdd}>
					<img src={add} alt="Add icon" />
				</button>

				{width < 530 && <p>{amount}</p>}

				<button onClick={onReduce}>
					<img src={reduce} alt="Reduce icon" />
				</button>
			</div>
		</div>
	);
};

export default AddReduceButtons;
