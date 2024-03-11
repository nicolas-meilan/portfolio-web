import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://nicolas-meilan.github.io/portfolio-web',
  base: '/portfolio-web',
  integrations: [tailwind(), astroI18next()],
});