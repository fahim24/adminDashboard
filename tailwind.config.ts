import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./modules/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				CBG: "#F5F6FA",
				CBlue: "#4880FF",
				CGreen: "#00B69B",
				CRed: "#F93C65",
				CDark: "#202224",
				CLight: "#606060",
				COrange: "#FF8743",
				CGray: "#B5B5B5",
				CPink: "#F97FD9",
				CPurple: "#9E8FFF",
			},
		},
	},
	plugins: [],
};
export default config;
