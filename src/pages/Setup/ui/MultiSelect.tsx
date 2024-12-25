import { cn } from '@/utils/utils';
import { Delete03Icon } from 'hugeicons-react';
import React, { forwardRef } from 'react';
import ReactSelect, { components, MultiValueRemoveProps } from 'react-select';

interface SelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  label?: string;
  error?: string;
  options: SelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
}

export const MultiSelect = forwardRef<any, MultiSelectProps>(({ label, error, options, value, onChange }, ref) => {
  const selectedOptions = options.filter((option) => value.includes(option.value));

  const handleChange = (selected: readonly SelectOption[]) => {
    onChange(selected.map((option) => option.value));
  };

  const MultiValueRemove = (props: MultiValueRemoveProps<SelectOption, true>) => {
    return (
      <components.MultiValueRemove {...props}>
        <Delete03Icon className="size-4.5 stroke-2" />
      </components.MultiValueRemove>
    );
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-secondary dark:text-primary-600 font-nippo tracking-widest">{label}</label>}
      <div className="relative group">
        {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300" /> */}
        <ReactSelect
          ref={ref}
          isMulti
          options={options}
          value={selectedOptions}
          onChange={handleChange}
          components={{ MultiValueRemove }}
          classNames={{
            control: (state) =>
              cn(
                '!bg-transparent !rounded-2xl !border !border-primary !px-2 !py-4 !min-h-0 !z-10',
                'hover:!border-blue-300',
                state.isFocused && '!border-blue-400 !ring-1 !ring-blue-100 ',
                error && '!border-red-200 !ring-red-100'
              ),
            menu: () => 'dark:!bg-primary-1100 !bg-light-300 !rounded-2xl !border-none !mt-2 !overflow-hidden !p-3 !pt-0',
            option: (state) =>
              cn(
                '!px-4 !py-4 !text-sm rounded-xl mt-2 font-nippo tracking-wide font-medium !cursor-pointer dark:!text-primary-700 !text-secondary',
                state.isFocused && 'dark:!bg-primary-1000 !bg-light-400 dark:!text-primary-500 !text-secondary',
                state.isSelected && 'dark:!bg-primary-900 !bg-light-500 dark:!text-primary-400 !text-secondary'
              ),
            placeholder: () => 'dark:!text-primary !text-primary',
            multiValue: () => 'dark:!bg-light-500 !rounded-lg !flex !gap-1.5 !items-center !overflow-hidden',
            multiValueLabel: () => 'dark:!text-primary-500 !text-secondary !font-nippo !font-medium !tracking-wide !text-sm !pl-3',
            multiValueRemove: () => '!bg-red-100 !text-red-400 hover:!bg-red-200 hover:!text-red-600 !cursor-pointer size-8 flex items-center justify-center !transition-colors !duration-300',
            valueContainer: () => '!gap-1',
            indicatorsContainer: () => '!gap-1',
            clearIndicator: () => '!p-1 !text-primary hover:!text-primary-700 !cursor-pointer',
            dropdownIndicator: () => '!p-1 !text-primary hover:!text-primary-700 !cursor-pointer',
            indicatorSeparator: () => '!bg-gray-200',
          }}
        />
      </div>
      {error && <p className="text-sm text-red-500 animate-shake">{error}</p>}
    </div>
  );
});

MultiSelect.displayName = 'MultiSelect';
