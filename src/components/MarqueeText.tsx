import { useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import horizontalLoop from "../hooks/horizontalLoop";
import IconFeatureFast from "./Icon/IconFeatureFast";
gsap.registerPlugin(Observer, useGSAP);
const MarqueeText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const speed = 3;
      document.fonts.ready.then(() => {
        const loop = horizontalLoop(".marqueeword", {
          repeat: -1,
          speed: 1.5,
          paddingRight: 10,
        });
        let tl: GSAPTimeline | null = null;
        Observer.create({
          target: window,
          type: "wheel",
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
                    "
    >
      <div
        className="
                marquee-text
                text-6xl lg:text-7xl xl:text-9xl
                py-8 md:py-10
                bg-light-400 dark:bg-primary-1100 font-syne font-extrabold -rotate-3 flex flex-nowrap text-secondary dark:text-primary overflow-hidden relative right-0"
        ref={containerRef}
      >
        <div
          className="marqueeword marquee-content
                                flex gap-24 md:gap-48
                                md:px-24 px-12
                                "
        >
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Fast&nbsp;&amp;&nbsp;efficient
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Easy&nbsp;to&nbsp;Modify
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Highly&nbsp;Compatible
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Better&nbsp;UI
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Premium&nbsp;Features
          </div>
        </div>
        <div
          className="marqueeword marquee-content
                                flex gap-24 md:gap-48
                                md:px-24 px-12
                                "
        >
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Fast&nbsp;&amp;&nbsp;efficient
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Easy&nbsp;to&nbsp;Modify
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Highly&nbsp;Compatible
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Better&nbsp;UI
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Premium&nbsp;Features
          </div>
        </div>
        <div
          className="marqueeword marquee-content
                                flex gap-24 md:gap-48
                                md:px-24 px-12
                                "
        >
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Fast&nbsp;&amp;&nbsp;efficient
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Easy&nbsp;to&nbsp;Modify
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Highly&nbsp;Compatible
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Better&nbsp;UI
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Premium&nbsp;Features
          </div>
        </div>
        <div
          className="marqueeword marquee-content
                                flex gap-24 md:gap-48
                                md:px-24 px-12
                                "
        >
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Fast&nbsp;&amp;&nbsp;efficient
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Easy&nbsp;to&nbsp;Modify
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Highly&nbsp;Compatible
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Better&nbsp;UI
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Premium&nbsp;Features
          </div>
        </div>
        <div
          className="marqueeword marquee-content
                                flex gap-24 md:gap-48
                                md:px-24 px-12
                                "
        >
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Fast&nbsp;&amp;&nbsp;efficient
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Easy&nbsp;to&nbsp;Modify
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Highly&nbsp;Compatible
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Better&nbsp;UI
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Premium&nbsp;Features
          </div>
        </div>
        <div
          className="marqueeword marquee-content
                                flex gap-24 md:gap-48
                                md:px-24 px-12
                                "
        >
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Fast&nbsp;&amp;&nbsp;efficient
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Easy&nbsp;to&nbsp;Modify
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Highly&nbsp;Compatible
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Better&nbsp;UI
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Premium&nbsp;Features
          </div>
        </div>
        <div
          className="marqueeword marquee-content
                                flex gap-24 md:gap-48
                                md:px-24 px-12
                                "
        >
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Fast&nbsp;&amp;&nbsp;efficient
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Easy&nbsp;to&nbsp;Modify
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Highly&nbsp;Compatible
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Better&nbsp;UI
          </div>
          <div
            className="marqueetext whitespace-nowrap flex items-center
                                    gap-6 lg:gap-12
                                    "
          >
            <IconFeatureFast className="size-14 md:size-16 lg:size-24 xl:size-32" />
            Premium&nbsp;Features
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarqueeText;
