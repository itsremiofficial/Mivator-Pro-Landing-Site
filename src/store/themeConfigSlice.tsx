import { createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";
import themeConfig from "../theme.config";

const initialState = {
  theme: localStorage.getItem("theme") || themeConfig.theme,
  colorScheme: localStorage.getItem("colorScheme") || themeConfig.colorScheme,
  layout: localStorage.getItem("layout") || themeConfig.layout,
  animation: localStorage.getItem("animation") || themeConfig.animation,
  locale: localStorage.getItem("i18nextLng") || themeConfig.locale,
  isDarkMode: true,
  languageList: [
    { code: "zh", name: "Chinese" },
    { code: "da", name: "Danish" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "hu", name: "Hungarian" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "pl", name: "Polish" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "es", name: "Spanish" },
    { code: "sv", name: "Swedish" },
    { code: "tr", name: "Turkish" },
    { code: "ae", name: "Arabic" },
  ],
};

const themeConfigSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    toggleTheme(state, { payload }) {
      payload = payload || state.theme; // light | dark
      localStorage.setItem("theme", payload);
      state.theme = payload;
      if (payload === "light") {
        state.isDarkMode = false;
      } else if (payload === "dark") {
        state.isDarkMode = true;
      }

      if (state.isDarkMode) {
        document.documentElement?.classList.add("dark");
      } else {
        document.documentElement?.classList.remove("dark");
      }
    },
    // Toggle Color Scheme Function
    toggleColorScheme(state, { payload }) {
      payload = payload || state.colorScheme;
      localStorage.setItem("colorScheme", payload);
      state.colorScheme = payload;
      document.documentElement.dataset.colorScheme = payload;
    },
    toggleLayout(state, { payload }) {
      payload = payload || state.layout; // full, boxed-layout
      localStorage.setItem("layout", payload);
      state.layout = payload;
    },
    toggleAnimation(state, { payload }) {
      payload = payload || state.animation; // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
      payload = payload?.trim();
      localStorage.setItem("animation", payload);
      state.animation = payload;
    },
    toggleLocale(state, { payload }) {
      payload = payload || state.locale;
      i18next.changeLanguage(payload);
      state.locale = payload;
    },

    setPageTitle(state, { payload }) {
      document.title = `${payload} | Mivator`;
    },
  },
});

export const {
  toggleTheme,
  toggleColorScheme,
  toggleLayout,
  toggleAnimation,
  toggleLocale,
  setPageTitle,
} = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
