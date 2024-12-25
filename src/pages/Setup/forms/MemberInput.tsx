import { Input } from '../ui/Input';
import { MultiSelect } from '../ui/MultiSelect';
import { Button } from '../ui/Button';
import { Delete03Icon } from 'hugeicons-react';
import { cn } from '@/utils/utils';

interface MemberInputProps {
  index: number;
  value: number;
  permissions: string[];
  availablePermissions: { value: string; label: string }[];
  onChange: (value: number) => void;
  onPermissionsChange: (permissions: string[]) => void;
  onRemove: () => void;
  error?: string;
  showRemove: boolean;
}

export function MemberInput({ index, value, permissions, availablePermissions, onChange, onPermissionsChange, onRemove, error, showRemove }: MemberInputProps) {
  return (
    <div className={cn('space-y-4 p-6 rounded-3xl', 'bg-light-300 dark:bg-primary-1000/50')}>
      <div className="flex gap-2 items-start">
        <div className="flex-1">
        <Input
            type="number"
            value={value || ''}
            onChange={(e) => onChange(parseInt(e.target.value, 10))}
            placeholder={`Member ID #${index + 1}`}
            error={error}
            min={1}
            required
          />
        </div>
        {showRemove && (
          <Button
            type="button"
            variant="secondary"
            onClick={onRemove}
            className={cn('p-4.5 !aspect-square', 'bg-red-400/10 hover:bg-red-900', 'border-red-400/50 hover:border-red-900', 'text-red-400 hover:text-red-100')}
            aria-label="Remove member"
          >
            <Delete03Icon className="stroke-2" />
          </Button>
        )}
      </div>

      <MultiSelect label="Member Permissions" options={availablePermissions} value={permissions} onChange={onPermissionsChange} />
    </div>
  );
}
