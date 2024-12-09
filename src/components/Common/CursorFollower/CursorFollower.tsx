// src/components/CursorFollower.tsx
import React, { useEffect, useRef, useState } from 'react';
import { CursorFollowerProps, MouseTrackerProps } from '@components/Common/CursorFollower/CursorFollowerTypes';

export const CursorFollower: React.FC<CursorFollowerProps> = ({ children, containerRef: externalContainerRef, className, MouseTrackerElement }) => {
  const internalContainerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Use external ref if provided, otherwise use internal ref
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

  // useEffect(() => {
  //   const trackerRefs = document.querySelectorAll('.cusror_tracker');

  //   if (trackerRefs.length > 0) {
  //     const hoverTimeline = gsap.timeline({
  //       paused: true,
  //     });
  //     gsap.set(trackerRefs, { duration: 0.3, opacity: 0 });

  //     hoverTimeline.to(
  //       trackerRefs,
  //       { duration: 0.3, opacity: 0.5, ease: 'power3.inOut' }
  //     );

  //     if (isHovering) {
  //       hoverTimeline.play();
  //     } else {
  //       hoverTimeline.reverse();
  //     }

  //     return () => {
  //       hoverTimeline.kill();
  //     };
  //   }
  // }, [isHovering]);

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

// Usage Example
// export const YourCardComponent = () => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   // Example Custom Mouse Tracker
//   const CustomMouseTracker = ({ isHovering, position }: MouseTrackerProps) => (
//     <div
//       className={`
//         absolute inset-0
//         pointer-events-none
//         transition-opacity
//         duration-700
//         z-[2]
//         ${isHovering ? 'opacity-20' : 'opacity-0'}
//         mix-blend-overlay
//       `}
//       style={{
//         backgroundImage: `radial-gradient(circle 100px at ${position.x}px ${position.y}px, rgba(255,255,255,0.3) 0%, transparent 70%)`,
//       }}
//     />
//   );

//   return (
//     <CursorFollower
//       containerRef={cardRef}
//       MouseTrackerElement={CustomMouseTracker}
//     >
//       <div
//         ref={cardRef}
//         className="col-span-1 md:col-span-2 bg-light-600 dark:bg-primary-1100 p-6 rounded-4xl shadow-md text-center"
//       >
//         <h3 className="text-lg font-semibold mb-4">Variables. Design Tokens. Styles.</h3>
//         <div className="bg-gray-700 rounded-full h-2 relative w-full">
//           <div className="absolute top-0 left-0 bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
//         </div>
//         <p className="mt-2 text-sm text-gray-400">bg-primary · text-body</p>
//       </div>
//     </CursorFollower>
//   );
// };
