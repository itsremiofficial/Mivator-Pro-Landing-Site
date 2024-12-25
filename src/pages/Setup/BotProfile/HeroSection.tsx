import React from 'react';
import { StatusBadge } from '../components/StatusBadge';
import { InfoBadge } from './InfoBadge';
import { Card } from '../ui/Card';

interface HeroSectionProps {
  botName: string;
  botId: number;
  botStatus: string;
  botSecret: string;
  botToken: string;
}

export function HeroSection({ botName, botId, botStatus, botSecret, botToken }: HeroSectionProps) {
  return (
    <Card className="overflow-hidden backdrop-blur-xl bg-white/90">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-purple-500/10 to-pink-500/10" />
      
      <div className="relative px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-conic-gradient animate-spin-slow opacity-75 blur-lg group-hover:opacity-100 transition-all duration-500" />
            <div className="relative w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[2rem] rotate-3 hover:rotate-0 transform-gpu flex items-center justify-center transition-all duration-500 shadow-xl group-hover:shadow-2xl">
              <span className="text-6xl font-bold text-white/90 transform transition-transform group-hover:scale-110">
                {botName?.[0]?.toUpperCase() || '?'}
              </span>
            </div>
          </div>
          
          {/* Bot Info */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {botName || 'Unnamed Bot'}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <StatusBadge status={botStatus} />
                <span className="text-gray-300">•</span>
                <div className="px-4 py-1.5 bg-gray-50/80 backdrop-blur-sm rounded-full text-sm text-gray-600 font-medium border border-gray-100/50">
                  ID: {botId}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <InfoBadge label="Secret" value={botSecret} secure />
              <InfoBadge label="Token" value={botToken} secure />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}