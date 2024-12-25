import { StatusBadge } from '../components/StatusBadge';
import { InfoBadge } from './InfoBadge';
import { Card } from '../ui/Card';
import { BotStatus } from '../types/bot';

interface HeroSectionProps {
  botName: string;
  botId: number;
  botStatus: BotStatus;
  botSecret: string;
  botToken: string;
}

export function HeroSection({ botName, botId, botStatus, botSecret, botToken }: HeroSectionProps) {
  return (
    <Card className="overflow-hidden backdrop-blur-xl bg-transparent dark:bg-primary-1000 p-10 dark:border-primary-900 border-light-500">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-purple-500/10 to-pink-500/10" />

      <div className="relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          {/* <div className="relative group">
            <div className="absolute -inset-1 bg-conic-gradient animate-spin-slow opacity-75 blur-lg group-hover:opacity-100 transition-all duration-500" />
            <div className="relative w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[2rem] rotate-3 hover:rotate-0 transform-gpu flex items-center justify-center transition-all duration-500 shadow-xl group-hover:shadow-2xl">
              <span className="text-6xl font-bold text-white/90 transform transition-transform group-hover:scale-110">{botName?.[0]?.toUpperCase() || '?'}</span>
            </div>
          </div> */}

          {/* Bot Info */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="space-y-4 flex justify-between items-center">
              <div className="flex items-center justify-center gap-4 mb-0">
                <h1 className="text-5xl font-bold font-nippo capitalize dark:text-primary text-secondary leading-tight">{botName || 'Unnamed Bot'}</h1>
                <StatusBadge status={botStatus} />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="flex flex-col gap-1 text-sm font-medium font-nippo tracking-widest">
                <label htmlFor="" className="text-xs tracking-widest uppercase font-medium font-nippo text-secondary dark:text-primary-600 transition-colors pl-2">
                  Bot ID
                </label>
                <div className="px-3 py-2.5 dark:bg-primary-700/20 backdrop-blur-sm rounded-2xl border border-secondary/10 dark:text-primary-500 dark:border-primary-700/50">{botId}</div>
              </span>
              <InfoBadge label="Secret" value={botSecret} secure />
              <InfoBadge label="Token" value={botToken} secure />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
