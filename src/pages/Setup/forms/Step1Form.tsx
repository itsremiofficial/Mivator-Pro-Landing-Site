import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStepper } from '../context/StepperContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const schema = z.object({
  botSecret: z.string().min(1, 'Bot Secret is required'),
  botToken: z.string().min(1, 'Bot Token is required'),
  botId: z.number().int().positive('Bot ID must be a positive number'),
});

type FormData = z.infer<typeof schema>;

export function Step1Form() {
  const { setCurrentStep, updateFormData } = useStepper();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    updateFormData(data);
    setCurrentStep(2);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <Input label="Bot ID" type="number" {...register('botId', { valueAsNumber: true })} error={errors.botId?.message} placeholder="Enter bot ID" />
          <Input label="Bot Token" type="text" {...register('botToken')} error={errors.botToken?.message} placeholder="Enter bot token" />
          <Input label="Bot Secret" type="text" {...register('botSecret')} error={errors.botSecret?.message} placeholder="Enter bot secret" />
        </div>

        <Button type="submit" className="w-full">
          Next Step
        </Button>
      </form>
    </Card>
  );
}
