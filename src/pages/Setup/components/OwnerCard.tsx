import React from 'react';

interface OwnerCardProps {
  owner: number;
  index: number;
}

export function OwnerCard({ owner, index }: OwnerCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur" />
      <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl 
                        flex items-center justify-center group-hover:scale-105 transition-all duration-300">
            <span className="text-sm font-medium bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              #{index + 1}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Owner</p>
            <p className="text-sm text-gray-500 font-mono">ID: {owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
}