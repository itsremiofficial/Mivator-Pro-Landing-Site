import React, { ReactNode, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export interface FeatureCardProps {
  index: number;
  className?: string;
  children?: ReactNode; // Allow content to be passed as children
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ index, children, className }) => {
  const trackerRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     const tracker = trackerRef.current;
  //     if (!tracker) return;
  //     // gsap.set('.cursor-follower', { xPercent: -50, yPercent: -50 });

  //     // const xTo = gsap.quickTo('.cursor-follower', 'x', {
  //     //   duration: 0.6,
  //     //   ease: 'power3',
  //     // });

  //     // const yTo = gsap.quickTo('.cursor-follower', 'y', {
  //     //   duration: 0.6,
  //     //   ease: 'power3',
  //     // });

  //     // tracker.addEventListener('mousemove', (e) => {
  //     //   xTo(e.clientX);
  //     //   yTo(e.clientY);
  //     // });

  //     // return () => {
  //     //   tracker.removeEventListener('mousemove', () => {});
  //     // };

  //     const setX = gsap.quickTo('.ball', 'x', { duration: 0.5, ease: 'power3' });
  //     const setY = gsap.quickTo('.ball', 'y', { duration: 0.5, ease: 'power3' });

  //     tracker.addEventListener('mousemove', (e) => {
  //       tX = setX(clamperX(e.offsetX - dimensions.width / 2));
  //       tY = setY(clamperY(e.offsetY - dimensions.height / 2));
  //     });

  //     tracker.addEventListener('mouseleave', () => {
  //       gsap.to('.ball', {
  //         x: 0,
  //         y: 0,
  //         ease: 'back.out',
  //         duration: 0.5,
  //         onComplete: () => {
  //           tX.invalidate();
  //           tY.invalidate();
  //         },
  //       });
  //     });
  //   }, []);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    const ball = ballRef.current;

    console.log(box);
    console.log(ball);
    if (!box || !ball) return;

    const dimensions = box.getBoundingClientRect();
    const ballDimensions = ball.getBoundingClientRect();

    const clamperX = gsap.utils.clamp((ballDimensions.width - dimensions.width) / 2, (dimensions.width - ballDimensions.width) / 2);

    const clamperY = gsap.utils.clamp((ballDimensions.height - dimensions.height) / 2, (dimensions.height - ballDimensions.height) / 2);

    const handleMouseMove = (e: MouseEvent) => {
      const offsetX = e.pageX;
      const offsetY = e.pageY;

      gsap.to(ball, {
        x: clamperX(offsetX - window.innerWidth / 2) + 'px',
        y: clamperY(offsetY - window.innerHeight / 2) + 'px',
        ease: 'expo.out',
        duration: 1,
        delay: 0.1,
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <motion.div
      ref={boxRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-1 rounded-2xl transition-all duration-300 group overflow-hidden ${className}`}
    >
      <div className="relative h-full">
        {/* Animated background gradient */}
        <div className="cursor-follower" ref={ballRef} />

        {/* Content */}
        <motion.div initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }} className="relative z-10">
          {children && <>{children}</>}
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
