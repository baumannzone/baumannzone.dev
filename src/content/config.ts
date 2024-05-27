import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // heroImage: z.string().optional(),
    pubslished: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional(),
    category: z.string().max(1).optional(),
    author: z.string().optional().default('Jorge Baumann'),
    authorImage: z.string().optional(),
  }),
});

export const collections = { blog };
