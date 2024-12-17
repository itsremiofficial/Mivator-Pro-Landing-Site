import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '@/components/AnimatedButton';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = React.memo(({ data }: { data: TimelineEntry[] }) => {
  gsap.registerPlugin(ScrollTrigger);
  // Register GSAP plugin inside the component
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf('*');
    };
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const entriesRefs = useRef<(HTMLDivElement | null)[]>(new Array(data.length).fill(null));
  const circlesRefs = useRef<(HTMLDivElement | null)[]>(new Array(data.length).fill(null));
  const titlesRefs = useRef<(HTMLDivElement | null)[]>(new Array(data.length).fill(null));
  const circleBgRefs = useRef<(HTMLDivElement | null)[]>(new Array(data.length).fill(null));

  const createScrollAnimations = useCallback(() => {
    const container = containerRef.current;
    const line = lineRef.current;

    if (!container || !line) return;

    const animations = [
      {
        target: line,
        fromProps: { height: 0 },
        toProps: {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 20%',
            end: 'bottom 50%',
            scrub: true,
          },
        },
      },
      ...entriesRefs.current.filter(Boolean).map((entry) => ({
        target: entry,
        fromProps: { opacity: 0, y: 50 },
        toProps: {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: entry,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        },
      })),
      ...circlesRefs.current.filter(Boolean).map((circle) => ({
        target: circle,
        fromProps: { opacity: 0 },
        toProps: {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: circle,
            start: 'top 80%',
            end: 'top 0%',
            scrub: true,
          },
        },
      })),
      ...circleBgRefs.current.filter(Boolean).map((circleBg) => ({
        target: circleBg,
        fromProps: { opacity: 0 },
        toProps: {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: circleBg,
            start: 'top 80%',
            end: 'top 0%',
            scrub: true,
          },
        },
      })),
      ...titlesRefs.current.filter(Boolean).map((title) => ({
        target: title,
        fromProps: { opacity: 0 },
        toProps: {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top -10%',
            scrub: true,
          },
        },
      })),
    ];

    animations.forEach(({ target, fromProps, toProps }) => {
      if (target) {
        gsap.fromTo(target, fromProps, toProps);
      }
    });
  }, []);

  useEffect(() => {
    createScrollAnimations();
  }, [createScrollAnimations]);

  return useMemo(
    () => (
      <div className="w-full font-mont !relative" ref={containerRef}>
        <div className="max-w-7xl mx-auto py-10 flex items-end justify-between">
          <div>
            <h2 className="features_title max-w-4xl">How it Works?</h2>
            <p className="md:text-base text-light-900 dark:text-primary-700/40 text-lg max-w-sm">Build Your Unique Discord Bot in Just 3 Easy Steps</p>
          </div>
          <AnimatedButton linkText1="Start Now!" className="btn btn-secondary py-6 px-10" />
          {/* <a href='' className="btn btn-primary py-6 px-10">Start Now!</a> */}
        </div>

        <div className="relative max-w-7xl mx-auto pb-20 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="absolute md:left-8 left-8 top-0 h-full overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-secondary/10 dark:via-white/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_80%,transparent_90%)]">
            <div
              ref={lineRef}
              className="absolute inset-x-0 top-0 w-[2px]
              bg-gradient-to-t to-light-700 via-light-800 from-secondary
              dark:from-primary-700 dark:via-primary-900 dark:to-transparent from-[0%] via-[10%] rounded-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%,black_100%,transparent_100%)]"
            />
          </div>

          {data.map((item, index) => (
            <div
              key={`timeline-entry-${index}`}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
              ref={(el) => {
                entriesRefs.current[index] = el;
              }}
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-primary-1100 flex items-center justify-center">
                  <div className="relative h-4 w-4 rounded-full bg-neutral-200 dark:bg-primary-1100 border border-neutral-300 dark:border-primary-1000 p-2" />
                  <div
                    ref={(el) => {
                      circlesRefs.current[index] = el;
                    }}
                    className="absolute h-4 w-4 rounded-full bg-neutral-200 dark:bg-primary-700 p-2"
                  />
                </div>
                <div className="relative">
                  <h3 className="relative hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-primary-1100">{item.title}</h3>
                  <h3
                    ref={(el) => {
                      titlesRefs.current[index] = el;
                    }}
                    className="absolute inset-y-0 hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-secondary dark:text-primary-700"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">{item.title}</h3>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    [data]
  );
});

Timeline.displayName = 'Timeline';
