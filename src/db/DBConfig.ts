const DBConfig = {
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
				{ name: "title", keypath: "title", options: { unique: false } },
				{ name: "subtitle", keypath: "subtitle", options: { unique: false } },
				{ name: "amount", keypath: "amount", options: { unique: false } },
				{ name: "price", keypath: "price", options: { unique: false } },
				{ name: "image", keypath: "image", options: { unique: false } },
			],
		},
	],
};

export default DBConfig;
