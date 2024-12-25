import React from 'react';
import { cn } from '../../utils/cn';
import { useStepper } from './StepperContext';

interface StepIndicatorProps {
  step: number;
  label: string;
}

export function StepIndicator({ step, label }: StepIndicatorProps) {
  const { currentStep } = useStepper();
  
  const isActive = currentStep === step;
  const isCompleted = currentStep > step;

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all",
          isActive && "border-blue-500 bg-blue-50 text-blue-600",
          isCompleted && "border-green-500 bg-green-50 text-green-600",
          !isActive && !isCompleted && "border-gray-300 text-gray-500"
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
      <span className="mt-2 text-sm text-gray-600">{label}</span>
    </div>
  );
}