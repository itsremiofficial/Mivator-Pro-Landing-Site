import { Member } from '../types/bot';

interface MemberCardProps {
  member: Member;
  index: number;
}

export function MemberCard({ member, index }: MemberCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-300 blur" />
      <div className="relative p-6 bg-light-300 dark:bg-primary-800/50 border-light-500 dark:border-primary-800/70 rounded-2xl border transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 bg-light-600 dark:bg-primary
            rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
          >
            <span className="text-xl font-nippo font-medium dark:text-primary-400 text-secondary">{index + 1}</span>
          </div>
          <div>
            <p className="text-sm tracking-widest uppercase font-medium font-nippo text-secondary dark:text-primary-400 transition-colors">Member</p>
            <p className="text-xs dark:text-primary-600 inline-flex gap-2 font-nippo font-medium items-center">
              <kbd className="bg-light-500 dark:bg-primary dark:text-primary-400 tracking-widest font-mont text-secondary font-semibold px-1 rounded-sm">ID</kbd> {member.id}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {member.permissions.map((permission, pIndex) => (
            <span key={pIndex} className="bg-light-500 dark:bg-primary-900 dark:text-primary-500 text-secondary px-2 py-1 rounded-md">
              {permission
                .split('_')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
