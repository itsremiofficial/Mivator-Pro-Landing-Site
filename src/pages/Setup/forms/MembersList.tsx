import React from 'react';
import { Member } from '../types/bot';
import { Button } from '../ui/Button';
import { MemberInput } from './MemberInput';
import { Add01Icon, AddSquareIcon } from 'hugeicons-react';

const permissionOptions = [
  { value: 'manage_messages', label: 'Manage Messages' },
  { value: 'kick_members', label: 'Kick Members' },
  { value: 'ban_members', label: 'Ban Members' },
  { value: 'manage_channels', label: 'Manage Channels' },
  { value: 'manage_roles', label: 'Manage Roles' },
];

interface MembersListProps {
  members: Member[];
  onChange: (members: Member[]) => void;
}

export function MembersList({ members, onChange }: MembersListProps) {
  const addMember = () => {
    onChange([...members, { id: 0, permissions: [] }]);
  };

  const updateMember = (index: number, updates: Partial<Member>) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], ...updates };
    onChange(newMembers);
  };

  const removeMember = (index: number) => {
    onChange(members.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="block text-sm font-medium text-secondary dark:text-primary-600 font-nippo tracking-widest">Team Members</h2>
        <Button type="button" variant="secondary" onClick={addMember} className="text-xs py-3 pl-3 pr-4 !flex gap-1 items-center leading-[0]">
          <Add01Icon className='size-4 stroke-3'/> ADD MEMBER
        </Button>
      </div>

      <div className="space-y-4">
        {members.map((member, index) => (
          <MemberInput
            key={index}
            index={index}
            value={member.id}
            permissions={member.permissions}
            availablePermissions={permissionOptions}
            onChange={(id) => updateMember(index, { id })}
            onPermissionsChange={(permissions) => updateMember(index, { permissions })}
            onRemove={() => removeMember(index)}
            showRemove={members.length > 1}
          />
        ))}
      </div>
    </div>
  );
}
