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
				'ac-brown': '#68491A'
			},
			backgroundImage: {
				main: "url('/images/bg-main.png')"
			},
			fontFamily: {
				roman: ['Times-New-Roman', ...defaultTheme.fontFamily.sans],
				helvetica: ['Helvetica Neue', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
