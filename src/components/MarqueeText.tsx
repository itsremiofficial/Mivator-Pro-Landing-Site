import { useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
import horizontalLoop from '@Utils/horizontalLoop';

gsap.registerPlugin(Observer, useGSAP);
const MarqueeText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const speed = 3;
      document.fonts.ready.then(() => {
        const loop = horizontalLoop('.marqueeword', {
          repeat: -1,
          speed: 1.5,
        });
        let tl: GSAPTimeline | null = null;
        Observer.create({
          target: window,
          type: 'wheel',
          onChangeY: (self) => {
            tl?.kill();
            const factor = self.deltaY > 0 ? 1 : -1;
            tl = gsap
              .timeline()
              .to(loop, { timeScale: speed * factor, duration: 0.25 })
              .to(loop, { timeScale: 1 * factor, duration: 1 });
          },
        });
      });
    },
    {
      scope: containerRef,
    }
  );
  return (
    <section
      className="
          py-10 md:py-14 xl:py-48
          select-none antialiased"
    >
      <div
        className="
                marquee-text
                text-6xl lg:text-7xl xl:text-9xl
                py-8 md:py-10
                bg-light-400 dark:bg-primary-1100 font-syne font-extrabold -rotate-3 flex flex-nowrap gap-24 text-secondary dark:text-primary overflow-hidden relative right-0"
        ref={containerRef}
      >
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
        <div className="marqueeword whitespace-nowrap flex items-center lg:px-6 px-4">Mivator</div>
      </div>
    </section>
  );
};
export default MarqueeText;
