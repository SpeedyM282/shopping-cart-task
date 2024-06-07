const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				cartItem: "0px 1px 4px 0px #00000040",
			},
		},
		screens: {
			tabletSm: "530px",
			phoneLarge: "430px",
			phoneMedium: "380px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
