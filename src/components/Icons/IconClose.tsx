import { FC } from 'react';

interface IconCloseProps {
  className?: string;
  fill?: boolean;
  width?: string | number;
}

const IconClose: FC<IconCloseProps> = ({ className, fill = false, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M7 17.0002L17.0002 7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.0002 17.0002L7 7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M7 17.0002L17.0002 7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.0002 17.0002L7 7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
};

export default IconClose;
