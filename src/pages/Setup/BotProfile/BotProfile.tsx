import { useStepper } from '../context/StepperContext';
import { HeroSection } from './HeroSection';
import { ActivityCard } from './ActivityCard';
import { OwnersCard } from './OwnersCard';
import { MembersCard } from './MembersCard';
import { DashboardButton } from './DashboardButton';
import { useState } from 'react';
import { Loader } from '../components/LaunchStepsLoader';
import { Cancel01Icon } from 'hugeicons-react';

const loadingStates = [
  {
    text: 'Checking the credentials',
  },
  {
    text: 'Setting up a Bot User',
  },
  {
    text: 'Editting Bot Details',
  },
  {
    text: 'Adding Owners',
  },
  {
    text: 'Adding other Users',
  },
  {
    text: 'Setting up Permissions',
  },
  {
    text: 'Bot user is Ready, Launching!',
  },
  {
    text: 'Congratulations! Your bot is ready to use.',
  },
];

export function BotProfile() {
  const { formData } = useStepper();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    console.log('Button clicked!');
  };

  return (
    <div className="relative ">
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
          <DashboardButton onClick={handleClick} />
          <div className=" ">
            <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

            {loading && (
              <button className="btn btn-primary aspect-square p-3 fixed top-4 right-4 text-black dark:text-white z-[120]" onClick={() => setLoading(false)}>
                <Cancel01Icon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
