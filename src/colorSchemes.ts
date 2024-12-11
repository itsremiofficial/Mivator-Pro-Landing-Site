import React, { createContext, useContext, ReactNode, useState } from 'react';

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

export interface ThemeColors {
  [key: string]: string;
}

function generateThemeColorMap(themeName: string): ThemeColors {
  return Array.from({ length: 12 }, (_, i) => `color${i + 1}`).reduce((acc, colorKey, index) => {
    acc[colorKey] = `--color-${themeName}-${(index + 1) * 100}`;
    return acc;
  }, {} as ThemeColors);
}

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

export interface ThemeContextType {
  currentTheme: ThemeName;
  theme: ThemeColors;
  setTheme: (themeName: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: (localStorage.getItem('colorScheme') as ThemeName) || 'mivatorblurple',
  theme: themeColors['mivatorblurple'],
  setTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const getThemeTitle = (themeName: ThemeName): string => {
  return themeTitles[themeName];
};

// Extracts an array of theme names
export const getThemeNames = (): ThemeName[] => {
  return Object.keys(themeColors) as ThemeName[];
};

export const constants = {
  pro: '--color-pro',
  pro2: '--color-pro2',
};
