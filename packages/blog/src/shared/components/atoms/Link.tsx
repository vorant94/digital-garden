import classNames from 'classnames';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { type ReactElement } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export function Link({
  href,
  className,
  isActive,
  children,
  ...props
}: PropsWithChildren<LinkProps>): ReactElement {
  return (
    <a
      className={classNames(
        'hover:text-blue-500 hover:underline',
        isActive ? 'text-black underline' : 'text-gray-500',
        className,
      )}
      href={href}
      {...props}>
      {children}
    </a>
  );
}