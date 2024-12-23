'use client';
const items = [
  {
    id: 1,
    username: 'Envo',
    discordServer: '11c Store',
    image: '/clients/1.jpg',
  },
  {
    id: 2,
    username: 'Dark Soul',
    discordServer: 'Mivator Support',
    image: '/clients/2.jpg',
  },
  {
    id: 3,
    username: 'Chrissy',
    discordServer: 'Mivator',
    image: '/clients/3.jpg',
  },
  {
    id: 4,
    username: 'Remi',
    discordServer: 'Remi Designs',
    image: '/clients/4.jpg',
  },
  {
    id: 5,
    username: 'Tyler Durden',
    discordServer: 'Soap',
    image: '/clients/5.jpg',
  },
  {
    id: 6,
    username: 'Dora',
    discordServer: 'Explorer',
    image: '/clients/6.jpg',
  },
];

const RecentBots = () => {
  return (
    <div className="flex flex-row items-center justify-center relative z-10">
      <AnimatedTooltip deta={items} />
    </div>
  );
};
export default RecentBots;

import React, { useState } from 'react';
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export const AnimatedTooltip = ({
  deta,
}: {
  deta: {
    id: number;
    username: string;
    discordServer: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {deta.map((item, idx) => (
        <div className="-mr-4 relative group" key={item.username} onMouseEnter={() => setHoveredIndex(item.id)} onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  whiteSpace: 'nowrap',
                }}
                className="absolute -top-16 left-1/2 -translate-x-1/2
                flex text-xs flex-col items-center justify-center rounded-xl dark:bg-primary-1100 bg-light-600 z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[50%] bottom-0 bg-gradient-to-r from-transparent via-secondary dark:via-primary to-transparent h-px " />
                <div className="absolute left-10 w-[50%] z-30 bottom-px bg-gradient-to-r from-transparent via-secondary dark:via-primary to-transparent h-px " />
                <div className="font-medium text-secondary dark:text-primary-500 relative z-30 text-base flex items-center">
                  {item.username}
                  <div className="text-xs bg-light-primary dark:bg-white/5 dark:text-primary-700 px-2 py-1 rounded-md ml-2">{item.discordServer}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.username}
            className="object-cover !m-0 !p-0 object-top rounded-full size-18 border-2 group-hover:scale-105 group-hover:z-30 border-light-200 dark:border-primary-1200 relative transition duration-500"
          />
        </div>
      ))}
      <div>{<IconBandcamp />}</div>
    </>
  );
};

// ICONS

export const IconBandcamp = ({ className }: { className?: string }) => {
  return (
    <>
      <svg className={className} viewBox="0 0 97.236 97.236" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 78.075h70.006l27.23-58.914h-70.006z" />
      </svg>
    </>
  );
};
