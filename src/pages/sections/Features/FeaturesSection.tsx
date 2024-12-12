import Balancer from 'react-wrap-balancer';
import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '@store/index';
import SplitType from 'split-type';
import gsap from 'gsap';
import { CursorFollower } from '@components/Common/CursorFollower/CursorFollower';
import { MouseTrackerProps } from '@components/Common/CursorFollower/CursorFollowerTypes';
import horizontalLoop from '@/utils/horizontalLoop';
import { getThemeNames, getThemeTitle, ThemeName } from '@/colorSchemes';
import { LogoThemes } from '@components/ThemedStacks';
import { toggleColorScheme, toggleTheme } from '@/store/themeConfigSlice';
import { RankCard } from '@/components/ThemedStacks/RankCard';
import { NowPlayingCard } from '@/components/ThemedStacks/NowPlayingCard';
import { LinkSquare02Icon } from 'hugeicons-react';
import ThreeJSCanvas from './Mivator360';
import IconSecurity from '@/components/Icon/Features/IconSecurity';
import { IconsAnimationCard } from '@/components/Common/Cards/IconsAnimationCard';

export const FeaturesSection: React.FC = React.memo(() => {
  const themeConfig = useSelector(
    (state: IRootState) => state.themeConfig,
    (prev, next) => prev.theme === next.theme
  );

  const isDark = themeConfig.theme === 'dark';

  // Use an array to store refs for better scalability
  const cardRefs = useRef(Array.from({ length: 7 }, () => React.createRef<HTMLDivElement>()));

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
        0
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

  useEffect(() => {
    const cleanupFunctions = cardRefs.current.map(setupTextAnimation);
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [setupTextAnimation]);

  const setupHorizontalLoop = useCallback(() => {
    const boxesRef = document.querySelector<HTMLElement>('.cards');
    const sectionElem = document.querySelector<HTMLElement>('.sectionone');
    const anotherSectionElem = document.querySelector<HTMLElement>('.sectiontwo');

    if (!boxesRef || !sectionElem || !anotherSectionElem) return () => {};

    const boxes = gsap.utils.toArray<HTMLElement>('.card-item');
    if (!boxes.length) return () => {};

    let loop: gsap.core.Timeline | null = null;

    const build = () => {
      loop?.kill();

      const boxWidth = boxes[1].getBoundingClientRect().left - boxes[0].getBoundingClientRect().right;

      const paddingRight = boxWidth > 0 ? boxWidth : 0;

      loop = horizontalLoop(boxes, {
        paused: true,
        repeat: -1,
        paddingRight,
      });
    };

    build();
    window.addEventListener('resize', build);

    const handleSectionMouseEnter = () => loop?.play();
    const handleSectionMouseLeave = () => loop?.pause();

    sectionElem.addEventListener('mouseenter', handleSectionMouseEnter);
    anotherSectionElem.addEventListener('mouseenter', handleSectionMouseEnter);
    sectionElem.addEventListener('mouseleave', handleSectionMouseLeave);
    anotherSectionElem.addEventListener('mouseleave', handleSectionMouseLeave);

    return () => {
      window.removeEventListener('resize', build);
      sectionElem.removeEventListener('mouseenter', handleSectionMouseEnter);
      anotherSectionElem.removeEventListener('mouseenter', handleSectionMouseEnter);
      sectionElem.removeEventListener('mouseleave', handleSectionMouseLeave);
      anotherSectionElem.removeEventListener('mouseleave', handleSectionMouseLeave);
      loop?.kill();
    };
  }, []);

  useEffect(() => {
    const cleanup = setupHorizontalLoop();
    return cleanup;
  }, [setupHorizontalLoop]);

  const MouseTracker = useCallback(
    ({ isHovering, position }: MouseTrackerProps) => (
      <div
        className={`cusror_tracker absolute inset-0 pointer-events-none !z-[2] scale-100 opacity-0 !transition-opacity !duration-500
      ${isHovering && 'opacity-100 !transition-opacity !duration-500'}
      ${isDark ? 'mix-blend-overlay' : 'mix-blend-plus-lighter !opacity-15'}`}
        style={{
          backgroundImage: isHovering
            ? `${
                isDark
                  ? `radial-gradient(circle 450px at ${position.x}px ${position.y}px, var(--color1) 0%, transparent 70%)`
                  : `radial-gradient(circle 450px at ${position.x}px ${position.y}px, white 0%, transparent 70%)`
              }`
            : `radial-gradient(circle 0px at ${position.x}px ${position.y}px, rgba(255,255,255,0) 0%, transparent 70%)`,
        }}
      />
    ),
    [isDark]
  );

  const dispatch = useDispatch();
  const handleThemeChange = (themeKey: ThemeName) => {
    const isDarkTheme = themeKey !== 'mivatorsilver';

    dispatch(toggleTheme(isDarkTheme ? 'dark' : 'light'));
    dispatch(toggleColorScheme(themeKey));
  };

  // CURSOR FOLLOWER
  const createCursorFollower = (index: number, className: string, content: React.ReactNode) => (
    <CursorFollower containerRef={cardRefs.current[index]} MouseTrackerElement={MouseTracker} className={className}>
      <div className="flex flex-col relative size-full" ref={cardRefs.current[index]}>
        {content}
      </div>
    </CursorFollower>
  );

  return (
    <section className="min-h-screen py-20 px-4 w-full feature_section" key={'FeaturesSection'}>
      <div className="w-full mx-auto flex flex-col items-center">
        <div className="max-w-screen-2xl text-center mb-16 ">
          <h2 className="features_title !text-[150px]">Why Mivator?</h2>
          <p className="text-secondary dark:text-primary-700/40 max-w-2xl mx-auto text-lg">Experience the next generation of innovation</p>
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-12">
          <div
            className=" grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-9 
                        gap-6 
                        auto-rows-[minmax(200px,auto)] group/bento"
          >
            {/* ROW 01 */}
            <div className="col-span-9 grid grid-cols-5 gap-6">
              {/* Over 500 Commands */}
              {createCursorFollower(
                1,
                'col-span-3 feature-card bg-gradient-to-br flex flex-col justify-between group/commands',
                <div className="grid md:grid-cols-2 h-full">
                  <div className="flex flex-col justify-between relative">
                    <div className="mask mask-squircle w-max relative">
                      <div className="p-10 size-32 bg-primary-900 rounded-3xl flex items-center justify-center">
                        <div className="perspective-distant relative size-full flex justify-center items-center">
                          <div className="size-full rounded-xl transform-3d rotate-x-45 rotate-z-45 bg-primary-600 absolute -top-2 inset-0 z-[3] border-4 border-primary-900 group-hover/commands:-top-4 transition-all duration-300 ease-in group-hover/commands:rotate-z-225"></div>
                          <div className="size-full rounded-xl transform-3d rotate-x-45 rotate-z-45 bg-primary-600/50 backdrop-blur-3xl absolute top-1 inset-0 z-[2] border-4 border-primary-900 group-hover/commands:top-0 transition-all duration-300 ease-in group-hover/commands:rotate-z-135"></div>
                          <div className="size-full rounded-xl transform-3d rotate-x-45 rotate-z-45 bg-primary-600/30 absolute top-4 inset-0 z-[1] border-4 border-primary-900"></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute z-[2] inset-0 flex flex-col justify-end w-full">
                      <div className="text-6xl font-nippo font-extrabold leading-none text-light-200 dark:text-primary-600 overflow-hidden h-fit">
                        <div className="relative overflow-hidden z-[1] w-full">
                          <div hoverstagger="title" className="relative inline-block w-full">
                            Commands
                          </div>
                          <div hoverstagger="title" className="absolute inset-y-0 w-full">
                            Commands
                          </div>
                        </div>
                      </div>
                      <div>
                        <Balancer className="w-[100%] dark:text-primary-800 font-base font-mont tracking-wide nth-[first-child]:w-full">
                          Explore a vast library of versatile commands, tailored for every need.
                        </Balancer>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div
                      className="
                  flex flex-col items-center justify-center gap-4
                  dark:bg-primary-1100 bg-light-600 
                  p-4 rounded-4xl h-48 w-full grow relative"
                    >
                      <div className="flex h-full justify-center">
                        <svg className="h-full" viewBox="0 0 3955 3132">
                          <defs>
                            <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor={isDark ? `var(--color-primary)` : 'var(--color-secondary)'} />
                              {/* <stop offset="70%" stopColor={isDark ? `var(--color-primary-900)` : 'var(--color8)'} /> */}
                              <stop offset="75%" stopColor={isDark ? `var(--color-primary-1000)` : 'var(--color7)'} />
                              <stop offset="95%" stopColor={isDark ? `var(--color-primary-1100)` : 'var(--color6)'} />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#gradient-fill)"
                            d="M3495.88 3131.49C3426.69 3131.49 3361.83 3131.49 3283.99 3131.49C3098.06 3131.49 2955.36 2949.88 2951.04 2768.26C2912.12 1976.94 2873.2 1181.3 2834.28 389.985C2821.31 160.805 3046.17 0.812256 3258.05 0.812256C3348.86 0.812256 3439.66 0.812256 3530.47 0.812256C3742.35 0.812256 3967.21 160.805 3954.24 389.985C3915.32 1181.3 3876.4 1976.94 3837.48 2768.26C3833.16 2949.88 3690.46 3131.49 3495.88 3131.49ZM3331.56 1847.22C3331.56 2106.67 3335.88 2361.79 3335.88 2616.92C3335.88 2651.51 3357.5 2686.1 3392.1 2690.43C3392.1 2690.43 3396.42 2690.43 3400.75 2690.43C3431.02 2686.1 3452.64 2651.51 3452.64 2616.92C3456.96 2314.23 3456.96 2007.21 3461.28 1704.52C3418.04 1752.09 3374.8 1799.65 3331.56 1847.22ZM3322.91 515.385C3322.91 839.695 3327.24 1168.33 3327.24 1492.64C3374.8 1445.08 3418.04 1397.51 3461.28 1349.94C3465.61 1068.87 3465.61 792.13 3465.61 515.385C3469.93 480.792 3435.34 446.199 3400.75 446.199C3361.83 446.199 3322.91 472.144 3322.91 515.385Z"
                          />
                          <path
                            fill="url(#gradient-fill)"
                            d="M2083.61 3131.49C2014.42 3131.49 1949.56 3131.49 1871.72 3131.49C1685.79 3131.49 1543.09 2949.88 1538.76 2768.26C1499.85 1976.94 1460.93 1181.3 1422.01 389.985C1409.04 160.805 1633.9 0.812256 1845.78 0.812256C1936.59 0.812256 2027.39 0.812256 2118.2 0.812256C2330.08 0.812256 2554.94 160.805 2541.96 389.985C2503.05 1181.3 2464.13 1976.94 2425.21 2768.26C2420.89 2949.88 2278.19 3131.49 2083.61 3131.49ZM1919.29 1847.22C1919.29 2106.67 1923.61 2361.79 1923.61 2616.92C1923.61 2651.51 1945.23 2686.1 1979.83 2690.43C1979.83 2690.43 1984.15 2690.43 1988.47 2690.43C2018.74 2686.1 2040.36 2651.51 2040.36 2616.92C2044.69 2314.23 2044.69 2007.21 2049.01 1704.52C2005.77 1752.09 1962.53 1799.65 1919.29 1847.22ZM1910.64 515.385C1910.64 839.695 1914.96 1168.33 1914.96 1492.64C1962.53 1445.08 2005.77 1397.51 2049.01 1349.94C2053.34 1068.87 2053.34 792.13 2053.34 515.385C2057.66 480.792 2023.07 446.199 1988.47 446.199C1949.56 446.199 1910.64 472.144 1910.64 515.385Z"
                          />
                          <path
                            fill="url(#gradient-fill)"
                            d="M636.945 515.385C636.945 476.468 602.352 446.199 567.759 446.199C528.841 446.199 494.248 476.468 494.248 515.385C494.248 908.882 498.572 1306.7 502.896 1700.2C563.434 1700.2 623.972 1700.2 684.51 1700.2C887.745 1700.2 1056.39 1881.81 1043.41 2085.05C1030.44 2314.23 1021.79 2539.08 1008.82 2768.26C1004.5 2949.88 861.8 3131.49 675.862 3131.49C598.028 3131.49 533.165 3131.49 463.979 3131.49C269.393 3131.49 126.696 2949.88 122.372 2768.26C118.048 2681.78 113.724 2599.62 109.4 2513.14C100.751 2379.09 161.289 2283.96 303.986 2283.96C316.958 2283.96 334.255 2283.96 351.552 2283.96C459.655 2275.31 507.221 2348.82 507.221 2448.28C507.221 2504.49 507.221 2560.7 507.221 2616.92C507.221 2651.51 528.841 2690.43 567.759 2690.43C606.676 2690.43 628.296 2655.83 623.972 2616.92C623.972 2482.87 628.297 2348.82 628.297 2219.1C628.297 2180.18 606.676 2141.26 567.759 2145.59C489.924 2145.59 407.765 2145.59 329.931 2149.91C165.614 2154.23 83.4549 2059.1 79.1308 1899.11C53.1859 1367.24 27.2411 835.371 1.29623 303.502C-11.6762 95.9433 118.048 5.13657 312.634 5.13657C481.276 0.812225 649.917 0.812225 818.559 5.13657C1013.14 5.13657 1142.87 95.9433 1129.9 303.502C1112.6 640.785 1099.63 978.068 1082.33 1311.03C1078.01 1453.72 995.848 1535.88 853.152 1527.23C706.131 1527.23 628.297 1440.75 632.621 1298.05C636.945 1038.61 636.945 779.157 636.945 515.385Z"
                          />
                        </svg>
                      </div>
                      <p className="absolute bottom-3 text-light-800 dark:text-primary-800 text-lg font-medium font-nippo">...and counting</p>
                    </div>
                    <a href="" className="w-full">
                      <button className="btn btn-primary dark:bg-primary-1000 text-primary border-none w-full font-medium rounded-3xl relative mt-4 px-7 py-4 gap-2 group/btn">
                        Explore Commands Library
                        <LinkSquare02Icon className="size-5 ml-2" />
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {/* 15 MS */}
              {createCursorFollower(
                2,
                'col-span-1 bg-gradient-to-b feature-card flex flex-col items-center justify-center',
                <div>
                  <div className="flex justify-center">
                    <svg className="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.41 933.15">
                      <defs>
                        <linearGradient id="gradient-fill2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={isDark ? `var(--color-primary)` : 'var(--color-secondary)'} />
                          {/* <stop offset="70%" stopColor={isDark ? `var(--color-primary-900)` : 'var(--color8)'} /> */}
                          <stop offset="75%" stopColor={isDark ? `var(--color-primary-1000)` : 'var(--color7)'} />
                          <stop offset="100%" stopColor={isDark ? `var(--color-primary-1100)` : 'var(--color6)'} />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#gradient-fill2)"
                        d="m78.26,867.42c-3.83-244.89-8.94-489.77-12.77-734.66h-14.05c-7.66,1.29-15.32-3.87-15.32-12.89,0-24.49-1.28-48.98-1.28-73.47,0-11.6,5.11-24.49,14.05-32.22C57.83,5.16,71.88,0,84.65,0h53.64c43.42,0,74.07,20.62,72.79,67.02-7.66,266.8-14.05,534.88-20.43,801.68-1.28,34.8-16.6,64.44-56.19,64.44s-56.19-30.93-56.19-65.73Z"
                      />
                      <path
                        fill="url(#gradient-fill2)"
                        d="m443.29,132.75c-11.49,0-21.71,9.02-21.71,20.62,0,117.29,1.28,235.87,2.55,353.15h53.64c60.02,0,109.82,54.13,105.99,114.71-3.83,68.31-6.38,135.33-10.22,203.64-1.28,54.13-43.42,108.27-98.33,108.27h-62.57c-57.47,0-99.61-54.13-100.89-108.27-1.28-25.78-2.55-50.27-3.83-76.04-2.55-39.96,15.32-68.31,57.47-68.31h14.05c31.93-2.58,45.97,19.33,45.97,48.98v50.27c0,10.31,6.39,21.91,17.88,21.91s17.88-10.31,16.6-21.91c0-39.96,1.28-79.91,1.28-118.58,0-11.6-6.39-23.2-17.88-21.91-22.99,0-47.25,0-70.24,1.29-48.53,1.29-72.79-27.07-74.07-74.75-7.66-158.53-15.32-317.06-22.99-475.6C272.17,28.36,310.48,1.29,367.95,1.29c49.8-1.29,99.61-1.29,149.41,0,57.47,0,95.78,27.07,91.95,88.93-5.11,100.53-8.94,201.06-14.05,300.31-1.28,42.53-25.54,67.02-67.68,64.44-43.42,0-66.41-25.78-65.13-68.31,1.28-77.33,1.28-154.67,1.28-233.29,0-11.6-10.22-20.62-20.43-20.62Z"
                      />
                    </svg>
                  </div>
                  <div className="absolute z-[2] inset-0 m-auto flex flex-col items-center justify-end">
                    <div className="text-4xl font-nippo leading-none whitespace-nowrap text-light-200 dark:text-primary-600 h-fit uppercase">
                      <div className="relative overflow-hidden z-[1] font-extrabold">
                        <div hoverstagger="title" className="relative inline-block">
                          MS
                        </div>
                        <div hoverstagger="title" className="absolute inset-y-0">
                          MS
                        </div>
                      </div>
                    </div>
                    <p className="dark:text-primary-800 font-base font-nippo font-medium">Fast and Seamless</p>
                  </div>
                </div>
              )}
              {/* 16 Categories */}
              {createCursorFollower(
                3,
                'col-span-1 feature-card bg-gradient-to-b',
                <div>
                  <div className="flex justify-center">
                    <svg className="h-full" fill="url(#gradient-fill)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.41 933.15">
                      <path d="m79.69,859.84c-3.79-240.26-8.85-480.52-12.65-720.78h-13.91c-7.59,1.26-15.17-3.79-15.17-12.65,0-24.03-1.26-48.05-1.26-72.08,0-11.38,5.06-24.03,13.91-31.61,8.85-8.85,22.76-13.91,35.41-13.91h53.11c42.99,0,73.34,20.23,72.08,65.76-7.59,261.76-13.91,524.78-20.23,786.54-1.26,34.14-16.44,63.23-55.64,63.23s-55.64-30.35-55.64-64.49Z" />
                      <path d="m478.57,493.13c59.43,0,110.01,51.85,104.96,112.54-2.53,70.81-6.32,141.63-10.12,212.44-1.26,53.11-42.99,106.22-97.37,106.22h-60.7c-58.17,0-99.9-53.11-101.16-106.22-11.38-231.41-22.76-464.08-34.14-695.49-3.79-67.02,61.96-113.81,123.92-113.81h79.67c61.96,0,127.72,46.79,123.92,113.81-3.79,89.78-8.85,179.56-12.65,270.61-1.26,41.73-25.29,64.49-67.02,61.96-42.99,0-65.76-24.03-64.49-65.76,1.26-77.14,1.26-153.01,1.26-230.14,0-11.38-10.12-20.23-20.23-20.23-11.38,0-21.5,8.85-21.5,20.23,1.26,111.28,1.26,222.56,2.53,333.83h53.11Zm-51.85,280.72c0,10.12,6.32,20.23,16.44,21.5h2.53c8.85-1.26,15.17-11.38,15.17-21.5,0-42.99,1.26-85.99,1.26-130.25,0-8.85-6.32-18.97-16.44-20.23h-20.23c1.26,50.58,1.26,101.16,1.26,150.48Z" />
                    </svg>
                  </div>
                  <div className="absolute z-[2] inset-0 m-auto flex flex-col items-center justify-end">
                    <div className="text-4xl font-nippo tracking-wide font-extrabold leading-none text-light-200 dark:text-primary-600">
                      <div className="relative overflow-hidden z-[1]">
                        <div hoverstagger="title" className="relative inline-block">
                          Themes
                        </div>
                        <div hoverstagger="title" className="absolute inset-y-0">
                          Themes
                        </div>
                      </div>
                    </div>
                    <p className="dark:text-primary-800 font-base font-nippo font-medium">Customize Your Experience</p>
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-9 grid grid-cols-13 auto-rows-[minmax(200px,auto)] gap-6">
              {/* ELEGENT CARDS */}
              <div className="flex flex-col gap-6 w-full col-span-5">
                {createCursorFollower(
                  4,
                  'grow col-span-5 feature-card flex items-center justify-center bg-gradient-to-r',
                  <div className="flex items-center justify-between grow">
                    <Balancer className="relative text-3xl font-nippo font-medium leading-snug text-primary-700 gap-4">Robust Security System</Balancer>
                    <div className="mask mask-squircle w-max relative">
                      <div className="p-6 size-max bg-gradient-to-bl from-light-200 to-light-500 dark:from-primary-1000/50 dark:to-primary/30 rounded-3xl">
                        <IconSecurity className="size-16 text-primary-600" />
                      </div>
                    </div>
                  </div>
                )}
                {createCursorFollower(
                  5,
                  'col-span-5 feature-card flex items-center justify-center bg-gradient-to-r from-primary-1100 via-primary-900 to-primary-1100 !p-0',
                  <div className="relative">
                    <div className="horizontal-gradient z-[10] absolute"></div>
                    <IconsAnimationCard />
                  </div>
                )}
              </div>

              {/* PLAYER CARD */}
              <div className="col-span-3 relative">
                <ThreeJSCanvas />
              </div>

              {/* 16 Categories */}
              {createCursorFollower(
                5,
                'col-span-5 bg-gradient-to-l feature-card',
                <div className="flex flex-col justify-between h-full gap-5">
                  <div className="flex flex-col items-start justify-end">
                    <div className="text-3xl font-mont tracking-wide font-medium leading-snug text-light-200 dark:text-primary-600">
                      <div className="relative whitespace-nowrap overflow-hidden">
                        <div hoverstagger="title" className="relative inline-block">
                          Interactive Music Player
                        </div>
                        <div hoverstagger="title" className="absolute inset-y-0">
                          Interactive Music Player
                        </div>
                      </div>
                    </div>
                    <Balancer className="dark:text-primary-800 font-base font-mont text-left"> Enjoy your favorite tracks with a sleek, modern music player that’s packed with features.</Balancer>
                  </div>
                  <div className="h-32 w-[380px] xl:h-44 xl:w-[480px] relative mx-auto">
                    <NowPlayingCard />
                  </div>
                  <div className="h-36 w-[380px] mt-5 xl:h-48 xl:w-[480px] relative">
                    <RankCard />
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-13 col-span-9 gap-6">
              {/* LANGUAGES COUNT */}
              {createCursorFollower(
                6,
                'anotherSectionElem col-span-5 w-full bg-light-1100 dark:bg-primary-1100 rounded-4xl text-center relative z-[1] feature-card overflow-hidden inset-ring-3 inset-ring-primary/5 select-none flex flex-col items-center justify-center ',
                <div>
                  <div className="flex justify-center">
                    <svg className="h-52" fill="url(#gradient-fill)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 758 933.15">
                      <path d="m400.38,530.27c3.78,1.26,5.05,3.78,5.05,7.57-1.26,39.1-3.78,76.94-6.31,116.04,0,3.78-1.26,6.31-6.31,6.31h-81.53c-3.78,66.85-6.31,133.7-10.09,200.56-1.26,34.06-16.4,63.07-56.76,63.07s-54.24-30.27-52.98-65.59v-200.56c-31.53,0-64.33,0-95.86,1.26-41.62,1.26-61.81-23.97-63.07-63.07-1.26-17.66-1.26-35.32-2.52-52.98,0-7.57,0-16.4,2.52-23.97,35.32-151.36,78.2-301.47,127.4-450.31,12.61-41.62,49.19-60.55,90.82-58.02h10.09c47.93,0,80.73,23.97,76.94,74.42-6.31,148.84-13.87,297.68-20.18,445.26h82.79Zm-142.08-389.76c-1.01,0-2.02.2-3.03.61-2.7,1.08-4.63,3.51-5.41,6.31-34.97,126.36-66.22,252.72-95,380.33h37.84c0-41.62,45.41-296.42,70.64-382.19,0-3.78-1.26-5.05-5.05-5.05Z" />
                      <path d="m581.61,772.45c0-39.1,1.26-76.94,1.26-116.04,0-10.09-6.31-21.44-16.4-21.44h-27.75c-18.92,1.26-29.01-11.35-29.01-29.01,0-23.97,0-46.67-1.26-70.64-1.26-17.66,10.09-30.27,29.01-30.27h29.01c10.09,0,17.66-10.09,17.66-20.18,0-108.48,1.26-216.95,1.26-325.43,1.26-11.35-10.09-20.18-20.18-20.18-11.35,0-21.44,8.83-21.44,20.18,0,80.73,1.26,161.45,1.26,242.18,1.26,41.63-21.44,65.59-63.07,65.59-41.63,2.52-65.59-20.18-66.85-61.81-3.78-94.6-8.83-187.94-13.87-282.55-2.52-65.59,59.28-113.52,121.09-113.52h84.51c61.81,0,123.61,47.93,121.09,113.52-6.31,128.66-12.61,256.06-18.92,384.72-5.05,27.75-36.58,59.28-64.33,63.07,30.27,3.78,58.02,41.62,58.02,71.9-2.52,58.02-6.31,116.04-8.83,174.07-2.52,52.98-44.15,108.48-99.65,105.95h-58.02c-56.76,2.52-98.39-52.98-100.91-105.95-1.26-25.23-2.52-49.19-3.78-74.42-2.52-39.1,15.14-66.85,56.76-66.85h13.88c31.53-2.52,45.41,18.92,45.41,47.93v49.19c0,10.09,6.31,20.18,16.4,21.44h1.26c10.09-1.26,16.4-11.35,16.4-21.44Z" />
                    </svg>
                  </div>
                  <div className="absolute z-[2] inset-0 pb-6 m-auto flex flex-col items-center justify-end">
                    <div className="text-6xl font-mont font-extrabold leading-none text-light-200 dark:text-primary-600 overflow-hidden h-fit uppercase">
                      <div className="relative overflow-hidden z-[1]">
                        <div hoverstagger="text" className="relative inline-block whitespace-nowrap">
                          Languages
                        </div>
                        <div hoverstagger="text" className="absolute inset-y-0 whitespace-nowrap">
                          Languages
                        </div>
                      </div>
                    </div>
                    <p className="text-light-800 dark:text-primary-800 font-base font-nippo">Globally Supported</p>
                  </div>
                </div>
              )}

              {/* THEMES COUNT */}
              {createCursorFollower(
                7,
                'sectiontwo col-span-5 bg-light-1100 dark:bg-primary-1100 rounded-4xl text-center relative z-[1] feature-card overflow-hidden inset-ring-3 inset-ring-primary/5 select-none flex flex-col items-center justify-center',
                <div className="">
                  <div className="flex justify-center">
                    <svg className="h-52" fill="url(#gradient-fill)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.41 933.15">
                      <path d="m79.69,859.84c-3.79-240.26-8.85-480.52-12.65-720.78h-13.91c-7.59,1.26-15.17-3.79-15.17-12.65,0-24.03-1.26-48.05-1.26-72.08,0-11.38,5.06-24.03,13.91-31.61,8.85-8.85,22.76-13.91,35.41-13.91h53.11c42.99,0,73.34,20.23,72.08,65.76-7.59,261.76-13.91,524.78-20.23,786.54-1.26,34.14-16.44,63.23-55.64,63.23s-55.64-30.35-55.64-64.49Z" />
                      <path d="m478.57,493.13c59.43,0,110.01,51.85,104.96,112.54-2.53,70.81-6.32,141.63-10.12,212.44-1.26,53.11-42.99,106.22-97.37,106.22h-60.7c-58.17,0-99.9-53.11-101.16-106.22-11.38-231.41-22.76-464.08-34.14-695.49-3.79-67.02,61.96-113.81,123.92-113.81h79.67c61.96,0,127.72,46.79,123.92,113.81-3.79,89.78-8.85,179.56-12.65,270.61-1.26,41.73-25.29,64.49-67.02,61.96-42.99,0-65.76-24.03-64.49-65.76,1.26-77.14,1.26-153.01,1.26-230.14,0-11.38-10.12-20.23-20.23-20.23-11.38,0-21.5,8.85-21.5,20.23,1.26,111.28,1.26,222.56,2.53,333.83h53.11Zm-51.85,280.72c0,10.12,6.32,20.23,16.44,21.5h2.53c8.85-1.26,15.17-11.38,15.17-21.5,0-42.99,1.26-85.99,1.26-130.25,0-8.85-6.32-18.97-16.44-20.23h-20.23c1.26,50.58,1.26,101.16,1.26,150.48Z" />
                    </svg>
                  </div>
                  <div className="absolute z-[2] inset-0 pb-6 m-auto flex flex-col items-center justify-end">
                    <div className="text-6xl tracking-wide font-mont font-extrabold leading-none text-light-200 dark:text-primary-600 overflow-hidden h-fit uppercase">
                      <div className="relative overflow-hidden z-[1]">
                        <div hoverstagger="text" className="relative inline-block whitespace-nowrap">
                          Themes
                        </div>
                        <div hoverstagger="text" className="absolute inset-y-0 whitespace-nowrap">
                          Themes
                        </div>
                      </div>
                    </div>
                    <p className="text-light-800 dark:text-primary-800 text-base font-nippo">Fully Customizable</p>
                  </div>
                </div>
              )}

              {/* Theme Carousel */}
              {createCursorFollower(
                8,
                'sectionone col-span-2 bg-light-600 dark:bg-primary-1100 rounded-4xl shadow-md flex flex-col items-center justify-center text-center relative overflow-hidden inset-ring-3 inset-ring-primary/5',
                <>
                  <div ref={cardRefs.current[8]} className="">
                    <ul className="cards flex">
                      <LogoThemes onLogoClick={handleThemeChange} className="card-item w-full" />
                    </ul>
                  </div>
                  {/* <div className="select-none cursor-events-none p-6 horizontal-gradient !size-full absolute inset-0 m-auto flex justify-center items-center z-[1]"></div> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
