import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ivaneli79.github.io',
  base: '/hid-pro',
  trailingSlash: "never",
});