import { Input } from '../ui/Input';
import { MultiSelect } from '../ui/MultiSelect';
import { Button } from '../ui/Button';

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
    <div className="space-y-4 p-4 bg-light-300 rounded-2xl">
      <div className="flex gap-2 items-start">
        <div className="flex-1">
          <Input type="number" value={value || ''} onChange={(e) => onChange(parseInt(e.target.value, 10))} placeholder={`Member ID #${index + 1}`} error={error} min={1} required />
        </div>
        {showRemove && (
          <Button type="button" variant="secondary" onClick={onRemove} className="px-3 mt-1" aria-label="Remove member">
            ✕
          </Button>
        )}
      </div>

      <MultiSelect label="Member Permissions" options={availablePermissions} value={permissions} onChange={onPermissionsChange} />
    </div>
  );
}
