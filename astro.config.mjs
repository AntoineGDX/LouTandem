// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [À CONFIRMER : nom de domaine] — remplacer l'URL ci-dessous par le domaine définitif.
export default defineConfig({
  site: 'https://lou-tandem.example',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/merci') }),
  ],
});
