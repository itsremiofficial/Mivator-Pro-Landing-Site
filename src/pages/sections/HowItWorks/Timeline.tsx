// Import GSAP and ScrollTrigger
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnimatedButton from '@/components/Common/AnimatedButton';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const subtitlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const entries = entriesRef.current;
    const circles = circlesRef.current;
    const titles = titlesRef.current;
    const subtitles = titlesRef.current;

    if (!container || !line || !entries || !circles || !titles) return;

    // Initialize ScrollTrigger for the line animation
    gsap.fromTo(
      line,
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 20%',
          end: 'bottom 50%',
          scrub: true,
        },
      },
    );

    // Initialize ScrollTrigger for each timeline entry
    entries.forEach((entry) => {
      if (!entry) return;
      gsap.fromTo(
        entry,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: entry,
            start: 'top 80%',
            end: 'top 70%',
            scrub: true,
          },
        },
      );
    });
    circles.forEach((circle) => {
      if (!circle) return;
      gsap.fromTo(
        circle,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: circle,
            start: 'top 80%',
            end: 'top 0%',
            scrub: true,
          },
        },
      );
    });
    titles.forEach((title) => {
      if (!title) return;
      gsap.fromTo(
        title,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        },
      );
    });
    subtitles.forEach((title) => {
      if (!title) return;
      gsap.fromTo(
        title,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full font-mont md:px-10 !relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 flex items-end justify-center md:justify-between flex-wrap gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="features_title max-w-4xl">How it Works?</h2>
          <p className="md:text-base text-light-900 dark:text-primary-400/40 text-lg max-w-sm font-sans">Build Your Unique Discord Bot in Just 3 Easy Steps</p>
        </div>
        <AnimatedButton linkText1="Start Now!" className="btn btn-secondary py-6 px-10" />
      </div>

      <div className="relative max-w-7xl mx-auto pb-20">
        <div className="absolute md:left-8 left-8 top-0 h-full overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-white/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_90%,transparent_100%)]">
          <div
            ref={lineRef}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary-700 via-primary-900 to-transparent from-[0%] via-[10%] rounded-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%,black_100%,transparent_100%)]"
          />
        </div>

        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10" ref={(el) => (entriesRef.current[index] = el)}>
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-light-400 dark:bg-primary-1100 flex items-center justify-center">
                <div className="relative h-4 w-4 rounded-full bg-light-500 dark:bg-primary-1100 p-2" />
                <div ref={(el) => (circlesRef.current[index] = el)} className="absolute h-4 w-4 rounded-full bg-secondary dark:bg-primary p-2" />
              </div>
              <div className="relative">
                <h3 className="relative hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-light-500 dark:text-primary-1100">{item.title}</h3>
                <h3 ref={(el) => (titlesRef.current[index] = el)} className="absolute inset-y-0 hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-secondary dark:text-primary">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-light-500 dark:text-primary-1100">{item.title}</h3>
              <h3 className="md:hidden block absolute inset-y-0 text-2xl mb-4 text-left font-bold text-secondary dark:text-primary-700" ref={(el) => (subtitlesRef.current[index] = el)}>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
