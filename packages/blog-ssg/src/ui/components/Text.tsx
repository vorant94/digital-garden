import { cn } from '@/shared/cn.js';
import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

export const Text: FC<PropsWithChildren<TextProps>> = function ({
  children,
  base,
  className,
  ...rest
}) {
  const Base = base;

  return (
    <Base
      className={cn(
        'text-slate-800 dark:text-slate-100',
        textBaseToStyle[base],
        className,
      )}
      {...rest}>
      {children}
    </Base>
  );
};

export interface TextProps extends ComponentPropsWithoutRef<'span'> {
  base: TextBase;
}

export const textBase = ['span', 'strong', 'em'] as const;
export type TextBase = (typeof textBase)[number];
const textBaseToStyle = {
  span: '',
  strong: 'font-semibold',
  em: 'font-light',
} as const satisfies Record<TextBase, string>;
