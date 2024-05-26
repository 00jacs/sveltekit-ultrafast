/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// YOU CAN ADJUST YOUR DEFAULT DAISYUI SETTINGS HERE
			fontSize: {
				xs: '0.75rem', // default was 0.875rem
				sm: '0.875rem', // default was 1rem
				base: '1rem', // default was 1.125rem
				lg: '1.125rem', // default was 1.25rem
				xl: '1.25rem', // default was 1.5rem
				'2xl': '1.5rem', // default was 1.75rem
				'3xl': '1.75rem', // default was 1.875rem
				'4xl': '2rem', // default was 2.25rem
				'5xl': '2.5rem', // default was 3rem
				'6xl': '3rem', // default was 3.75rem
				'7xl': '3.5rem', // default was 4.5rem
				'8xl': '4rem', // default was 6rem
				'9xl': '5rem' // default was 8rem
			}
		}
	},
	daisyui: {
		themes: [
			{
				dark: {
					// eslint-disable-next-line
					...require('daisyui/src/theming/themes').dark,
					primary: '#5491fb', // '#007FFF', // '#083D77', // '#2A4494',
					'primary-content': '#FFFFFF',
					base: '#1a1a1a',
					'base-200': '#3A3A3A',
					'base-300': '#4A4A4A',
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
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('daisyui')
	]
};
