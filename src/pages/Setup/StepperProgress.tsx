import { StepIndicator } from './components/StepIndicator';
import { StepConnector } from './components/StepConnector';
import { useStepper } from './context/StepperContext';

export function StepperProgress() {
  const { currentStep } = useStepper();

  return (
    <div className="flex justify-between items-center mb-8">
      <StepIndicator step={1} label="Credentials" />
      <StepConnector isActive={currentStep === 2} isCompleted={currentStep > 2} />
      <StepIndicator step={2} label="Details" />
      <StepConnector isActive={currentStep === 3} isCompleted={currentStep > 3} />
      <StepIndicator step={3} label="Access" />
      <StepConnector isActive={currentStep === 4} isCompleted={currentStep > 4} />
      <StepIndicator step={4} label="Launch" />
    </div>
  );
}
