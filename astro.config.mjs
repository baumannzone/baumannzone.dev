import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { getSitemapMeta } from './src/utils/sitemap-meta.mjs';
import { satteri } from '@astrojs/markdown-satteri';
import { markdownImagesPlugin } from './src/utils/markdown-images-plugin.mjs';
import { markdownSponsoredLinksPlugin } from './src/utils/markdown-sponsored-links-plugin.mjs';

const { lastmod, thinTags } = getSitemapMeta();

// https://astro.build/config
export default defineConfig({
  site: "https://www.baumannzone.dev",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return (
          !pathname.startsWith("/rickroll") &&
          !pathname.startsWith("/dominios") &&
          !thinTags.has(pathname)
        );
      },
      serialize: (item) => {
        const date = lastmod.get(new URL(item.url).pathname);
        return date ? { ...item, lastmod: date.toISOString() } : item;
      },
    }),
    tailwind(),
  ],
  image: {
    // Genera srcset/sizes para todas las imágenes locales (también las de Markdown)
    layout: "constrained",
  },
  markdown: {
    processor: satteri({ hastPlugins: [markdownImagesPlugin(), markdownSponsoredLinksPlugin()] }),
    shikiConfig: {
      themes: {
        dark: "catppuccin-frappe",
        light: "one-light",
      },
    },
  },
});
