import gsap from 'gsap';
import React, { useRef } from 'react';

interface ProButtonProps {
  buttonTitle?: string;
  className?: string;
}

const ProButton: React.FC<ProButtonProps> = ({ buttonTitle, className }) => {
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const animationRef = useRef<GSAPTween | null>(null);

  const handleMouseEnter = () => {
    if (gradientRef.current) {
      // Start continuous rotation
      animationRef.current = gsap.to(gradientRef.current, {
        attr: {
          gradientTransform: 'rotate(360)',
        },
        duration: 8,
        repeat: -1,
        ease: 'linear',
      });
    }
  };

  const handleMouseLeave = () => {
    if (gradientRef.current) {
      animationRef.current?.kill();
      gsap.to(gradientRef.current, {
        attr: {
          gradientTransform: 'rotate(0)',
        },
        duration: 1,
        ease: 'power1.out',
      });
    }
  };
  return (
    <>
      <button type="button" className={`ProButton relative ${className}`}>
        <div className="points_wrapper">
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
        </div>
        <svg className="absolute inset-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <defs>
            <linearGradient id="animated-gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%" ref={gradientRef}>
              <stop offset="0%" stopColor="#ffdd31" />
              <stop offset="50%" stopColor="#f28b0c" />
            </linearGradient>
          </defs>
          <rect x="-3" y="-3" width="133" height="55" fill="url(#animated-gradient)" />
        </svg>
        <span className="ProButtoninner">
          {buttonTitle}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path>
          </svg>
        </span>
      </button>
    </>
  );
};

export default ProButton;
