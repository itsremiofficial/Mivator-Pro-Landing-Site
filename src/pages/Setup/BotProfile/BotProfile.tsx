import { useStepper } from '../context/StepperContext';
import { HeroSection } from './HeroSection';
import { ActivityCard } from './ActivityCard';
import { OwnersCard } from './OwnersCard';
import { MembersCard } from './MembersCard';
import { DashboardButton } from './DashboardButton';

export function BotProfile() {
  const { formData } = useStepper();

  return (
    <div className="relative min-h-screen">
      <div className="relative py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <HeroSection
            botName={formData.botName || ''}
            botId={formData.botId || 0}
            botStatus={formData.botStatus || 'online'}
            botSecret={formData.botSecret || ''}
            botToken={formData.botToken || ''}
          />
          <ActivityCard activity={formData.botActivity || ''} />
          <OwnersCard owners={formData.owners || []} />
          <MembersCard members={formData.members || []} />
          <DashboardButton />
        </div>
      </div>
    </div>
  );
}
