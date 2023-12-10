import type { CollectionEntry } from 'astro:content';
import type { ReactElement } from 'react';
import { PostListItem } from '../molecules/PostListItem';

export interface PostListProps {
  posts: CollectionEntry<'posts'>[];
  publishedAtFormat?: string;
}

export function PostList({
  posts,
  publishedAtFormat,
}: PostListProps): ReactElement {
  return (
    <ul className="flex flex-col divide-y divide-dashed">
      {posts.map((post) => (
        <li className="flex flex-col py-3 text-medium">
          <PostListItem
            post={post}
            publishedAtFormat={publishedAtFormat}
          />
        </li>
      ))}
    </ul>
  );
}
