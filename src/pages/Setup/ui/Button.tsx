import { cn } from '@/utils/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'btn relative px-5 py-4',
        'focus:outline-none focus:ring-1 focus:ring-offset-2',
        variant === 'primary' && ['btn-primary', 'focus:dark:ring-primary-500 focus:ring-light-primary'],
        variant === 'secondary' && ['btn-secondary', 'focus:dark:ring-primary-500 focus:ring-light-primary'],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
