import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    published: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional(),
    category: z.string().max(1).optional(),
    author: z.string().default("Jorge Baumann"),
    authorImage: z.string().optional(),
    type: z.enum(["blog", "css-art"]).default("blog"),
  }),
});

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    event: z.string(),
    description: z.string(),
    image: z.string().optional(),
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
