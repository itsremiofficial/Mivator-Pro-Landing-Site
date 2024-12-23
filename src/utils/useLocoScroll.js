import { useLayoutEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useLocoScroll = (triggeredElem) => {
  const locoScrollRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const scrollEl = document.querySelector(triggeredElem);

    locoScrollRef.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.07,
      multiplier: 0.8,
      tablet: {
        smooth: false,
        breakpoint: 768,
      },
      smartphone: {
        smooth: false,
      },
    });

    locoScrollRef.current.on('scroll', ScrollTrigger.update);

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
    });
  };

  return { scrollToSection };
};

export default useLocoScroll;
