import { cn } from '@/utils/utils';
import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-secondary dark:text-primary-600 font-nippo tracking-widest">{label}</label>}
      <div className="relative group">
        {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-900 to-primary-1000 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300" /> */}
        <textarea
          ref={ref}
          className={cn(
            'relative w-full px-4 py-3 rounded-2xl transition-all duration-200 border min-h-[150px] !resize-none',
            'font-nippo font-medium tracking-wider',
            'placeholder:text-light-primary placeholder:dark:text-primary-500',
            'text-secondary dark:text-primary-400',
            'focus:outline-none focus:ring-1 focus:ring-offset-0',
            error ? 'bg-red-500/10 border-red-400 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400' : 'border-primary focus:border-primary focus:ring-primary-700',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-sm font-nippo font-medium tracking-wide text-red-500 dark:text-red-400 animate-shake">{error}</p>}
    </div>
  );
});
