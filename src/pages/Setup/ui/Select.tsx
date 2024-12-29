import { cn } from '@/utils/utils';
import { forwardRef } from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<ReactSelectProps<SelectOption, false>, 'classNames'> {
  label?: string;
  error?: string;
  options: SelectOption[];
}

export const Select = forwardRef<any, SelectProps>(({ label, error, options, className, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-secondary dark:text-primary-600 font-nippo tracking-widest">{label}</label>}
      <div className="relative group">
        {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-900 to-primary-1000 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300" /> */}
        <ReactSelect
          ref={ref}
          options={options}
          className={cn('relative', className)}
          placeholder="Select Bot Status"
          classNames={{
            control: (state) =>
              cn(
                '!bg-transparent !rounded-2xl !border !border-primary !px-2 !py-4 !min-h-0 relative',
                'hover:!border-primary !cursor-pointer !font-nippo !font-medium !tracking-wider',
                state.isFocused && '!border-primary !ring-1 !ring-primary ',
                error && '!bg-red-500/10 !border-red-400 focus:!border-red-400 focus:!ring-red-400 placeholder:!text-red-400'
              ),
            menu: () => 'dark:!bg-primary-1100 !bg-light-300 !rounded-2xl !border-none !mt-2 !overflow-hidden !p-3 !pt-0 z-100',
            option: (state) =>
              cn(
                '!px-4 !py-4 !text-sm rounded-xl mt-2 font-nippo tracking-wide font-medium !cursor-pointer dark:!text-primary-700 !text-secondary',
                state.isFocused && 'dark:!bg-primary-1000 !bg-light-400 dark:!text-primary-500 !text-secondary',
                state.isSelected && 'dark:!bg-primary-900 !bg-light-500 dark:!text-primary-400 !text-secondary'
              ),
            placeholder: () => 'dark:!text-primary !text-primary',
            singleValue: () => 'dark:!text-primary-500 !text-secondary',
            input: () => 'dark:!text-primary-500 !text-secondary',
            valueContainer: () => '!gap-1',
            indicatorsContainer: () => '!gap-1',
            clearIndicator: () => '!p-1 !text-gray-400 hover:!text-gray-600',
            dropdownIndicator: () => '!p-1 !text-primary hover:!text-primary-700',
            indicatorSeparator: () => '!hidden',
          }}
          {...props}
        />
      </div>
      {error && <p className="text-sm font-nippo font-medium tracking-wide text-red-500 dark:text-red-400 animate-shake">{error}</p>}
    </div>
  );
});

Select.displayName = 'Select';
