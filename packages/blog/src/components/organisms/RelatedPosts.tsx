import classNames from 'classnames';
import type { ReactElement } from 'react';
import type { Post } from '../../shared/posts.service.ts';
import { THEME } from '../../shared/theme';
import { Title } from '../atoms/Title';
import { StandOut } from '../molecules/StandOut';
import { PostList } from './PostList';
import './RelatedPosts.module.css';

export interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps): ReactElement {
  return (
    <StandOut className="flex-col">
      <details className={classNames(...THEME.primaryText)}>
        <summary className="hover:cursor-pointer">
          <Title inline={true}>
            <span className="pl-2">Related posts</span>
          </Title>
        </summary>
        <PostList posts={posts} />
      </details>
    </StandOut>
  );
}
