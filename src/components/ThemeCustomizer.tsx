import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColorScheme, toggleTheme } from '../store/themeConfigSlice';
import IconClose from '../components/Icon/IconClose';
import { IRootState } from '@/store';
import { ColorUiWindow } from './ThemedStacks/ColorUiWindow';

type ThemeKeys =
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

interface Theme {
  name: string;
  color: string;
}

const colorSchemes: Record<ThemeKeys, Theme> = {
  mivatorhotpink: { name: 'Hot Pink', color: `var(--mivatorhotpink)` },
  mivatorblurple: { name: 'Blurple', color: `var(--mivatorblurple)` },
  mivatoraqua: { name: 'Aqua', color: `var(--mivatoraqua)` },
  mivatorpeach: { name: 'Peach', color: `var(--mivatorpeach)` },
  mivatorcoal: { name: 'Coal', color: `var(--mivatorcoal)` },
  mivatoremerald: { name: 'Emerald', color: `var(--mivatoremerald)` },
  mivatorplatinum: { name: 'Platinum', color: `var(--mivatorplatinum)` },
  mivatorsilver: { name: 'Silver', color: `var(--mivatorsilver)` },
  mivatorgold: { name: 'Gold', color: `var(--mivatorgold)` },
  mivatorpink: { name: 'Pink', color: `var(--mivatorpink)` },
  mivatorred: { name: 'Red', color: `var(--mivatorred)` },
  pastelblue: { name: 'Pastel Blue', color: `var(--pastelblue)` },
  pastelgreen: { name: 'Pastel Green', color: `var(--pastelgreen)` },
  pastelpink: { name: 'Pastel Pink', color: `var(--pastelpink)` },
  pastelpurple: { name: 'Pastel Purple', color: `var(--pastelpurple)` },
  pastelyellow: { name: 'Pastel Yellow', color: `var(--pastelyellow)` },
};

interface ThemeCustomizerProps {
  className?: string;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ className }) => {
  const storedTheme = useSelector((state: IRootState) => state.themeConfig.colorScheme);
  const dispatch = useDispatch();
  const [colorScheme, setColorScheme] = useState(storedTheme);

  const handleThemeChange = (themeKey: ThemeKeys) => {
    if (themeKey === 'mivatorsilver') {
      dispatch(toggleTheme('light'));
      setColorScheme(themeKey);
      dispatch(toggleColorScheme(themeKey));
    } else {
      dispatch(toggleTheme('dark'));
      dispatch(toggleColorScheme(themeKey));
      setColorScheme(themeKey);
    }
  };

  const [showCustomizer, setShowCustomizer] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as HTMLDivElement)) {
      setShowCustomizer(false);
    }
  };

  useEffect(() => {
    if (showCustomizer) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCustomizer]);

  return (
    <div>
      <button
        type="button"
        className={`!transition-colors !duration-300 bg-light-300 hover:bg-light-400 border-light-300 hover:border-light-400 border
          dark:border-primary-1000 dark:hover:border-primary-900
          dark:bg-primary-1000 dark:hover:bg-primary-900
          group rounded-2xl btn py-3.5 pr-7 flex items-center justify-between gap-2 font-nippo ${className}`}
        onClick={() => setShowCustomizer(!showCustomizer)}
        tabIndex={0}
      >
        <span
          className="w-5 h-5 rounded-full inline-block"
          style={{
            backgroundColor: colorSchemes[storedTheme as ThemeKeys].color,
          }}
        ></span>
        <h3 className="text-light-1000 group-hover:text-secondary text-[14px] tracking-wider leading-none dark:text-primary-700 dark:group-hover:text-primary-600 whitespace-nowrap !transition-colors !duration-300">
          {colorSchemes[storedTheme as ThemeKeys].name}
        </h3>
      </button>

      <nav ref={drawerRef} className={`${showCustomizer && '!right-0'} fixed h-screen -right-[450px] ease-fluid top-0 bottom-0 w-full max-w-[360px] will-change-transform transition-[right] duration-600 z-[51] p-1 pb-8 pr-0`}>
        <div
          className="absolute top-0 left-0 w-full rounded-t-3xl
            bg-light-400 border-light-400 border-b-light-600 text-secondary
            dark:bg-primary-1100 dark:border-primary/20 dark:border-b-primary/20 dark:text-primary-600
            border-2 text-center font-syne text-lg py-4 z-[51] m-1 mr-0 font-bold tracking-wider"
        >
          <span>Theme Preference</span>
          <button type="button" className="absolute z-[52] top-0 right-0 !transition-colors !duration-300 rounded-full px-4 h-full"
          onClick={() => setShowCustomizer(!showCustomizer)}>
            <IconClose width={1.5} className="text-light-primary cursor-pointer dark:text-primary-800 hover:text-secondary dark:hover:text-primary-700 !transition-colors !duration-300" />
          </button>
        </div>
        <div
          className="bg-light-300 dark:bg-primary-1100 border-light-400
          dark:border-white/10 relative perfect-scrollbar !size-full p-4 mt-6 py-12 shadow-[-23px_0_25px_0_rgba(0,0,0,0.1)] dark:shadow-[-43px_0_45px_0_rgba(0,0,0,0.6)] rounded-3xl border-2"
        >
          <div className="flex flex-col gap-4 items-center">
            <ColorUiWindow onThemeChange={handleThemeChange} />
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full rounded-b-4xl
            bg-light-400 border-light-500
            dark:bg-primary-1100 dark:border-white/10 dark:border-t-white/5
            border-2 py-4 z-[52] m-1 mr-0"
        ></div>
      </nav>
    </div>
  );
};

export default ThemeCustomizer;
