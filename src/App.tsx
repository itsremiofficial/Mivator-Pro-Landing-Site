import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./store";
import {
  toggleTheme,
  toggleLocale,
  toggleLayout,
  toggleAnimation,
  toggleColorScheme,
} from "./store/themeConfigSlice";

function App({ children }: PropsWithChildren) {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme(localStorage.getItem("theme") || themeConfig.theme));
    dispatch(
      toggleColorScheme(
        localStorage.getItem("colorScheme") || themeConfig.colorScheme
      )
    );
    dispatch(
      toggleLayout(localStorage.getItem("layout") || themeConfig.layout)
    );
    dispatch(
      toggleAnimation(
        localStorage.getItem("animation") || themeConfig.animation
      )
    );
    dispatch(
      toggleLocale(localStorage.getItem("i18nextLng") || themeConfig.locale)
    );
  }, [
    dispatch,
    themeConfig.theme,
    themeConfig.colorScheme,
    themeConfig.layout,
    themeConfig.animation,
    themeConfig.locale,
  ]);

  return (
    <div
      className={`${themeConfig.layout} main-section antialiased relative font-nunito text-sm font-normal`}
    >
      {children}
    </div>
  );
}

export default App;
