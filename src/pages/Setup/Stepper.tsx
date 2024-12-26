import { StepperProgress } from './StepperProgress';
import { StepContent } from './components/StepContent';
import { StepperProvider } from './context/StepperContext';

export function Stepper() {
  return (
    <StepperProvider>
      <div className="w-3xl mx-auto h-screen flex items-center justify-center">
        <div>
          <StepperProgress />
          <StepContent />
          <a href="/" className="btn btn-secondary mt-10 py-4">
            Go Back Home
          </a>
        </div>
      </div>
    </StepperProvider>
  );
}
