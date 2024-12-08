import React, { createContext, useContext, ReactNode, useState } from 'react';

// Theme name type definition
export type ThemeName =
  | 'mivatorhotpink'
  | 'mivatorblurple'
  | 'mivatoraqua'
  | 'mivatorpeach'
  | 'mivatorcoal'
  | 'mivatorred'
  | 'mivatoremerald'
  | 'mivatorplatinum'
  | 'mivatorsilver'
  | 'mivatorgold'
  | 'pastelblue'
  | 'pastelgreen'
  | 'pastelpink'
  | 'pastelpurple'
  | 'pastelyellow'
  | 'mivatorpink';

// Theme colors interface
export interface ThemeColors {
  [key: string]: string;
}

// Generate theme color map function
function generateThemeColorMap(themeName: string): ThemeColors {
  return Array.from({ length: 12 }, (_, i) => `color${i + 1}`).reduce((acc, colorKey, index) => {
    acc[colorKey] = `--color-${themeName}-${(index + 1) * 100}`;
    return acc;
  }, {} as ThemeColors);
}

// Theme colors object
export const themeColors: Record<ThemeName, ThemeColors> = {
  mivatorhotpink: generateThemeColorMap('mivatorhotpink'),
  mivatorblurple: generateThemeColorMap('mivatorblurple'),
  mivatoraqua: generateThemeColorMap('mivatoraqua'),
  mivatorpeach: generateThemeColorMap('mivatorpeach'),
  mivatorcoal: generateThemeColorMap('mivatorcoal'),
  mivatorred: generateThemeColorMap('mivatorred'),
  mivatoremerald: generateThemeColorMap('mivatoremerald'),
  mivatorplatinum: generateThemeColorMap('mivatorplatinum'),
  mivatorsilver: generateThemeColorMap('mivatorsilver'),
  mivatorgold: generateThemeColorMap('mivatorgold'),
  pastelblue: generateThemeColorMap('pastelblue'),
  pastelgreen: generateThemeColorMap('pastelgreen'),
  pastelpink: generateThemeColorMap('pastelpink'),
  pastelpurple: generateThemeColorMap('pastelpurple'),
  pastelyellow: generateThemeColorMap('pastelyellow'),
  mivatorpink: generateThemeColorMap('mivatorpink'),
};

// Mapping of theme names to display titles
export const themeTitles: Record<ThemeName, string> = {
  mivatorhotpink: 'Hot Pink',
  mivatorblurple: 'Blurple',
  mivatoraqua: 'Aqua',
  mivatorpeach: 'Peach',
  mivatorcoal: 'Coal',
  mivatorred: 'Red',
  mivatoremerald: 'Emerald',
  mivatorplatinum: 'Platinum',
  mivatorsilver: 'Silver',
  mivatorgold: 'Gold',
  pastelblue: 'Pastel Blue',
  pastelgreen: 'Pastel Green',
  pastelpink: 'Pastel Pink',
  pastelpurple: 'Pastel Purple',
  pastelyellow: 'Pastel Yellow',
  mivatorpink: 'Pink',
};

// Theme context type
export interface ThemeContextType {
  currentTheme: ThemeName;
  theme: ThemeColors;
  setTheme: (themeName: ThemeName) => void;
}

// Create context with explicit type and initial value
export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'mivatorhotpink',
  theme: themeColors['mivatorhotpink'],
  setTheme: () => {},
});

// Custom hook for using theme
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Function to get theme title
export const getThemeTitle = (themeName: ThemeName): string => {
  return themeTitles[themeName];
};


// Constants export
export const constants = {
  pro: '--color-pro',
  pro2: '--color-pro2',
};
