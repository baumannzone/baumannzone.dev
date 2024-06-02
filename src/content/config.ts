import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    pubslished: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional(),
    category: z.string().max(1).optional(),
    author: z.string().default('Jorge Baumann'),
    authorImage: z.string().optional(),
    type: z.enum(['blog', 'css-art']).default('blog'),
  }),
});

export const collections = { blog };
