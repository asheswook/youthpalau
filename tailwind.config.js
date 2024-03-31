/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {

    extend: {
      colors: {
        'primary': {
            100: '#ffdfe1',
            200: '#ffc4c7',
            300: '#ff9ba0',
            400: '#ff626a',
            500: '#ff313c',
            600: '#f0121e',
            700: '#c40a14',
            800: '#a70d15',
            900: '#8a1218',
        }
      }
    },
  },
  plugins: [],
}

