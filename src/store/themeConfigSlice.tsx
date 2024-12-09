import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { themeConfig } from '@/theme.config';

// Initial state based on current configuration
const initialState = {
  ...themeConfig.getConfig(),
};

type ThemeType = 'light' | 'dark' | 'system' | undefined;

type ThemeConfigState = typeof initialState & {
  theme?: ThemeType;
  colorScheme?: string;
  isDarkMode?: boolean;
};

const themeConfigSlice = createSlice({
  name: 'themeConfig',
  initialState,
  reducers: {
    toggleTheme(state: ThemeConfigState, { payload }: PayloadAction<ThemeType>) {
      const newTheme: ThemeType = payload || (state.theme === 'light' ? 'dark' : 'light');
      const updatedConfig = themeConfig.updateConfig({
        theme: newTheme,
        isDarkMode: newTheme === 'dark',
      });

      return {
        ...state,
        ...updatedConfig,
      };
    },

    toggleColorScheme(state: ThemeConfigState, { payload }: PayloadAction<string | undefined>) {
      const updatedConfig = themeConfig.updateConfig({
        colorScheme: payload || state.colorScheme,
      });

      return {
        ...state,
        ...updatedConfig,
      };
    },

    setPageTitle(_, { payload }: PayloadAction<string>) {
      document.title = `${payload} | Mivator`;
    },
  },
});

export const { toggleTheme, toggleColorScheme, setPageTitle } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
