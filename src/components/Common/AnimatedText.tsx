import React, { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

// Define types for the icon props
interface IconProps {
  className?: string;
  fill?: string | boolean;
  duotone?: boolean;
  width?: string | number;
}

interface AnimatedTextProps {
  linkText1: string;
  id?: string;
  linkText2?: string;
  className?: string;
  Icon?: ReactNode;
  iconProps?: IconProps;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ linkText1, id, linkText2, className, Icon }) => {
  const linkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const linkElement = linkRef.current;

    if (!linkElement) return;

    const textElements = linkElement.querySelectorAll("[hoverstagger='text']");

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
    <button className={`${className} cursor-pointer`} ref={linkRef} name={linkText1} id={id}>
      <div className="relative overflow-hidden z-[1] leading-none">
        <div hoverstagger="text" className="relative inline-block">
          {linkText1}
        </div>
        <div hoverstagger="text" className="absolute inset-y-0">
          {linkText2 ? linkText2 : linkText1}
        </div>
      </div>
      {Icon && Icon}
    </button>
  );
};

export default AnimatedText;

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    hoverstagger?: string;
  }
}
