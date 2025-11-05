import { cn } from '@/utils';
import { ViewIcon, ViewOffSlashIcon } from 'hugeicons-react';
import { useState } from 'react';

interface InfoBadgeProps {
  label: string;
  value: string;
  secure?: boolean;
}

export function InfoBadge({ label, value, secure = false }: InfoBadgeProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="group flex flex-col gap-1">
      <span className="text-xs tracking-widest uppercase font-medium font-nippo text-secondary dark:text-primary-600 transition-colors pl-2">{label}</span>
      <div className="px-3 py-2.5 flex items-center justify-between pr-5 gap-3 transition-all duration-300  dark:bg-primary-700/20 backdrop-blur-sm rounded-2xl border border-secondary/10 dark:text-primary-500 dark:border-primary-700/50">
        <span className={cn('text-sm font-mono text-light-800 dark:text-primary-700 whitespace-nowrap truncate max-w-lg', { 'text-secondary dark:text-primary-500': show })}>
          {secure && !show ? '•'.repeat(value.length) : value}
        </span>
        {secure && (
          <button
            onClick={() => setShow(!show)}
            className={cn('ml-1 cursor-pointer text-light-800 hover:text-secondary dark:text-primary hover:dark:text-primary-500 transition-colors', { 'text-secondary dark:text-primary-500': show })}
          >
            {show ? <ViewIcon className="size-5 stroke-2" /> : <ViewOffSlashIcon className="size-5 stroke-2" />}
          </button>
        )}
      </div>
    </div>
  );
}
