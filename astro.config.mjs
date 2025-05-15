import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://escape-room-explorer.example.com',
  integrations: [tailwind()],
  output: 'static',
});