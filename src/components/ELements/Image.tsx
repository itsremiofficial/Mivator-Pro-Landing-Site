import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

const Image: React.FC<ImageProps> = ({ src, className, alt, width = 400, height = 300 }) => {
  console.log(src + '.avif');
  return <img className={className} srcSet={`${src}.webp 1x`} src={`${src}.avif`} alt={alt} width={width} height={height} />;
};

export default Image;
