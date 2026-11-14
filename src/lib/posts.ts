import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Topic = { name: string; slug: string; count: number };

export const topicSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const topicHref = (name: string) => `/blog/topics/${topicSlug(name)}/`;

/**
 * Published posts, newest first. Posts sharing a date fall back to their file name
 * (reverse alphabetical), so the order is stable between builds.
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || b.id.localeCompare(a.id));
}

/** Topics with their post counts, most posts first, then alphabetical. */
export function getTopics(posts: Post[]): Topic[] {
  const counts = new Map<string, number>();
  for (const p of posts) counts.set(p.data.topic, (counts.get(p.data.topic) ?? 0) + 1);
  return [...counts]
    .map(([name, count]) => ({ name, slug: topicSlug(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export const formatDate = (d: Date, month: 'short' | 'long' = 'short') =>
  d.toLocaleDateString('en-US', { month, day: 'numeric', year: 'numeric', timeZone: 'UTC' });
