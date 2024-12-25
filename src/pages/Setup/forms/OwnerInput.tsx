import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Delete03Icon } from 'hugeicons-react';
import { cn } from '@/utils/utils';

interface OwnerInputProps {
  index: number;
  value: number;
  onChange: (value: number) => void;
  onRemove: () => void;
  error?: string;
  showRemove: boolean;
}

export function OwnerInput({ index, value, onChange, onRemove, error, showRemove }: OwnerInputProps) {
  return (
    <div className="flex gap-2 items-start">
      <div className="flex-1">
        <Input type="number" value={value || ''} onChange={(e) => onChange(parseInt(e.target.value, 10))} placeholder={`Owner ID #${index + 1}`} error={error} min={1} required />
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
  );
}
