import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://baumannzone.dev',
  integrations: [
    mdx(),
    sitemap({
      customPages: [
        'https://baumannzone.dev/patrocinio',
        'https://baumannzone.dev/uses',
        'https://baumannzone.dev/blog',
      ],
    }),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'catppuccin-frappe',
        light: 'one-light',
      },
    },
  },
});