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
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {subtitle && <span className="text-sm text-gray-500">{subtitle}</span>}
      </div>
      {children}
    </section>
  );
}
