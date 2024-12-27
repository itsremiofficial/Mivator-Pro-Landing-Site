import { Card } from '../ui/Card';
import { ProfileSection } from '../components/ProfileSection';
import { MemberCard } from '../components/MemberCard';
import { Member } from '../types/bot';

interface MembersCardProps {
  members: Member[];
}

export function MembersCard({ members }: MembersCardProps) {
  if (!members?.length) return null;

  return (
    <Card className="backdrop-blur-xl dark:bg-primary-900 bg-transparent transition-all duration-500 dark:border-primary-900 border-light-500">
      <ProfileSection title="Members" subtitle={`${members.length} members`}>
        <div className="grid gap-4 sm:grid-cols-2">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </ProfileSection>
    </Card>
  );
}
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
