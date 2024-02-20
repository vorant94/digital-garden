import { cn } from '@/shared/react.helpers';
import { THEME } from '@/shared/theme';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Item, type ItemComponent } from './Item';

const PostList: PostListComponent = function ({ children }) {
  return (
    <ul className={cn('flex flex-col divide-y divide-dashed', ...THEME.divide)}>
      {children}
    </ul>
  );
};

PostList.Item = Item;

export { PostList };

export interface PostListComponent
  extends FunctionComponent<PropsWithChildren<PostListProps>> {
  Item: ItemComponent;
}

export interface PostListProps {}

export type {
  ItemComponent as PostListItemComponent,
  ItemProps as PostListItemProps,
} from './Item';
