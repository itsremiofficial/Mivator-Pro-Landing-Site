import React from 'react';
import { Card } from '../ui/Card';
import { ProfileSection } from '../components/ProfileSection';
import { OwnerCard } from '../components/OwnerCard';

interface OwnersCardProps {
  owners: number[];
}

export function OwnersCard({ owners }: OwnersCardProps) {
  return (
    <Card className="backdrop-blur-xl bg-white/90 hover:shadow-2xl transition-shadow duration-300">
      <ProfileSection 
        title="Bot Owners" 
        subtitle={`${owners?.length || 0} owners`}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {owners?.map((owner, index) => (
            <OwnerCard key={index} owner={owner} index={index} />
          ))}
        </div>
      </ProfileSection>
    </Card>
  );
}