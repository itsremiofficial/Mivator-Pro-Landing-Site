import { StepperProgress } from './StepperProgress';
import { StepContent } from './components/StepContent';
import { StepperProvider } from './context/StepperContext';

export function Stepper() {
  return (
    <StepperProvider>
      <div className='flex flex-col'>
        <StepperProgress />
        <StepContent />
        <a href="/" className="btn btn-secondary py-4">
          Go Back Home
        </a>
      </div>
    </StepperProvider>
  );
}
