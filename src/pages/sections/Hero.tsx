/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IconPremium from '@Icons/IconPremium';
import AnimatedButton from '@Common/AnimatedButton';
import { IconArrowRight, IconDashboard } from '@Icons/index';
import { isMobile } from 'react-device-detect';
import githubPagesBase from '@/assets/CONSTANTS';

const Hero = () => {
  const [_cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [_isHovering, setIsHovering] = useState(false);

  const imageRef = React.useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });

      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const distanceX = event.clientX - (rect.left + rect.width / 2);
        const distanceY = event.clientY - (rect.top + rect.height / 2);

        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < 350) {
          setIsHovering(true);
          setImagePosition({
            x: distanceX * 0.3,
            y: distanceY * 0.3,
          });
        } else {
          setIsHovering(false);
          setImagePosition({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // IMAGE ANIMATION PROPS
  const animationProps = isMobile
    ? {} // No animation for mobile
    : {
        animate: { x: imagePosition.x, y: imagePosition.y },
        transition: { type: 'spring', stiffness: 300, damping: 20 },
        whileHover: { y: -20 },
        whileTap: { y: 0 },
      };

  return (
    <div
      className="
                w-screen 2xl:max-w-screen-2xl
                px-4 md:px-8 lg:px-12 2xl:px-0
                py-12 lg:py-24 2xl:py-40
                flex flex-col-reverse md:flex-row
                justify-between
                relative
                mx-auto
                "
    >
      <div
        className="
                flex flex-col
                gap-4
                md:first:w-2/3 justify-center md:!justify-start text-center md:text-left"
      >
        <span>
          <div
            className="
                        p-0.5 pr-3
                        lg:pl-1 lg:pr-5 lg:py-1
                        text-xs lg:text-base
                        inline-flex
                        items-center font-mont
                        border lg:border-2 dark:border-pro dark:text-pro border-pro text-pro rounded-full w-max select-none font-medium"
          >
            <span
              className="
            flex gap-1 items-center
            py-0.5 px-1.5 lg:py-1 lg:px-3 mr-2
            text-[12px] lg:text-sm
            font-bold bg-pro text-secondary rounded-full
            "
            >
              <IconPremium className="size-4 md:size-5 p-0.5" />
              PRO
            </span>
            Build. Brand. Own—on your terms
          </div>
        </span>
        <div className="relative">
          <div
            className="
                        text-[2rem] sm:text-[2.5rem] lg:text-6xl xl:text-7xl md:text-4xl
                        leading-tight font-syne font-extrabold relative text-secondary dark:text-primary-500 flex flex-col whitespace-nowrap"
          >
            <span className="hero-title scale-y-140 leading-relaxed">Take Full</span>
            <span className="hero-title scale-y-140 leading-relaxed">Control with</span>
            <span className="hero-title scale-y-140 leading-relaxed">
              Mivator <span className="text-pro dark:text-pro">Pro</span>
            </span>
          </div>
        </div>
        <div
          className="
                    text-sm lg:text-lg
                    text-light-900 dark:text-primary-400/50
                    font-mont text-balance"
        >
          Bring your vision to life with a custom Mivator Pro. From name to colors to complete ownership, it’s all yours.
        </div>
        <div
          className="
                    flex
                    flex-col-reverse lg:flex-row
                    md:items-start
                    gap-4
                    lg:gap-14
                    lg:mt-10
                "
        >
          <div
            className="
                        inline-flex 
                        gap-4
                        justify-center md:justify-start"
          >
            <a href="/Setup" data-scroll-speed="4" data-scroll-position="top" data-scroll className="group">
              <AnimatedButton
                linkText1="Get Started"
                className="btn-primary py-3 px-4 lg:px-6 lg:py-5 z-[10]"
                Icon={
                  <IconArrowRight
                    className="
                    border rounded-lg
                    group-hover:ml-3
                    !transition-all duration-300
                    border-light-800 group-hover:border-light-100/5
                    dark:border-primary dark:group-hover:border-primary-800
                    dark:group-hover:bg-primary-800 
                    dark:text-primary-600 dark:group-hover:text-primary-500 group-hover:bg-light-100/15
                    p-1 ml-2
                    size-6 lg:size-7"
                    fill
                    duotone={false}
                    width={2}
                  />
                }
              />
            </a>

            <a href="/color" data-scroll-speed="1.5" data-scroll-position="top" data-scroll-delay="0.1" data-scroll>
              <AnimatedButton linkText1="Dashboard" className="btn-secondary py-3 px-4 lg:px-6 lg:py-5" Icon={<IconDashboard className="ml-2 lg:size-7 size-6" fill />} />
            </a>
          </div>
        </div>
      </div>
      <motion.picture
        className="
                relative
                flex
                justify-center items-center
                lg:w-1/3 md:w-1/3 w-full
                mb-12 md:mb-0
                select-none
                "
      >
        <source srcSet={`${githubPagesBase}pro.avif`} type="image/avif" />
        <source srcSet={`${githubPagesBase}pro.webp`} type="image/webp" />
        <motion.img
          ref={imageRef}
          {...animationProps}
          src={`${githubPagesBase}pro.avif`}
          alt="Magnetic"
          style={{
            objectFit: 'cover',
          }}
          className="hero-image w-1/2 md:w-full"
          width={1090}
          height={1308}
        />
      </motion.picture>
    </div>
  );
};

export default Hero;
