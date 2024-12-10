import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from './store';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, colorScheme } = useSelector((state: IRootState) => state.themeConfig);

  useEffect(() => {
    // Apply theme
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);

    // Apply color scheme
    document.documentElement.setAttribute('color-scheme', colorScheme);
  }, [theme, colorScheme]);

  return <>{children}</>;
};
