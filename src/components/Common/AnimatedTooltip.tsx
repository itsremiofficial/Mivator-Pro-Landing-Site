import React, { Children, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

type AnimatedTooltipProps = {
  id: number;
  className?: string;
  mains: string;
  subs?: string;
  Children: React.ReactNode;
};

const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ id, mains, subs, className, Children }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={`-mr-4 relative group`} onMouseEnter={() => setHoveredIndex(id)} onMouseLeave={() => setHoveredIndex(null)}>
      <AnimatePresence mode="popLayout">
        {hoveredIndex === id && (
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
            className="absolute -top-14 left-1/2 -translate-x-1/2
              flex text-xs flex-col items-center justify-center rounded-xl dark:bg-primary-1100 bg-light-600 z-50 shadow-xl px-4 py-2"
          >
            <div className="absolute inset-x-5 z-30 w-[50%] bottom-0 bg-gradient-to-r from-transparent via-secondary dark:via-primary to-transparent h-px" />
            <div className="absolute left-5 w-[50%] z-30 bottom-px bg-gradient-to-r from-transparent via-secondary dark:via-primary to-transparent h-px" />
            <div className="font-medium text-secondary dark:text-primary-500 relative z-30 text-base flex items-center">
              {mains}
              {subs && <div className="text-xs bg-light-primary dark:bg-white/5 dark:text-primary-700 px-2 py-1 rounded-md ml-2">{subs}</div>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className={`${className}`} onMouseMove={handleMouseMove}>
        {Children}
      </motion.div>
    </div>
  );
};

export default AnimatedTooltip;
