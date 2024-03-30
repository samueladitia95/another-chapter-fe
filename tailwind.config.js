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
			}
		}
	},
	plugins: []
};
