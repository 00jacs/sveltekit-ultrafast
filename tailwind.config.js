/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['light']
	},
	plugins: [require('@tailwindcss/forms'), require('daisyui')]
};
