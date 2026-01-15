'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const VARIANTS = {
  primary: `
    bg-gradient-to-r from-[var(--primary-600)] via-[var(--accent-600)] to-[var(--primary-600)]
    bg-[length:200%_100%]
    text-white
    hover:bg-[position:100%_0]
    shadow-lg shadow-[var(--primary-500)]/25
    hover:shadow-xl hover:shadow-[var(--primary-500)]/30
  `,
  secondary: `
    bg-[var(--card-background)]
    text-[var(--foreground)]
    border border-[var(--border-color)]
    hover:bg-[var(--card-hover)]
    hover:border-[var(--primary-300)]
  `,
  outline: `
    bg-transparent
    text-[var(--primary-600)]
    border-2 border-[var(--primary-500)]
    hover:bg-[var(--primary-50)]
  `,
  ghost: `
    bg-transparent
    text-[var(--foreground)]
    hover:bg-[var(--neutral-100)]
  `,
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold
        rounded-full
        transition-all duration-300 ease-out
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${SIZES[size]}
        ${VARIANTS[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </>
      )}
    </button>
  );
}


