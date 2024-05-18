/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#ffdfe1',
					200: '#ffc4c7',
					300: '#ff9ba0',
					400: '#ff626a',
					500: '#ff313c',
					600: '#f0121e',
					700: '#c40a14',
					800: '#a70d15',
					900: '#8a1218'
				},
				secondary: {
					50: '#f8f8ed',
					100: '#edefd8',
					200: '#dbe0b6',
					300: '#bdc67f', // primary
					400: '#aab665',
					500: '#8e9a48',
					600: '#6e7a36',
					700: '#555e2d',
					800: '#454c28',
					900: '#3c4225',
					950: '#1f2310'
				},
				tertiary: {
					50: '#f3faf4',
					100: '#e2f6e7',
					200: '#c7ebcf',
					300: '#9adbaa',
					400: '#66c27d',
					500: '#41a659',
					600: '#318846',
					700: '#2b6f3c',
					800: '#255632',
					900: '#20472b',
					950: '#0d2614'
				}
			}
		}
	},
	plugins: []
};
