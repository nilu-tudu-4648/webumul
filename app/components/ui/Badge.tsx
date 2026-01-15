'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'gradient';
  size?: 'sm' | 'md';
  icon?: ReactNode;
}

const SIZES = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

const VARIANTS = {
  default: `
    bg-[var(--neutral-100)]
    text-[var(--neutral-700)]
  `,
  primary: `
    bg-[var(--primary-100)]
    text-[var(--primary-700)]
  `,
  success: `
    bg-emerald-100
    text-emerald-700
  `,
  warning: `
    bg-amber-100
    text-amber-700
  `,
  gradient: `
    bg-gradient-to-r from-[var(--primary-100)] via-[var(--accent-100)] to-[var(--secondary-100)]
    text-[var(--primary-700)]
  `,
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        font-medium
        rounded-full
        ${SIZES[size]}
        ${VARIANTS[variant]}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}


