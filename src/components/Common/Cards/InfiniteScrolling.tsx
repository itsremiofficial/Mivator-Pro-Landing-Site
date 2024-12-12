'use client';
import { Backward02Icon, Forward02Icon, LeftToRightListTriangleIcon, NextIcon, RepeatIcon, StarIcon, StopIcon, ToggleOnIcon, VolumeHighIcon } from 'hugeicons-react';
import React, { useEffect, useState } from 'react';

const items = [
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <StarIcon className="mr-2" /> Favorite
  </button>,
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <StopIcon className="mr-2" /> Stop
  </button>,
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <NextIcon className="mr-2" /> Skip
  </button>,
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <LeftToRightListTriangleIcon className="mr-2" /> Lyrics
  </button>,
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <Forward02Icon className="mr-2" /> Forward
  </button>,
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <Backward02Icon className="mr-2" /> Rewind
  </button>,
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <ToggleOnIcon className="mr-2" /> Autoplay
  </button>,
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <RepeatIcon className="mr-2" /> Loop
  </button>,
  <button className="btn hover:dark:bg-primary-800 transition-colors duration-500 dark:bg-primary-900 rounded-xl pr-6 py-3">
    <VolumeHighIcon className="mr-2" /> Volume
  </button>,
];

export const InfiniteMovingCards = ({ direction = 'left', pauseOnHover = true, className }: { direction?: 'left' | 'right'; pauseOnHover?: boolean; className?: string }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };
  return (
    <div ref={containerRef} className={`scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}>
      <ul ref={scrollerRef} className={`flex min-w-full shrink-0 gap-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]`}>
        {items.map((item, idx) => (
          <li className="max-w-full relative flex-shrink-0" key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
