export const DBConfig = {
	name: "MyDB",
	version: 1,
	objectStoresMeta: [
		{
			store: "cartItems",
			storeConfig: {
				keyPath: "id",
				autoIncrement: true,
			},
			storeSchema: [
				{ name: "title", keypath: "title", options: { unique: true } },
				{ name: "subtitle", keypath: "subtitle", options: { unique: false } },
				{ name: "amount", keypath: "amount", options: { unique: false } },
				{ name: "price", keypath: "price", options: { unique: false } },
				{ name: "image", keypath: "image", options: { unique: false } },
			],
		},
		{
			store: "shipping",
			storeConfig: {
				keyPath: "id",
				autoIncrement: true,
			},
			storeSchema: [
				{
					name: "cost",
					keypath: "cost",
					options: { unique: false },
				},
			],
		},
		{
			store: "order",
			storeConfig: {
				keyPath: "id",
				autoIncrement: true,
			},
			storeSchema: [
				{
					name: "name",
					keypath: "cardDetails.name",
					options: { unique: false },
				},
				{
					name: "cardNumber",
					keypath: "cardDetails.cardNumber",
					options: { unique: false },
				},
				{
					name: "expDate",
					keypath: "cardDetails.expDate",
					options: { unique: false },
				},
				{ name: "cvv", keypath: "cardDetails.cvv", options: { unique: false } },

				{ name: "title", keypath: "items.title", options: { unique: false } },
				{
					name: "subtitle",
					keypath: "items.subtitle",
					options: { unique: false },
				},
				{ name: "amount", keypath: "items.amount", options: { unique: false } },
				{ name: "price", keypath: "items.price", options: { unique: false } },
				{ name: "image", keypath: "items.image", options: { unique: true } },
			],
		},
	],
};
