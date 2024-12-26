import React from 'react';

interface OwnerCardProps {
  owner: number;
  index: number;
}

export function OwnerCard({ owner, index }: OwnerCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur" />
      <div className="relative p-6 bg-light-300 dark:bg-primary-800/50 border-light-500 dark:border-primary-800/70 rounded-2xl border transition-all duration-300">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 bg-light-600 !aspect-square dark:bg-primary
            rounded-xl flex items-center justify-center transition-all duration-300"
          >
            <span className="text-xl font-nippo font-medium dark:text-primary-400 text-secondary">{index + 1}</span>
          </div>
          <div>
            <p className="text-sm tracking-widest uppercase font-medium font-nippo text-secondary dark:text-primary-400 transition-colors">Owner</p>
            <p className="text-xs dark:text-primary-600 inline-flex gap-2 font-nippo font-medium items-center">
              <kbd className="bg-light-500 dark:bg-primary dark:text-primary-400 tracking-widest font-mont text-secondary font-semibold px-1 rounded-sm">ID</kbd> {owner}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
