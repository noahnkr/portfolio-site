import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    /** One topic per post, e.g. "Machine Learning". Posts are filtered by it on /blog/. */
    topic: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.string(),
      summary: z.string(),
      stack: z.array(z.string()),
      order: z.number(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }),
});

export const collections = { posts, projects };
