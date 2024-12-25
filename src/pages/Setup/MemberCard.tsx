import React from 'react';
import { Member } from '../../types/bot';

interface MemberCardProps {
  member: Member;
  index: number;
}

export function MemberCard({ member, index }: MemberCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-300 blur" />
      <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-500/10 to-gray-400/10 rounded-xl 
                        flex items-center justify-center group-hover:scale-105 transition-all duration-300">
            <span className="text-sm font-medium text-gray-600">
              #{index + 1}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Member</p>
            <p className="text-sm text-gray-500 font-mono">ID: {member.id}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {member.permissions.map((permission, pIndex) => (
            <span 
              key={pIndex}
              className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium
                       border border-gray-100 hover:bg-gray-100 transition-all duration-200 cursor-default"
            >
              {permission.split('_').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}