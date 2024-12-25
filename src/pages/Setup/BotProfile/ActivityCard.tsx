import React from 'react';
import { Card } from '../ui/Card';
import { ProfileSection } from '../components/ProfileSection';

interface ActivityCardProps {
  activity: string;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Card className="backdrop-blur-xl bg-white/90 hover:shadow-2xl transition-all duration-500">
      <ProfileSection title="Activity">
        <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100/50">
          <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
            {activity || 'No activity set'}
          </p>
        </div>
      </ProfileSection>
    </Card>
  );
}