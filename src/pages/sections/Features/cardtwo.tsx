import React from 'react';
import { motion } from 'framer-motion';

import { useMagneticEffect } from '../../../hooks/useMagneticEffects';

export interface FeatureItem {
  title: string;
  description: string;
  color: string;
}

export const FeatureCard: React.FC<FeatureItem & { index: number }> = ({ title, description, color, index }) => {
  const magneticRef = useMagneticEffect<HTMLDivElement>({ strength: 0.5 });

  return (
    <motion.div
      ref={magneticRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-1 rounded-2xl transition-all duration-300 group"
      style={{
        background: `linear-gradient(45deg, ${color}22, transparent)`,
      }}
    >
      <div className="relative bg-neu-300 dark:bg-[var(--colordark)] backdrop-blur-xl p-6 rounded-2xl h-full overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 feature_card_mousetracker" />

        {/* Icon container */}
        <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="relative mb-6 w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color10)] to-transparent opacity-40 rounded-xl" />
          <div className="absolute inset-0 rounded-xl feature_icon_container" />
          <div className="relative flex justify-center items-center h-full">Hi</div>
        </motion.div>

        {/* Content */}
        <motion.div initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }} className="relative z-10">
          <h3 className="mb-2 font-bold text-[var(--color2)] text-xl tracking-tight">{title}</h3>
          <p className="text-neu-900 text-sm dark:text-white/40 leading-relaxed">{description}</p>
        </motion.div>

        {/* Interactive border effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500">
          <div className="absolute inset-0 border-white/10 border rounded-2xl" />
          <div
            className="absolute inset-0 border-2 feature_card_border border-transparent rounded-2xl"
            style={{
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
