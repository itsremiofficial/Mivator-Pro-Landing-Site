import { useState, useEffect, useMemo } from 'react';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(`(max-width: ${breakpoint}px)`).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isMobile;
};
// const isMobile = useIsMobile();
export default useIsMobile;

export const useThemeConfig = () => {
  const themeConfig = useSelector(
    (state: IRootState) => state.themeConfig,
    (prev, next) => prev.theme === next.theme
  );

  const isDark = useMemo(() => themeConfig.theme === 'dark', [themeConfig.theme]);

  return { themeConfig, isDark };
};
