/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					gray: 'hsl(0, 0%, 55%)',
					darkGray: 'hsl(0, 0%, 41%)',
				}
			}
		},
	},
	plugins: [],
}
