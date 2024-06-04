import React from "react";
import add from "../assets/icons/add.svg";
import reduce from "../assets/icons/reduce.svg";

interface IProps {
	onAdd: () => void;
	onReduce: () => void;
}

const AddReduceButtons: React.FC<IProps> = ({ onAdd, onReduce }) => {
	return (
		<div className="flex flex-col gap-[3px]">
			<button onClick={onAdd}>
				<img src={add} />
			</button>

			<button onClick={onReduce}>
				<img src={reduce} />
			</button>
		</div>
	);
};

export default AddReduceButtons;
