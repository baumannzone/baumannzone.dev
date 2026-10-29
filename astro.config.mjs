import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { getSitemapMeta } from './src/utils/sitemap-meta.mjs';

const { lastmod, thinTags } = getSitemapMeta();

// https://astro.build/config
export default defineConfig({
  site: "https://www.baumannzone.dev",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return !pathname.startsWith("/rickroll") && !thinTags.has(pathname);
      },
      serialize: (item) => {
        const date = lastmod.get(new URL(item.url).pathname);
        return date ? { ...item, lastmod: date.toISOString() } : item;
      },
    }),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "catppuccin-frappe",
        light: "one-light",
      },
    },
  },
});
