import React from 'react';

interface ProfileSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function ProfileSection({ title, subtitle, children }: ProfileSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg tracking-widest font-medium font-nippo text-secondary dark:text-primary-600 transition-colors pl-2">{title}</h2>
        {subtitle && <span className="text-sm font-nippo font-semibold tracking-wide text-light-600 dark:text-primary/80 uppercase">{subtitle}</span>}
      </div>
      {children}
    </section>
  );
}
