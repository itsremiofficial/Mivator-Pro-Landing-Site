import React from 'react';
import { z } from 'zod';
import { useStepper } from '../context/StepperContext';
import { Button } from '../ui/Button';
import { OwnerInput } from './OwnerInput';
import { MembersList } from './MembersList';
import { Member } from '../types/bot';
import { Card } from '../ui/Card';
import { Add01Icon } from 'hugeicons-react';

const schema = z.object({
  owners: z.array(z.number().int().positive('Must be a positive number')).min(1, 'At least one owner is required'),
  members: z.array(
    z.object({
      id: z.number().int().positive('Must be a positive number'),
      permissions: z.array(z.string()).min(1, 'At least one permission is required'),
    })
  ),
});

type FormData = z.infer<typeof schema>;

export function Step3Form() {
  const { setCurrentStep, updateFormData } = useStepper();
  const [owners, setOwners] = React.useState<number[]>([0]);
  const [members, setMembers] = React.useState<Member[]>([]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate owners
    const validOwners = owners.filter((id) => id > 0);
    if (validOwners.length === 0) {
      return; // Show error
    }

    // Validate members
    const validMembers = members.filter((member) => member.id > 0 && member.permissions.length > 0);

    updateFormData({ owners: validOwners, members: validMembers });
    setCurrentStep(4);
  };

  const addOwner = () => {
    setOwners([...owners, 0]);
  };

  const updateOwner = (index: number, value: number) => {
    const newOwners = [...owners];
    newOwners[index] = value;
    setOwners(newOwners);
  };

  const removeOwner = (index: number) => {
    if (owners.length > 1) {
      setOwners(owners.filter((_, i) => i !== index));
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="block text-sm font-medium text-secondary dark:text-primary-600 font-nippo tracking-widest">Bot Owners</h2>
            <Button type="button" variant="secondary" onClick={addOwner} className="text-xs py-3 pl-3 pr-4 !flex gap-1 items-center leading-[0]">
              <Add01Icon className="size-4 stroke-3" /> ADD OWNER
            </Button>
          </div>

          <div className="space-y-4">
            {owners.map((owner, index) => (
              <OwnerInput key={index} index={index} value={owner} onChange={(value) => updateOwner(index, value)} onRemove={() => removeOwner(index)} showRemove={index > 0} />
            ))}
          </div>
        </div>

        <MembersList members={members} onChange={setMembers} />

        <div className="flex gap-4 pt-4">
          <Button type="button" variant="secondary" onClick={() => setCurrentStep(2)} className="flex-1">
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
