import gsap from 'gsap';
import React, { useEffect, useRef, useCallback } from 'react';

const BackgroundLines = React.memo(() => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const elementsRef = useRef<NodeListOf<HTMLLIElement> | null>(null);

  const createAnimation = useCallback(() => {
    // Safer plugin registration check
    if (!gsap.registerPlugin) {
      console.warn('GSAP plugin registration failed');
      return;
    }

    // Cache elements once
    elementsRef.current = document.querySelectorAll<HTMLLIElement>('.background-grid li');
    const elements = elementsRef.current;

    // Prevent multiple timelines
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const duration = 25;
    const newTimeline = gsap.timeline({ repeat: -1 });
    timelineRef.current = newTimeline;

    elements.forEach((li, index) => {
      newTimeline.fromTo(
        li,
        { '--before-top': '-200px' },
        {
          '--before-top': '100%',
          duration: duration,
          ease: 'linear',
          onComplete: () => {
            if (!timelineRef.current) return;

            if (index < elements.length - 1) {
              const nextElement = elements[index + 1];
              timelineRef.current.add(() => {
                gsap.fromTo(
                  nextElement,
                  { '--before-top': '-200px' },
                  {
                    '--before-top': '100%',
                    duration: duration,
                    ease: 'linear',
                  }
                );
              });
            } else {
              timelineRef.current.add(() => {
                elements.forEach((el) => {
                  gsap.fromTo(
                    el,
                    { '--before-top': '-200px' },
                    {
                      '--before-top': '100%',
                      duration: duration,
                      ease: 'linear',
                    }
                  );
                });
              });
            }
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    createAnimation();

    // Cleanup function to kill the timeline when component unmounts
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [createAnimation]);

  return (
    <ul className="background-grid absolute inset-0">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li className="hidden lg:block"></li>
      <li className="hidden lg:block"></li>
      <li className="hidden 2xl:block"></li>
      <li className="hidden 2xl:block"></li>
    </ul>
  );
});

export default BackgroundLines;
