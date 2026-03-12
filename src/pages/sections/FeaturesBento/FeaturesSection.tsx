'use client';
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '@Store/index';
import SplitType from 'split-type';
import gsap from 'gsap';

// Lazy imports with named exports
const CursorFollower = React.lazy(() => import('@Common/CursorFollower/CursorFollower'));
const ThreeJSCanvas = React.lazy(() => import('./Mivator360'));

// External components and utilities
import { ThemeName } from '@/colorSchemes';
import { toggleColorScheme, toggleTheme } from '@Store/themeConfigSlice';

// SVG Imports
import SpotifySvg from './svgs/SpotifySvg';
import SoundCloudSvg from './svgs/SoundCloudSvg';
import DeezerSvg from './svgs/DeezerSvg';
import BandCampSvg from './svgs/BandCampSvg';
import CommandsCount from './CommandsCount';
import FastSpeed from './FastSpeed';
import ThemesCount from './ThemesCount';
import SecurityCard from './SecurityCard';
import SecurityIcons from './SecurityIcons';
import ScrollDown from './ScrollDown';
import MusicPlayer from './MusicPlayer';
import CardsUi from './CardsUi';

export const MivatorFeatures: React.FC = React.memo(() => {
  const themeConfig = useSelector(
    (state: IRootState) => state.themeConfig,
    (prev, next) => prev.theme === next.theme,
  );

  const isDark = useMemo(() => themeConfig.theme === 'dark', [themeConfig.theme]);

  // Consolidated refs creation with performance optimization
  const cardRefs = useRef(Array.from({ length: 9 }, () => React.createRef<HTMLDivElement>()));

  const setupTextAnimation = useCallback((cardRef: React.RefObject<HTMLDivElement>) => {
    const linkElement = cardRef.current;
    if (!linkElement) return () => {};

    const textElements = linkElement.querySelectorAll("[hoverstagger='title']");

    textElements.forEach((el) => {
      new SplitType(el as HTMLElement, {
        types: 'words,chars',
        tagName: 'span',
      });
    });

    const tl = gsap.timeline({ paused: true });
    const [text1, text2] = textElements;

    if (text1 && text2) {
      tl.to(text1.querySelectorAll('.char'), {
        yPercent: -120,
        duration: 0.5,
        stagger: { amount: 0.3 },
      }).from(
        text2.querySelectorAll('.char'),
        {
          yPercent: 200,
          duration: 0.5,
          stagger: { amount: 0.3 },
        },
        0,
      );
    }

    const handleMouseEnter = () => tl.restart();
    const handleMouseLeave = () => tl.reverse();

    linkElement.addEventListener('mouseenter', handleMouseEnter);
    linkElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      linkElement.removeEventListener('mouseenter', handleMouseEnter);
      linkElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Consolidated useEffect for text animation
  useEffect(() => {
    const cleanupFunctions = cardRefs.current.map(setupTextAnimation);
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [setupTextAnimation]);

  // Reusable Cursor Follower creator
  const createCursorFollower = useCallback(
    (index: number, className: string, content: React.ReactNode) => (
      <CursorFollower
        key={index}
        containerRef={cardRefs.current[index]}
        MouseTrackerElement={({ isHovering, position }: { isHovering: boolean; position: { x: number; y: number } }) => (
          <div
            className={`cusror_tracker absolute inset-0 pointer-events-none !z-[2] scale-100 opacity-0 !transition-opacity !duration-500
            ${isHovering && 'opacity-100 !transition-opacity !duration-500'}
            ${isDark ? 'mix-blend-overlay' : 'mix-blend-plus-lighter !opacity-5'}`}
            style={{
              backgroundImage: isHovering
                ? `radial-gradient(circle 450px at ${position.x}px ${position.y}px, ${isDark ? 'var(--color1)' : 'white'} 0%, transparent 70%)`
                : `radial-gradient(circle 0px at ${position.x}px ${position.y}px, rgba(255,255,255,0) 0%, transparent 70%)`,
            }}
          />
        )}
        className={className}
      >
        <div className="flex flex-col relative size-full" ref={cardRefs.current[index]}>
          {content}
        </div>
      </CursorFollower>
    ),
    [isDark],
  );

  return (
    <section id="features" className="section_padding px-4 w-full feature_section" key={'FeaturesSection'}>
      <div className="w-full mx-auto flex flex-col items-center">
        <div className="max-w-screen-2xl text-center mb-10">
          <h2 className="features_title">Features</h2>
          <p className="text-light-900 dark:text-primary-400/40 max-w-2xl mx-auto text-lg font-sans">Experience the next generation of innovation</p>
        </div>
        <div className="relative feature_container w-full max-w-screen-2xl mx-auto group/bento">
          {createCursorFollower(1, 'feature1 feature-card bg-gradient-to-br flex flex-col justify-between group/commands', <CommandsCount isDark={isDark} />)}
          {createCursorFollower(2, 'feature2 bg-gradient-to-b feature-card flex flex-col items-center justify-center', <FastSpeed isDark={isDark} />)}
          {createCursorFollower(3, 'feature3 feature-card bg-gradient-to-b', <ThemesCount />)}
          {createCursorFollower(4, 'grow feature4 feature-card flex items-center justify-center bg-gradient-to-r', <SecurityCard />)}
          {createCursorFollower(
            5,
            'feature7 feature-card flex items-center justify-center bg-gradient-to-r dark:from-primary-1100 dark:via-primary-900 dark:to-primary-1100 from-primary-400 via-light-100 to-light-400 !p-0 grow',
            <SecurityIcons />,
          )}
          <div className="feature5 relative">
            <ThreeJSCanvas />
          </div>
          {createCursorFollower(6, 'grow !h-full feature8  feature-card flex items-center justify-center bg-gradient-to-r', <MusicPlayer />)}
          <a href="" className="feature9 feature-card_small p-0 bg-gradient-to-t group/scrolldown">
            {createCursorFollower(7, 'h-full p-10', <ScrollDown />)}
          </a>
          <div className="flex feature10 gap-4 flex-wrap">
            <PlayerIcons />
          </div>
          {createCursorFollower(8, 'feature6 bg-gradient-to-l feature-card', <CardsUi />)}
        </div>
      </div>
    </section>
  );
});
export default React.memo(MivatorFeatures);

// Memoized sub-components to prevent unnecessary re-renders
export const PlayerIcons = React.memo(() => (
  <>
    {[
      { Icon: SpotifySvg, name: 'Spotify' },
      { Icon: SoundCloudSvg, name: 'SoundCloud' },
      { Icon: DeezerSvg, name: 'Deezer' },
      { Icon: BandCampSvg, name: 'Bandcamp' },
    ].map(({ Icon, name }, _idx) => {
      return (
        <div key={name} className={`feature-card_small bg-gradient-to-tr flex flex-col items-center justify-center p-6 grow md:w-28 md:h-28 text-center`}>
          <Icon />
          <span className="players_icon_text">{name}</span>
        </div>
      );
    })}
  </>
));
