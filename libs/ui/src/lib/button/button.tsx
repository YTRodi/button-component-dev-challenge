import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  [
    'font-noto-sans-jp',
    'rounded-md',
    'transition-colors',
    'bg-slate',
    'text-slate-darkest',
    'hover:bg-slate-dark',
    'focus:bg-slate-dark',
    'focus:outline-none',
  ],
  {
    variants: {
      // variant: {
      //   default: '', // or SOLID
      //   outline: ['bg-transparent', 'border', 'border-mine-shaft'],
      //   text: ['bg-transparent'],
      // },
      color: {
        default: ['focus:outline-slate-darkest'],
        primary: [
          'bg-blue',
          'text-white',
          'hover:bg-blue-dark',
          'focus:bg-blue-dark',
          'focus:outline-blue-dark',
        ],
        secondary: [
          'bg-gray',
          'text-white',
          'hover:bg-gray-dark',
          'focus:bg-gray-dark',
          'focus:outline-gray-dark',
        ],
        danger: [
          'bg-red',
          'text-white',
          'hover:bg-red-dark',
          'focus:bg-red-dark',
          'focus:outline-red-dark',
        ],
      },
      size: {
        sm: ['py-[6px]', 'px-3'],
        md: ['py-2', 'px-4'],
        lg: ['py-[11px]', 'px-[22px]'],
      },
      full: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'md',
      full: false,
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonStyles> {}

export function Button({ children, color, size, full, ...props }: ButtonProps) {
  return (
    <button className={buttonStyles({ color, size, full })} {...props}>
      {children}
    </button>
  );
}

export default Button;
