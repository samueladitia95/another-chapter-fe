import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem'
		},
		extend: {
			colors: {
				'ac-black': '#262626',
				'ac-cream': '#DFD6C8',
				'ac-brown': '#68491A',
				'ac-light-cream': '#F3F0EA',
				'ac-dark-brown': '#4A4A4A',
				'ac-bronze': '#89785F',
				'ac-dark-olive': '#4D463E',
				'ac-wedge': '#615A51',
				'ac-cream-brown': '#BBA88C',
				'ac-dark-cream-brown': '#977D56'
			},
			backgroundImage: {
				main: "url('/images/bg-main.png')",
				pricing: "url(/images/bg-pricing.png)"
			},
			fontFamily: {
				roman: ['Tinos', ...defaultTheme.fontFamily.serif],
				helvetica: ['Helvetica Neue', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
