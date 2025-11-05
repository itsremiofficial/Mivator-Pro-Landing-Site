import { cn } from '@/utils';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn('rounded-3xl p-6 transition-all duration-300 shadow-2xl', 'border border-primary', 'shadow-primary/15', 'animate-fade-in', className)} {...props}>
      {children}
    </div>
  );
}
