import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const BASE_BUTTON_STYLES = [
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
];

const buttonStyles = cva(BASE_BUTTON_STYLES, {
  variants: {
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
    variant: {
      default: [],
      outline: [
        'bg-white',
        'border',
        'shadow-none',
        'hover:bg-opacity-10',
        'focus:bg-opacity-10',
      ],
      text: [
        'border-none',
        'shadow-none',
        'bg-white',
        'hover:bg-opacity-10',
        'focus:bg-opacity-10',
      ],
    },
    size: {
      sm: ['py-[6px]', 'px-3'],
      md: ['py-2', 'px-4'],
      lg: ['py-[11px]', 'px-[22px]'],
    },
    disabled: {
      true: [
        'cursor-not-allowed',
        'bg-slate',
        'text-slate-darkest',
        'text-opacity-70',
        'hover:bg-slate',
        'focus:bg-slate',
        'focus:outline-[0px]',
      ],
    },
    full: {
      true: 'w-full',
    },
    disableShadow: {
      true: 'shadow-none',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'outline',
      class: ['border-blue', 'text-blue'],
    },
    { color: 'primary', variant: 'text', class: ['text-blue'] },
    {
      color: 'secondary',
      variant: 'outline',
      class: ['border-gray', 'text-gray'],
    },
    { color: 'secondary', variant: 'text', class: ['text-gray'] },
    {
      color: 'danger',
      variant: 'outline',
      class: ['border-red', 'text-red'],
    },
    { color: 'danger', variant: 'text', class: ['text-red'] },
    {
      disabled: true,
      variant: 'text',
      class: ['hover:bg-white', 'focus:bg-white'],
    },
  ],
  defaultVariants: {
    color: 'default',
    variant: 'default',
    size: 'md',
    full: false,
    disableShadow: false,
  },
});

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      'color' | 'disabled'
    >,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode | React.ReactNode[];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export function Button({
  children,
  color,
  variant,
  disabled,
  size,
  full,
  disableShadow,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({
        color,
        variant,
        size,
        disabled,
        full,
        disableShadow,
      })}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
}

export default Button;
