/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				dark: {
					// eslint-disable-next-line
					...require('daisyui/src/theming/themes').dark,
					primary: '#007FFF', // '#007FFF', // '#083D77', // '#2A4494',
					'primary-content': '#FFFFFF',
					base: '#2A2A2A',
					'base-content': '#FFFFFF'
				}
			},
			{
				light: {
					// eslint-disable-next-line
					...require('daisyui/src/theming/themes').light,
					primary: '#007FFF', // '#007FFF', // '#083D77', // '#2A4494',
					'primary-content': '#FFFFFF',
					base: '#FFFFFF',
					'base-content': '#2A2A2A'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/forms'), require('daisyui')]
};
