module.exports = {
	purge: ["./assets/**/*.js", "./htmlComponents/*.html", "./*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			purple: {
				DEFAULT: "#6840D9",
				dark: "#59009F",
				light: "#8F67FF",
			},
			blue: {
				DEFAULT: "#55BDDE",
				dark: "#0085BE",
				light: "#8ED6FF",
			},
			red: {
				DEFAULT: "#F41690",
				dark: "#BC0063",
				light: "#FF61C0",
			},
			gray: {
				DEFAULT: "#bdbdbd",
				dark: "#696969",
				light: "#ebebeb",
			},
			offwhite: "#fcfcfc",
			white: "#FFF",
			black: "#2F2F2F",
		},

		extend: {
			FontFamily: {
				sans: ["sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
