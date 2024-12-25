import { cn } from '@/utils/utils';

interface StepConnectorProps {
  isActive: boolean;
  isCompleted: boolean;
}

export function StepConnector({ isActive, isCompleted }: StepConnectorProps) {
  return (
    <div className={cn('flex-1 h-0.5 transition-all duration-300 rounded-full relative dark:bg-primary-1000 bg-light-400')}>
      <div
        className={`absolute inset-0 bg-gradient-to-r from-light-700 to-secondary dark:from-primary-800 dark:to-primary-700 w-0 transition-[width] duration-500 ease-fluid ${
          (isActive || isCompleted) && 'w-full'
        } ${isCompleted && 'dark:from-primary-800 dark:to-primary-800'}`}
      ></div>
    </div>
  );
}
