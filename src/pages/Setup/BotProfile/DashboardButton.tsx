import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function DashboardButton() {
  return (
    <Card className="backdrop-blur-xl bg-white/90 hover:shadow-2xl transition-all duration-500">
      <div className="flex justify-center py-2">
        <Button className="group w-full sm:w-auto text-lg">
          <span className="flex items-center justify-center gap-3">
            <svg 
              className="w-6 h-6 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
            Go to Dashboard
          </span>
        </Button>
      </div>
    </Card>
  );
}