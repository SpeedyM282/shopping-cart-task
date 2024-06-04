/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				cartItem: "0px 1px 4px 0px #00000040",
			},
		},
	},
	plugins: [],
};
