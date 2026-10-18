import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oficia.valeriayashan.com.ar',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
