'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'gradient' | 'glass' | 'bordered';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const VARIANTS = {
  default: `
    bg-[var(--card-background)]
    border border-[var(--border-color)]
  `,
  gradient: `
    bg-gradient-to-br from-[var(--card-background)] to-[var(--background-secondary)]
    border border-[var(--border-color)]
  `,
  glass: `
    glass
  `,
  bordered: `
    bg-[var(--card-background)]
    gradient-border
  `,
};

export default function Card({
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl
        p-6
        transition-all duration-300 ease-out
        ${VARIANTS[variant]}
        ${hover ? 'hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary-200)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}


