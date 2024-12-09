import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
// import {
//   toggleTheme,
//   toggleLocale,
//   toggleLayout,
//   toggleAnimation,
//   toggleColorScheme,
// } from "./store/themeConfigSlice";

function App({ children }: PropsWithChildren) {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  return <div className={`main-section antialiased relative font-nunito text-sm font-normal`}>{children}</div>;
}

export default App;
