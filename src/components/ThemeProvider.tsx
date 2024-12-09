import { ReactNode, useState } from 'react';
import { themeColors, ThemeContext, ThemeName } from '../colorSchemes';

export const ThemeProvider: React.FC<{
  children: ReactNode;
  initialTheme?: ThemeName;
}> = ({ children, initialTheme = 'mivatorhotpink' }) => {
  
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(initialTheme);

  const setTheme = (themeName: ThemeName) => {
    const selectedTheme = themeColors[themeName];
    Object.entries(selectedTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });

    setCurrentTheme(themeName);
  };

  const theme = themeColors[currentTheme];

  return <ThemeContext.Provider value={{ currentTheme, theme, setTheme }}>{children}</ThemeContext.Provider>;
};
