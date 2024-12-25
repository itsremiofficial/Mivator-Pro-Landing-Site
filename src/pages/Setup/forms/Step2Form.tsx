import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStepper } from '../context/StepperContext';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const schema = z.object({
  botName: z.string().min(1, 'Bot Name is required'),
  botStatus: z.enum(['online', 'idle', 'dnd', 'streaming'] as const),
  botActivity: z.string().min(1, 'Bot Activity is required'),
});

type FormData = z.infer<typeof schema>;

const statusOptions = [
  { value: 'online', label: 'Online' },
  { value: 'idle', label: 'Idle' },
  { value: 'dnd', label: 'Do Not Disturb' },
  { value: 'streaming', label: 'Streaming' },
];

export function Step2Form() {
  const { setCurrentStep, updateFormData } = useStepper();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    updateFormData(data);
    setCurrentStep(3);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <Input label="Bot Name" {...register('botName')} error={errors.botName?.message} placeholder="Enter bot name" />

          <Controller
            name="botStatus"
            control={control}
            render={({ field }) => (
              <Select
                label="Bot Status"
                options={statusOptions}
                value={statusOptions.find((option) => option.value === field.value)}
                onChange={(option) => field.onChange(option?.value)}
                error={errors.botStatus?.message}
                placeholder="Select bot status"
              />
            )}
          />

          <Textarea label="Bot Activity" {...register('botActivity')} error={errors.botActivity?.message} placeholder="What is your bot doing?" />
        </div>

        <div className="flex gap-4">
          <Button type="button" variant="secondary" onClick={() => setCurrentStep(1)} className="flex-1">
            Previous
          </Button>
          <Button type="submit" className="flex-1">
            Next Step
          </Button>
        </div>
      </form>
    </Card>
  );
}
