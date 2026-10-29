import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// astro.config.mjs runs before the content layer exists, so read the
// frontmatter straight from disk to derive <lastmod> and thin tag pages.

const stripQuotes = (value) => value.trim().replace(/^["']|["']$/g, "");

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (!match) return data;

  let listKey = null;
  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      data[listKey].push(stripQuotes(item[1]));
      continue;
    }
    const pair = line.match(/^([A-Za-z]\w*):\s*(.*)$/);
    if (!pair) continue;
    const [, key, raw] = pair;
    listKey = null;
    if (raw.startsWith("[")) {
      data[key] = raw
        .slice(1, raw.lastIndexOf("]"))
        .split(",")
        .map(stripQuotes)
        .filter(Boolean);
    } else if (raw === "") {
      data[key] = [];
      listKey = key;
    } else {
      data[key] = stripQuotes(raw);
    }
  }
  return data;
}

function readCollection(dir, extensions) {
  return readdirSync(dir)
    .filter((file) => extensions.some((ext) => file.endsWith(ext)))
    .map((file) => ({
      id: file.replace(/\.(mdx?|md)$/, ""),
      data: parseFrontmatter(readFileSync(join(dir, file), "utf8")),
    }));
}

const toDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const newest = (dates) =>
  dates.filter(Boolean).sort((a, b) => b.getTime() - a.getTime())[0];

// Same slug rule as src/types/tags.ts ("Node.js" -> "node-js", "UX/UI" -> "ux-ui").
const tagSlug = (tag) => tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function getSitemapMeta(root = process.cwd()) {
  const posts = readCollection(join(root, "src/content/blog"), [".md", ".mdx"]);
  const talks = readCollection(join(root, "src/content/talks"), [".md"]);

  const lastmod = new Map();
  const postsByTag = new Map();

  for (const post of posts) {
    const date = toDate(post.data.updatedDate ?? post.data.pubDate);
    lastmod.set(`/blog/${post.id}/`, date);
    for (const tag of post.data.tags ?? []) {
      const slug = tagSlug(tag);
      postsByTag.set(slug, [...(postsByTag.get(slug) ?? []), date]);
    }
  }

  const talkDates = talks.map((talk) => toDate(talk.data.date));
  talks.forEach((talk, index) =>
    lastmod.set(`/talks/${talk.id}/`, talkDates[index]),
  );

  const published = posts
    .filter((post) => post.data.published !== "false")
    .map((post) => lastmod.get(`/blog/${post.id}/`));
  lastmod.set("/", newest(published));
  lastmod.set("/blog/", newest(published));
  lastmod.set("/tags/", newest(published));
  lastmod.set("/talks/", newest(talkDates));

  const thinTags = new Set();
  for (const [slug, dates] of postsByTag) {
    lastmod.set(`/tags/${slug}/`, newest(dates));
    if (dates.length < 2) thinTags.add(`/tags/${slug}/`);
  }

  return { lastmod, thinTags };
}
