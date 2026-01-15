import { ReactNode } from 'react';
import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string | ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`
        ${align === 'center' ? 'text-center' : 'text-left'}
        max-w-3xl
        ${align === 'center' ? 'mx-auto' : ''}
        ${className}
      `}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant="gradient">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}


