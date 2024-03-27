import { cn } from '@/core/cn.js';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> =
  function ({ children, variant = 'default', className, ...rest }) {
    return (
      <button
        className={cn(
          'p-1 hover:text-cyan-500',
          buttonVariantToStyles[variant],
          className,
        )}
        {...rest}>
        {children}
      </button>
    );
  };

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
}

export const buttonVariants = ['default', 'outlined'] as const;
export type ButtonVariant = (typeof buttonVariants)[number];
export const buttonVariantToStyles = {
  outlined:
    'border rounded-2xl hover:outline outline-cyan-500 hover:border-cyan-500',
  default: '',
} as const satisfies Record<ButtonVariant, string>;
