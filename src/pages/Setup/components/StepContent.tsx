import React from 'react';
import { useStepper } from '../context/StepperContext';
import { Step1Form } from '../forms/Step1Form';
import { Step2Form } from '../forms/Step2Form';
import { Step3Form } from '../forms/Step3Form';
import { BotProfile } from '../BotProfile/BotProfile';
import { cn } from '@/utils/utils';

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

  return <div className={cn('w-full animate-fade-in')}>{renderStep()}</div>;
}
