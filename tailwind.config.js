module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			purple: {
				DEFAULT: "#7026ab",
				dark: "#5B2A82",
				light: "#915ABD",
			},
			blue: {
				DEFAULT: "#317EC6",
				dark: "#125A9D",
				light: "#60A7EA",
			},
			red: {
				DEFAULT: "#DA494F",
				dark: "#A83237",
				light: "#F4797E",
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
