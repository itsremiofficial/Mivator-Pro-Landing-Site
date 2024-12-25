import { cn } from '@/utils/utils';
import { useStepper } from '../context/StepperContext';

interface StepIndicatorProps {
  step: number;
  label: string;
}

export function StepIndicator({ step, label }: StepIndicatorProps) {
  const { currentStep } = useStepper();

  const isActive = currentStep === step;
  const isCompleted = currentStep > step;

  return (
    <div className="flex flex-col items-center w-24">
      <div
        className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center text-sm font-nippo font-medium border-2 transition-all duration-300',
          isActive && 'border-secondary bg-secondary text-light-200 dark:border-primary dark:bg-primary dark:text-primary-200',
          isCompleted && 'border-green-500 bg-green-50 text-green-600',
          !isActive && !isCompleted && 'border-gray-300 text-gray-500'
        )}
      >
        {isCompleted ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          step
        )}
      </div>
      <span
        className={cn(
          'mt-2 text-xs tracking-wider font-bold uppercase font-nippo transition-colors duration-300',
          isActive && 'text-secondary dark:text-primary',
          isCompleted && 'text-green-500 font-medium',
          !isActive && !isCompleted && 'text-gray-500'
        )}
      >
        {label}
      </span>
    </div>
  );
}
