import React, { useEffect, useRef, useState } from 'react';
import { CursorFollowerProps, MouseTrackerProps } from '@components/Common/CursorFollower/CursorFollowerTypes';

const CursorFollower: React.FC<CursorFollowerProps> = ({ children, containerRef: externalContainerRef, className, MouseTrackerElement }) => {
  const internalContainerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const containerRef = externalContainerRef || internalContainerRef;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovering(true));
      container.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovering(true));
        container.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, [containerRef]);

  const DefaultMouseTracker = ({ isHovering, position }: MouseTrackerProps) => (
    <div
      className={`
        absolute inset-0
        pointer-events-none
        transition-opacity
        duration-700
        z-[2]
        ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        mix-blend-overlay transition-all duration-1000
      `}
      style={{
        backgroundImage: `radial-gradient(circle 100px at ${position.x}px ${position.y}px, rgba(255,255,255,0.3) 0%, transparent 70%)`,
      }}
    />
  );

  // Render the mouse tracker
  const TrackerElement = MouseTrackerElement ? MouseTrackerElement({ isHovering, position }) : DefaultMouseTracker({ isHovering, position });

  return (
    <div ref={containerRef} className={`relative group ${className}`}>
      {children}
      {TrackerElement}
    </div>
  );
};
export default CursorFollower;
