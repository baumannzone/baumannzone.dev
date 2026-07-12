import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { Tags } from "./types/tags";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    published: z.boolean().optional().default(true),
    tags: z.array(z.nativeEnum(Tags)).optional(),
    author: z.string().default("Jorge Baumann"),
    authorImage: z.string().optional(),
    type: z.enum(["blog", "css-art"]).default("blog"),
    ogImage: z.string().optional(),
    relatedPosts: z.array(z.string()).optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z
      .enum(["conferencia", "podcast", "artículo", "meetup", "curso", "social"])
      .default("conferencia"),
    event: z.string(),
    links: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  blog,
  talks,
};
