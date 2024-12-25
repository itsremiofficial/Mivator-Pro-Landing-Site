import { StepperProgress } from './StepperProgress';
import { StepContent } from './components/StepContent';
import { StepperProvider } from './context/StepperContext';

export function Stepper() {
  return (
    <StepperProvider>
      <div className="w-3xl mx-auto px-4 py-48 min-h-[120vh] h-full">
        <StepperProgress />
        <StepContent />
      </div>
    </StepperProvider>
  );
}
