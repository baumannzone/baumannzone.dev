import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts
      .map((post) => ({
        ...post.data,
        link: `/blog/${post.id}/`,
      }))
      // Only include published posts
      .filter((post) => post.published)
      // Newest first, so feed readers show the latest posts on top
      .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
    customData: `<language>es</language>`,
    stylesheet: "/rss-styles.xsl",
  });
}
