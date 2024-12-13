/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IconPremium from '@components/Icon/IconPremium';
import AnimatedButton from '@components/AnimatedButton';
import { IconArrowRight, IconDashboard } from '@components/Icon';

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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

  return (
    <div
      className="
                w-full md:max-w-screen-2xl
                px-4 md:px-8 lg:px-12
                pt-28 md:pt-32 xl:pt-48
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
                        px-6 py-1
                        text-xs md:text-sm
                        inline-flex
                        items-center
                        border dark:border-pro dark:text-pro border-pro2 text-pro2 rounded-full w-max"
          >
            <IconPremium className="md:size-5 mr-2" />
            Build. Brand. Own—on your terms
          </div>
        </span>
        <div className="relative">
          <div
            className="
                        text-[2.5rem] lg:text-7xl xl:text-7xl md:text-5xl
                        leading-tight font-syne font-extrabold relative text-secondary dark:text-primary-500 flex flex-col whitespace-nowrap"
          >
            <span className="hero-title scale-y-130 leading-relaxed">Take Full</span>
            <span className="hero-title scale-y-130 leading-relaxed">Control with</span>
            <span className="hero-title scale-y-130 leading-relaxed">
              Mivator <span className="text-pro dark:text-pro">Pro</span>
            </span>
          </div>
        </div>
        <div
          className="
                    text-sm lg:text-lg
                    text-neu-700 dark:text-primary-700/50
                    font-syne w-[70%]"
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
            <a href="/Icons" data-scroll-speed="4" data-scroll-position="top" data-scroll className="group">
              <AnimatedButton
                linkText1="Get Started"
                className="btn-primary px-6 py-5 z-[10]"
                Icon={
                  <IconArrowRight
                    className="border !rounded-lg group-hover:ml-3 !transition-all duration-300 border-light-800 group-hover:border-light-100/5 group-hover:bg-light-100/15 dark:border-primary dark:group-hover:bg-primary-800  dark:text-primary-600 dark:group-hover:text-primary-500 dark:group-hover:border-primary-800 p-1 ml-2 size-7"
                    fill
                    duotone={false}
                    width={2}
                  />
                }
              />
            </a>

            <a href="/color" data-scroll-speed="1.5" data-scroll-position="top" data-scroll-delay="0.1" data-scroll>
              <AnimatedButton linkText1="Dashboard" className="btn-secondary px-6 py-5" Icon={<IconDashboard className="ml-2 size-7" fill />} />
            </a>
          </div>
        </div>
      </div>
      <div
        className="
                relative
                flex
                justify-center
                items-start xl:items-center
                lg:w-1/3 md:w-1/3 w-full
                mb-12 md:mb-0
                select-none
                "
      >
        <motion.picture>
          <source srcSet="/pro.avif" type="image/avif" />
          <source srcSet="/pro.webp" type="image/webp" />
          <motion.img
            ref={imageRef}
            src="/pro.avif"
            alt="Magnetic"
            style={{
              objectFit: 'cover',
            }}
            className="hero-image w-1/2 md:w-full"
            animate={{
              x: imagePosition.x,
              y: imagePosition.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{
              y: -20,
            }}
            whileTap={{
              y: 0,
            }}
            width={1090}
            height={1308}
          />
        </motion.picture>
      </div>
    </div>
  );
};

export default Hero;
