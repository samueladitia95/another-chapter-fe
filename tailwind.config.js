import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				'ac-black': '#262626'
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
