import { getCollection } from "astro:content";

export const oneLine = (text: string) => text.replace(/\s+/g, " ").trim();

export const isoDay = (date: Date) => date.toISOString().slice(0, 10);

export async function getLlmsContent() {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.published !== false)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const talks = (await getCollection("talks")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return { posts, talks };
}
