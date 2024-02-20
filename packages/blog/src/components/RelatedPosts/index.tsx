import type { Post } from '@/shared/post.helpers';
import { cn } from '@/shared/react.helpers';
import { THEME } from '@/shared/theme';
import type { FunctionComponent } from 'react';
import { PostList } from '../PostList';
import { StandOut } from '../StandOut';
import { Title } from '../Title';
import Styles from './styles.module.css';

export const RelatedPosts: FunctionComponent<RelatedPostsProps> = function ({
  posts,
}) {
  return (
    <StandOut className="flex-col">
      <details className={cn(...THEME.primaryText, Styles.details)}>
        <summary className="hover:cursor-pointer">
          <Title inline={true}>
            <span className="pl-2">Related posts</span>
          </Title>
        </summary>
        <PostList>
          {posts.map((post) => (
            <PostList.Item
              post={post}
              key={post.id}
            />
          ))}
        </PostList>
      </details>
    </StandOut>
  );
};

export interface RelatedPostsProps {
  posts: Post[];
}