import { useLayoutEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useLocoScroll = (triggeredElem) => {
  const locoScrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const scrollEl = document.querySelector(triggeredElem);

    locoScrollRef.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.07,
      multiplier: 1,
      tablet: {
        smooth: false,
        breakpoint: 768,
      },
      smartphone: {
        smooth: false,
      },
    });

    locoScrollRef.current.on('scroll', (args) => {
      // Update ScrollTrigger
      ScrollTrigger.update();

      // Calculate scroll progress
      const totalHeight = args.limit.y;
      const currentScroll = args.scroll.y;
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScrollRef.current) {
          return arguments.length ? locoScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true }) : locoScrollRef.current.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(triggeredElem).style.transform ? 'transform' : 'fixed',
    });

    const lsUpdate = () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.update();
      }
    };

    ScrollTrigger.defaults({
      scroller: document.documentElement.classList.contains('has-scroll-smooth') && scrollEl,
    });

    ScrollTrigger.addEventListener('refresh', lsUpdate);

    return () => {
      locoScrollRef.current.destroy();
      ScrollTrigger.removeEventListener('refresh', lsUpdate);
    };
  }, [triggeredElem]);

  const scrollToSection = (target) => {
    const easing = [0.25, 0.0, 0.35, 1.0];
    locoScrollRef.current?.scrollTo(target, {
      duration: 2000,
      easing: easing,
      disableLerp: false,
      offset: -100,
    });
  };

  return { scrollToSection, scrollProgress };
};

export default useLocoScroll;
