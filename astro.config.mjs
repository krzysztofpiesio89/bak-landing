// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://krzysztofpiesio89.github.io',
  base: '/bak-landing',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
