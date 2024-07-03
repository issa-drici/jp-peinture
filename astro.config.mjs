import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://issa-drici.github.io',
  base: '/jp-peinture',
  integrations: [react()]
});