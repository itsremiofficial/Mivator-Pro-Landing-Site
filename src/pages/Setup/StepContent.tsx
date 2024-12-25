import React from 'react';
import { cn } from '../../utils/cn';
import { Step1Form } from './forms/Step1Form';
import { Step2Form } from './forms/Step2Form';
import { Step3Form } from './forms/Step3Form';
import { BotProfile } from './BotProfile/BotProfile';
import { useStepper } from './StepperContext';

export function StepContent() {
  const { currentStep } = useStepper();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Form />;
      case 2:
        return <Step2Form />;
      case 3:
        return <Step3Form />;
      case 4:
        return <BotProfile />;
      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "w-full animate-fade-in",
      currentStep === 4 ? "p-0" : "bg-white rounded-lg shadow-lg p-6"
    )}>
      {renderStep()}
    </div>
  );
}