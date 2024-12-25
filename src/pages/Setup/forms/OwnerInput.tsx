import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface OwnerInputProps {
  index: number;
  value: number;
  onChange: (value: number) => void;
  onRemove: () => void;
  error?: string;
  showRemove: boolean;
}

export function OwnerInput({
  index,
  value,
  onChange,
  onRemove,
  error,
  showRemove
}: OwnerInputProps) {
  return (
    <div className="flex gap-2 items-start">
      <div className="flex-1">
        <Input
          type="number"
          value={value || ''}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          placeholder={`Owner ID #${index + 1}`}
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
          className="px-3 mt-1"
          aria-label="Remove owner"
        >
          ✕
        </Button>
      )}
    </div>
  );
}