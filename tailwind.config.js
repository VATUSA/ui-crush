module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
		},
		screens: {
			'phablet': '640px',
			'tablet': '768px',
			'laptop': '1024px',
			'desktop': '1280px',
			'fullhd': '1536px',
		},
		extend: {
			colors: {
				'vatusa-blue': {  DEFAULT: '#002647',  '50': '#004B8C',  '100': '#004784',  '200': '#003F75',  '300': '#003666',  '400': '#002E56',  '500': '#002647',  '600': '#001E38',  '700': '#001628',  '800': '#000D19',  '900': '#00050A'},
				'vatusa-red': {  DEFAULT: '#B22234',  '50': '#E57886',  '100': '#E36C7A',  '200': '#DE5263',  '300': '#D9384C',  '400': '#CC273C',  '500': '#B22234',  '600': '#981D2C',  '700': '#7F1825',  '800': '#65131D',  '900': '#4B0E16'},
				'vatusa-sky': {  DEFAULT: '#9FC6E0',  '50': '#E4EFF6',  '100': '#DDEBF4',  '200': '#CDE1EF',  '300': '#BED8EA',  '400': '#AECFE5',  '500': '#9FC6E0',  '600': '#90BDDB',  '700': '#80B4D6',  '800': '#71ABD1',  '900': '#61A1CC'},
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
