import { cn } from '@/utils/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button className={cn('btn relative px-5 py-4', 'focus:outline-none', variant === 'primary' && ['btn-primary'], variant === 'secondary' && ['btn-secondary'], className)} {...props}>
      {children}
    </button>
  );
}
