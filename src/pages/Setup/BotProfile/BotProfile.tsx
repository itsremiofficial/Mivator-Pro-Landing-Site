import React from 'react';
import { useStepper } from '../context/StepperContext';
import { Background } from './Background';
import { HeroSection } from './HeroSection';
import { ActivityCard } from './ActivityCard';
import { OwnersCard } from './OwnersCard';
import { MembersCard } from './MembersCard';
import { DashboardButton } from './DashboardButton';

export function BotProfile() {
  const { formData } = useStepper();

  return (
    <div className="relative min-h-screen">
      <Background />
      
      <div className="relative py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <HeroSection 
            botName={formData.botName}
            botId={formData.botId}
            botStatus={formData.botStatus}
            botSecret={formData.botSecret}
            botToken={formData.botToken}
          />
          <ActivityCard activity={formData.botActivity} />
          <OwnersCard owners={formData.owners || []} />
          <MembersCard members={formData.members || []} />
          <DashboardButton />
        </div>
      </div>
    </div>
  );
}