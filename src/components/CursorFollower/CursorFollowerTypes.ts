import { RefObject, ReactElement } from 'react';

export interface MouseTrackerProps {
  isHovering: boolean;
  position: { x: number; y: number };
}

export interface CursorFollowerProps {
  children: React.ReactNode;
  className?: string;
  containerRef?: RefObject<HTMLDivElement>;
  MouseTrackerElement?: (props: MouseTrackerProps) => ReactElement;
}
