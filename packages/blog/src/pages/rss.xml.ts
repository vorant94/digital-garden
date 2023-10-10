import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { DESCRIPTION, TITLE } from '../shared/intro-texts.ts';
import { Post } from '../shared/post.js';

export async function GET(context: APIContext) {
  const entries = Post.sortEntries(await getCollection('posts'));

  const posts = await Promise.all(
    entries.map((entry) => Post.fromEntry(entry)),
  );

  return rss({
    title: TITLE,
    description: DESCRIPTION,
    site: context.site!,
    items: posts.map((post, index) => {
      const entry = entries[index];

      return {
        title: post.title,
        description: post.description,
        pubDate: entry.data.publishedAt,
        link: post.fullPath,
        categories: entry.data.tags,
        author: 'vorant94@gmail.com',
      };
    }),
  });
}
