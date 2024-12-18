import React, { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

interface AnimatedButtonProps {
  linkText1: string;
  linkText2?: string;
  className?: string;
  Icon?: ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ linkText1, linkText2, className, Icon }) => {
  const linkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const linkElement = linkRef.current;

    if (!linkElement) return;

    const textElements = linkElement.querySelectorAll("[hoverstagger='button']");

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
        duration: 0.3,
        stagger: { amount: 0.2 },
      }).from(
        text2.querySelectorAll('.char'),
        {
          yPercent: 200,
          duration: 0.3,
          stagger: { amount: 0.2 },
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

  return (
    <button className={`btn ${className}`} ref={linkRef} name={linkText1}>
      <div hoverstagger="link" className="flex justify-start">
        <div className="relative overflow-hidden z-[1] leading-none">
          <div hoverstagger="button" className="relative inline-block">
            {linkText1}
          </div>
          <div hoverstagger="button" className="absolute inset-y-0">
            {linkText2 ? linkText2 : linkText1}
          </div>
        </div>
      </div>
      {Icon && Icon}
    </button>
  );
};

export default AnimatedButton;

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    hoverstagger?: string;
  }
}
