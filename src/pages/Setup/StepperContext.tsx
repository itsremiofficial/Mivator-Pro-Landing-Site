import React, { createContext, useContext, useState } from 'react';
import { BotFormData } from './types/bot';

interface StepperContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  formData: Partial<BotFormData>;
  updateFormData: (data: Partial<BotFormData>) => void;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export function StepperProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<BotFormData>>({});

  const updateFormData = (data: Partial<BotFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep, formData, updateFormData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepper() {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepper must be used within a StepperProvider');
  }
  return context;
}