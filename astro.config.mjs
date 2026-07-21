// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://krzysztofpiesio89.github.io',
  base: process.env.NODE_ENV === 'production' ? '/bak-landing' : '/',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
