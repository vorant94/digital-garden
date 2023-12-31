import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../shared/theme';

export function Title({
  children,
  inline,
}: PropsWithChildren<TitleProps>): ReactElement {
  return (
    <h6
      className={classNames(...THEME.primaryText, 'text-lg font-medium', {
        'inline-block': inline,
        'mb-0': inline,
      })}>
      {children}
    </h6>
  );
}

export interface TitleProps {
  inline?: boolean;
}
