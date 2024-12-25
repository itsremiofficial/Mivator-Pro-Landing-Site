import { Card } from '../ui/Card';
import { ProfileSection } from '../components/ProfileSection';

interface ActivityCardProps {
  activity: string;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Card className="backdrop-blur-xl dark:bg-primary-900 bg-transparent transition-all duration-500 dark:border-primary-900 border-light-500 ">
      <ProfileSection title="Activity">
        <div className="bg-gradient-to-br backdrop-blur-sm rounded-2xl p-8 border from-light-300 to-light-300 dark:from-primary-800/50 dark:to-primary-800/50 dark:border-primary-800/70 border-light-500">
          <p className="text-secondary dark:text-primary-600 font-nippo font-medium tracking-wider whitespace-pre-wrap leading-relaxed">{activity || 'No activity set'}</p>
        </div>
      </ProfileSection>
    </Card>
  );
}
