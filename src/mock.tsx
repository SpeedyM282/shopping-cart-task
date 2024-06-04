import visa from "./assets/images/visa.png";
import rupay from "./assets/images/rupay.png";
import mastercard from "./assets/images/mastercard.png";
import italyPizza from "./assets/images/italy-pizza.png";
import comboPlate from "./assets/images/combo-plate.png";
import spanishRice from "./assets/images/spanish-rice.png";

export const cards = [mastercard, visa, rupay];

export const defaultCartItems = [
	{
		id: 1,
		title: "Italy Pizza",
		subtitle: "Extra cheese and toping",
		amount: 1,
		price: 681,
		image: italyPizza,
	},
	{
		id: 2,
		title: "Combo Plate",
		subtitle: "Extra cheese and toping",
		amount: 1,
		price: 681,
		image: comboPlate,
	},
	{
		id: 3,
		title: "Spanish Rice",
		subtitle: "Extra garlic",
		amount: 1,
		price: 681,
		image: spanishRice,
	},
];
