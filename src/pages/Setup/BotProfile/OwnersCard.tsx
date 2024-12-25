import { Card } from '../ui/Card';
import { ProfileSection } from '../components/ProfileSection';
import { OwnerCard } from '../components/OwnerCard';

interface OwnersCardProps {
  owners: number[];
}

export function OwnersCard({ owners }: OwnersCardProps) {
  return (
    <Card className="backdrop-blur-xl dark:bg-primary-900 bg-transparent transition-all duration-500 dark:border-primary-900 border-light-500">
      <ProfileSection title="Bot Owners" subtitle={`${owners?.length || 0} owners`}>
        <div className="grid gap-4 sm:grid-cols-2">
          {owners?.map((owner, index) => (
            <OwnerCard key={index} owner={owner} index={index} />
          ))}
        </div>
      </ProfileSection>
    </Card>
  );
}
