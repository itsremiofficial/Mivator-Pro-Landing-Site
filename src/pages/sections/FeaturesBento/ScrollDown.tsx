import ScrollDownSvg from './svgs/ScrollDownSvg';

const ScrollDown = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="text-xs font-nippo font-medium leading-snug text-light-700 group-hover/bento:text-secondary dark:text-primary-800 dark:group-hover/bento:text-primary transition-colors duration-1000 text-center flex flex-col">
        <span className="transition-transform duration-1000 relative group-hover/scrolldown:-translate-y-2">SCROLL</span>
        <span className="transition-transform duration-1000 relative group-hover/scrolldown:translate-y-2">DOWN</span>
      </div>
      <div className="jumper flex flex-col absolute bottom-0">
        <ScrollDownSvg />
      </div>
    </div>
  );
};

export default ScrollDown;
