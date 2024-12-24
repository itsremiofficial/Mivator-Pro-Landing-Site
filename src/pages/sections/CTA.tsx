import AnimatedButton from '@Common/AnimatedButton';
import { IRootState } from '@/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const CTA = () => {
  const themeConfig = useSelector(
    (state: IRootState) => state.themeConfig,
    (prev, next) => prev.theme === next.theme
  );

  const isDark = useMemo(() => themeConfig.theme === 'dark', [themeConfig.theme]);
  return (
    <div className="mx-auto lg:max-w-7xl w-full py-24 sm:px-6 sm:py-32 lg:px-8">
      <div
        className="
          relative isolate overflow-hidden
          bg-secondary dark:bg-primary-1100
          shadow-2xl rounded-[3rem]
          py-12 px-6 sm:px-16 lg:px-24 lg:py-24
          flex flex-col md:flex-row items-center justify-between
          lg:gap-x-20 gap-6
          lg:flex-col w-full text-center"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor={`${isDark ? 'var(--color10)' : 'var(--color-light-800)'}`} />
              <stop offset="1" stopColor={`${isDark ? 'var(--color10)' : 'var(--color-light-800)'}`} />
            </radialGradient>
          </defs>
        </svg>
        <h2
          className="font-semibold tracking-tight text-balance text-light-100 dark:text-primary-400
          text-4xl md:text-5xl lg:text-8xl
          leading-snug font-nippo"
        >
          Are You Ready?
        </h2>

        <a href="/icons" className="lg:mt-10 flex items-center justify-center gap-x-6">
          <AnimatedButton linkText1="START NOW" className="btn btn-primary py-6 px-10" />
        </a>
      </div>
    </div>
  );
};

export default CTA;
