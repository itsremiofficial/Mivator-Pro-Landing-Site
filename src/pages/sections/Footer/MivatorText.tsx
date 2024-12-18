'use client';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';

export const MivatorText = ({ text, duration }: { text: string; duration?: number; automatic?: boolean }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const controls = useAnimation();
  const isInView = useInView(svgRef, { margin: '0px', once: true });

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });
  const themeConfig = useSelector(
    (state: IRootState) => state.themeConfig,
    (prev, next) => prev.theme === next.theme
  );

  const isDark = useMemo(() => themeConfig.theme === 'dark', [themeConfig.theme]);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  useEffect(() => {
    if (isInView) {
      controls.start({ strokeDashoffset: 0 });
    }
  }, [isInView, controls]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none leading-0.5"
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor={`${isDark ? 'var(--color11)' : 'var(--color-secondary)'}`} />
              <stop offset="25%" stopColor={`${isDark ? 'var(--color11)' : 'var(--color-secondary)'}`} />
              <stop offset="50%" stopColor={`${isDark ? 'var(--color9)' : 'var(--color-secondary)'}`} />
              <stop offset="75%" stopColor={`${isDark ? 'var(--color8)' : 'var(--color-secondary)'}`} />
              <stop offset="100%" stopColor={`${isDark ? 'var(--color7)' : 'var(--color-secondary)'}`} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient id="revealMask" gradientUnits="userSpaceOnUse" r="20%" animate={maskPosition} transition={{ duration: duration ?? 0, ease: 'easeOut' }}>
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        className="font-nippo font-bold stroke-light-300 dark:stroke-primary-300/[0.04] fill-transparent text-7xl leading-0.5"
        style={{ opacity: hovered ? 0.1 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        className="font-nippo font-bold fill-transparent text-7xl leading-0.5 stroke-light-300 dark:stroke-primary-300/[0.04]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={controls}
        transition={{ duration: 4, ease: 'easeInOut' }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="1"
        mask="url(#textMask)"
        className="font-nippo font-bold fill-transparent text-7xl leading-0.5"
      >
        {text}
      </text>
    </svg>
  );
};

const MivatorFooterText = () => {
  return (
    <div className="relative flex items-center justify-center w-screen">
      <MivatorText text="MIVATOR" />
    </div>
  );
};

export default MivatorFooterText;
