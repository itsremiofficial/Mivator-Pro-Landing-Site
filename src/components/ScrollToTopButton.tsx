import { cn } from '@/utils';
import { useEffect, useRef } from 'react';
import AnimatedText from './Common/AnimatedText';
import gsap from 'gsap';

interface ScrollToTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible, onClick }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const element = buttonRef.current;
    if (!element) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    if (isVisible) {
      animationRef.current = gsap.to(element, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        display: 'flex',
      });
    } else {
      animationRef.current = gsap.to(element, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(element, { display: 'none' });
        },
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isVisible]);
  return (
    <div ref={buttonRef} onClick={onClick} className={cn('scrollTop opacity-0', 'fixed bottom-20 right-5 lg:bottom-10 lg:right-10 z-100 group')}>
      <div
        className={cn('absolute inset-1 top-4', 'blur-lg group-hover:!blur-xl saturate-150', 'rounded-[1.3rem] overflow-visible', 'bg-secondary dark:bg-primary-1000', 'transition-all duration-300')}
      ></div>
      <div className="mask mask-squircle size-12 ">
        <AnimatedText
          linkText1="TOP"
          className={cn(
            'w-full h-full p-2',
            'flex items-center justify-center',
            'font-nippo font-medium text-xs',
            'bg-light-600 hover:bg-light-700',
            'dark:bg-primary-1000 dark:hover:bg-primary-900',
            'text-light-900 hover:text-secondary',
            'dark:text-primary dark:group-hover:text-primary-500',
            'transition-colors duration-400 ease-fluid'
          )}
        />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
