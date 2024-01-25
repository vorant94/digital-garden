import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { THEME } from '../shared';

export const Headline: FunctionComponent<PropsWithChildren<HeadlineProps>> =
  function ({ children }) {
    return (
      <h3
        className={classNames('text-2xl font-semibold', ...THEME.primaryText)}>
        {children}
      </h3>
    );
  };

export interface HeadlineProps {}