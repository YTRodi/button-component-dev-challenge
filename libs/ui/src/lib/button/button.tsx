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
    'focus:outline-slate-darkest',
    'shadow-slate',
    // For start/end icon prop
    'flex justify-center items-center gap-[10px]',
  ],
  {
    variants: {
      // variant: {
      //   default: '', // or SOLID
      //   outline: ['bg-transparent', 'border', 'border-mine-shaft'],
      //   text: ['bg-transparent'],
      // },
      color: {
        default: [],
        primary: [
          'bg-blue',
          'text-white',
          'hover:bg-blue-dark',
          'focus:bg-blue-dark',
          'focus:outline-blue-dark',
          'shadow-blue',
        ],
        secondary: [
          'bg-gray',
          'text-white',
          'hover:bg-gray-dark',
          'focus:bg-gray-dark',
          'focus:outline-gray-dark',
          'shadow-gray',
        ],
        danger: [
          'bg-red',
          'text-white',
          'hover:bg-red-dark',
          'focus:bg-red-dark',
          'focus:outline-red-dark',
          'shadow-red',
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
      disableShadow: {
        true: 'shadow-none',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'md',
      full: false,
      disableShadow: false,
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode | React.ReactNode[];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export function Button({
  children,
  color,
  size,
  full,
  disableShadow,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  console.log('disableShadow :>> ', disableShadow);
  return (
    <button
      className={buttonStyles({ color, size, full, disableShadow })}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
}

export default Button;
