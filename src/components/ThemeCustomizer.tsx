import React, { memo, useCallback, useRef, useMemo, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { toggleColorScheme, toggleTheme } from '@Store/themeConfigSlice';
import { IRootState } from '@/store';
import { getThemeTitle, ThemeName } from '@/colorSchemes';
import { useOutsideClick, useToggle } from '@Utils/outsideClick';

const IconClose = lazy(() => import('@Icons/IconClose'));
const ColorUiWindow = lazy(() => import('@ThemedStacks/ColorUiWindow'));

const selectThemeConfig = createSelector(
  (state: IRootState) => state.themeConfig.theme,
  (state: IRootState) => state.themeConfig.colorScheme,
  (theme, colorScheme) => ({ theme, colorScheme })
);

interface ThemeCustomizerProps {
  className?: string;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = memo(({ className }) => {
  const dispatch = useDispatch();
  const { colorScheme } = useSelector(selectThemeConfig);

  const [showCustomizer, toggleCustomizer] = useToggle(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(drawerRef, () => {
    if (showCustomizer) toggleCustomizer();
  });

  const handleThemeChange = useCallback(
    (themeKey: ThemeName) => {
      const themeAction = themeKey === 'mivatorsilver' ? toggleTheme('light') : toggleTheme('dark');

      dispatch(themeAction);
      dispatch(toggleColorScheme(themeKey));
    },
    [dispatch]
  );

  const themeButtonStyle = useMemo(
    () => ({
      backgroundColor: `var(--${colorScheme}-700)`,
    }),
    [colorScheme]
  );

  const buttonClasses = useMemo(
    () =>
      `
    !transition-colors !duration-300 
    bg-light-400 hover:bg-light-500 
    border-light-300 hover:border-light-400 
    dark:border-primary-1000 dark:hover:border-primary-900
    dark:bg-primary-1000 dark:hover:bg-primary-900
    group rounded-2xl btn py-3.5 pr-7 
    flex items-center justify-between gap-2 
    font-nippo ${className}
  `.trim(),
    [className]
  );

  return (
    <div>
      {/* Theme Toggle Button */}
      <button type="button" className={buttonClasses} onClick={toggleCustomizer} tabIndex={0}>
        <span
          className="
          w-5 h-5
          sm:w-7 sm:h-7
          md:w-5 md:h-5
          rounded-full inline-block"
          style={themeButtonStyle}
        />
        <h3
          className="
          text-light-1000 group-hover:text-secondary 
          dark:text-primary-700 dark:group-hover:text-primary-600
          text-lg sm:text-[20px] md:text-[14px]
          tracking-wider leading-none whitespace-nowrap
          !transition-colors !duration-300"
        >
          {getThemeTitle(colorScheme as ThemeName)}
        </h3>
      </button>

      {/* Theme Drawer */}
      <Suspense fallback={<div>Loading...</div>}>
        <nav
          ref={drawerRef}
          className={`
            ${showCustomizer && '!right-0'}
            fixed h-screen -right-[450px] 
            ease-fluid top-0 bottom-0 
            w-full max-w-[360px] 
            will-change-transform transition-[right] 
            duration-600 z-[51] 
            p-1 pb-8 pr-0
          `}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 w-full rounded-t-3xl bg-light-400 border-light-600 border-b-light-600 text-secondary dark:bg-primary-1100 dark:border-primary/20 dark:border-b-primary/20 dark:text-primary-600 border-2 text-center font-syne text-lg py-4 z-[51] m-1 mr-0 font-bold tracking-wider">
            <span>Theme Preference</span>
            <button type="button" className="absolute z-[52] top-0 right-0 !transition-colors !duration-300 rounded-full px-4 h-full" onClick={toggleCustomizer}>
              <IconClose width={1.5} className="text-light-primary cursor-pointer dark:text-primary-800 hover:text-secondary dark:hover:text-primary-700 !transition-colors !duration-300" />
            </button>
          </div>

          {/* Content */}
          <div className="bg-light-400 dark:bg-primary-1100 border-light-600 dark:border-white/10 relative perfect-scrollbar !size-full p-4 mt-6 py-12 shadow-[-23px_0_25px_0_rgba(0,0,0,0.1)] dark:shadow-[-43px_0_45px_0_rgba(0,0,0,0.6)] rounded-3xl border-2">
            <div className="flex flex-col gap-4 items-center">
              <ColorUiWindow onThemeChange={handleThemeChange} />
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 w-full rounded-b-4xl bg-light-400 border-light-600 dark:bg-primary-1100 dark:border-white/10 border-2 py-4 z-[52] m-1 mr-0" />
        </nav>
      </Suspense>
    </div>
  );
});

ThemeCustomizer.displayName = 'ThemeCustomizer';

export default ThemeCustomizer;
