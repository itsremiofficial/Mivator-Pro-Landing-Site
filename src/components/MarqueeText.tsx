import { useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
import horizontalLoop from '@/utils/horizontalLoop';
import IconFeatureFast from '@icon/IconFeatureFast';
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
          paddingRight: 10,
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
                    pt-10 md:pt-14 xl:pt-48
                    pb-8 md:pb-10 xl:pb-32
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
        <div
          className="marqueeword marqueetext whitespace-nowrap flex items-center
                                  gap-6 lg:gap-12
                                  "
        >
          Mivator
        </div>
        <div
          className="marqueeword marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
        >
          Mivator
        </div>
        <div
          className="marqueeword marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
        >
          Mivator
        </div>
        <div
          className="marqueeword marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
        >
          Mivator
        </div>
        <div
          className="marqueeword marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
        >
          Mivator
        </div>
        <div
          className="marqueeword marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
        >
          Mivator
        </div>
        <div
          className="marqueeword marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
        >
          Mivator
        </div>
        <div
          className="marqueeword marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
        >
          Mivator
        </div>
      </div>
    </section>
  );
};
export default MarqueeText;
