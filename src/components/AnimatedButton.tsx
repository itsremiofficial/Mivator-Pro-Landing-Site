import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

interface AnimatedButtonProps {
  linkText1?: string;
  linkText2?: string;
  className?: string;
  Icon?: React.FC<any>; // Icon component
  iconProps?: React.ComponentProps<any>; // Additional props for the icon
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  linkText1,
  linkText2,
  className,
  Icon,
  iconProps, // Accepting icon props
}) => {
  const linkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (linkRef.current) {
      const textElements = linkRef.current.querySelectorAll(
        "[hoverstagger='text']"
      );

      // Apply SplitType to the text elements
      textElements.forEach((el) => {
        new SplitType(el as HTMLElement, {
          types: "words,chars",
          tagName: "span",
        });
      });

      // Initialize GSAP timeline
      const tl = gsap.timeline({ paused: true });

      const text1 = textElements[0];
      const text2 = textElements[1];

      if (text1 && text2) {
        tl.to(text1.querySelectorAll(".char"), {
          yPercent: -120,
          duration: 0.3,
          stagger: { amount: 0.2 },
        });

        tl.from(
          text2.querySelectorAll(".char"),
          {
            yPercent: 200,
            duration: 0.3,
            stagger: { amount: 0.2 },
          },
          0
        );
      }

      // Mouse enter event to trigger animation
      const handleMouseEnter = () => {
        tl.restart();
      };
      const handleMouseLeave = () => {
        tl.reverse();
      };

      linkRef.current.addEventListener("mouseenter", handleMouseEnter);
      linkRef.current.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function
      return () => {
        linkRef.current?.removeEventListener("mouseenter", handleMouseEnter);
        linkRef.current?.addEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [linkRef]);

  return (
    <button className={`btn ${className}`} ref={linkRef}>
      <div hoverstagger="link" className="flex">
        <div className="relative overflow-hidden z-[1]">
          <div hoverstagger="text" className={`relative inline-block`}>
            {linkText1}
          </div>
          <div hoverstagger="text" className={`absolute inset-y-0`}>
            {linkText2 ? linkText2 : linkText1}
          </div>
        </div>
      </div>
      {Icon && <Icon {...iconProps} />}
    </button>
  );
};

export default AnimatedButton;

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    hoverstagger?: string;
  }
}
