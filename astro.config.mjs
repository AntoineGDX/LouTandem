// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hébergement actuel : GitHub Pages (https://antoinegdx.github.io/LouTandem).
// [À CONFIRMER : nom de domaine] — avec un domaine à soi, mettre `site` à ce domaine
// et supprimer `base` (le site est alors servi à la racine).
export default defineConfig({
  site: 'https://antoinegdx.github.io',
  base: '/LouTandem',
  trailingSlash: 'ignore',
  build: { format: 'file' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/merci') }),
  ],
});
