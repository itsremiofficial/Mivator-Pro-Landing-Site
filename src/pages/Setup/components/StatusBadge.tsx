import { cn } from '@/utils/utils';
import { BotStatus } from '../types/bot';

interface StatusBadgeProps {
  status?: BotStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn(
        "w-2.5 h-2.5 rounded-full animate-pulse-slow",
        {
          'bg-green-500': status === 'online',
          'bg-yellow-500': status === 'idle',
          'bg-red-500': status === 'dnd',
          'bg-purple-500': status === 'streaming',
          'bg-gray-300': !status
        }
      )} />
      <span className={cn(
        "text-sm font-medium capitalize",
        {
          'text-green-700': status === 'online',
          'text-yellow-700': status === 'idle',
          'text-red-700': status === 'dnd',
          'text-purple-700': status === 'streaming',
          'text-gray-500': !status
        }
      )}>
        {status || 'offline'}
      </span>
    </div>
  );
}