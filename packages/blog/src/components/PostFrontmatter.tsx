import { formatPostPublishedAt, getPostTagFullPath, type Post } from '@/shared';
import type { FunctionComponent } from 'react';
import { Caption } from './Caption.tsx';
import { Tag } from './Tag.tsx';
import { ThemedImage } from './ThemedImage.tsx';

export const PostFrontmatter: FunctionComponent<PostFrontmatterProps> =
  function ({ post, minutesRead }) {
    const { title, tags, coverImage, coverImageDark, description, code } =
      post.data;

    return (
      <>
        {coverImage && (
          <div className="self-center">
            <ThemedImage
              src={coverImage.src}
              srcDark={coverImageDark?.src}
              alt="cover image"
            />
          </div>
        )}

        <h1>{title}</h1>

        <div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
          <div className="flex gap-2 items-center">
            <Caption>{formatPostPublishedAt(post)}</Caption>
            <Caption>&#x2022;</Caption>
            <Caption>{minutesRead}</Caption>
          </div>

          <ul className="flex list-none m-0 p-0 gap-1">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag href={getPostTagFullPath(tag)}>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <p>
          <em>{description}</em>
        </p>

        {code && (
          <p>
            All the code mentioned in the post can be found in my{' '}
            <a
              href={code}
              target="_blank">
              GitHub
            </a>
          </p>
        )}
      </>
    );
  };

export interface PostFrontmatterProps {
  post: Post;
  minutesRead: string;
}
