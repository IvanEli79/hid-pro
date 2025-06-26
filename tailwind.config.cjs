/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "var(--color-bg)",
				"box-bg": "var(--color-box)",
				"box-shadow": "var(--box-sd)",
				"box-border": "var(--box-border)",
				"dropdw-hover-bg": "var(--dropdw-hover-bg)",
				"dropdw-hover-txt": "var(--dropdw-hover-txt)",
				primary: "#1d4ed8",
				"heading-1": "var(--heading-1)",
				"heading-2": "var(--heading-2)",
				"heading-3": "var(--heading-3)",
			},
			screens:{
				midmd:"880px"
			}
		},
	},
	plugins: [],
	variants: {
		extend: {
			backgroundColor: ['active'],
		}
	},
}
