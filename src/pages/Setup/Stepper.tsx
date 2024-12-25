import { StepperProvider } from './context/StepperContext';
import { StepperProgress } from './StepperProgress';
import { StepContent } from './components/StepContent';

export function Stepper() {
  return (
    <StepperProvider>
      <div className="w-3xl mx-auto px-4 py-48">
        <StepperProgress />
        <StepContent />
      </div>
    </StepperProvider>
  );
}
