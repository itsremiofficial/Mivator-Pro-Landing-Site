import React from 'react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

interface BotOwnerInputProps {
  index: number;
  value: number;
  onChange: (value: number) => void;
  onRemove: () => void;
  error?: string;
  showRemove: boolean;
}

export function BotOwnerInput({
  index,
  value,
  onChange,
  onRemove,
  error,
  showRemove
}: BotOwnerInputProps) {
  return (
    <div className="flex gap-2 items-start">
      <div className="flex-1">
        <Input
          type="number"
          value={value || ''}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          placeholder={`Bot Owner ID #${index + 1}`}
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
          aria-label="Remove bot owner"
        >
          ✕
        </Button>
      )}
    </div>
  );
}