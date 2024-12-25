import { cn } from '@/utils/utils';
import { BotStatus } from '../types/bot';

interface StatusBadgeProps {
  status?: BotStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div
      className={cn('flex items-center gap-2 border py-0.5 px-2.5 rounded-full', {
        'text-green-600 border-green-600': status === 'online',
        'text-yellow-500 border-yellow-500': status === 'idle',
        'text-red-400 border-red-400': status === 'dnd',
        'text-purple-700 border-purple-700': status === 'streaming',
        'text-gray-700 border-gray-500': !status,
      })}
    >
      <span
        className={cn('w-2.5 h-2.5 rounded-full animate-pulse-slow', {
          'bg-green-500': status === 'online',
          'bg-yellow-500': status === 'idle',
          'bg-red-400': status === 'dnd',
          'bg-purple-500': status === 'streaming',
          'bg-gray-300': !status,
        })}
      />
      <span className={cn('text-sm font-medium capitalize')}>{status || 'offline'}</span>
    </div>
  );
}
