import { getThemeNames, getThemeTitle, ThemeName } from '@/colorSchemes';
import { IRootState } from '@/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

interface ColorUiWindowProps {
  onThemeChange: (themeKey: ThemeName) => void;
  className?: string;
}

const ColorUiWindow: React.FC<ColorUiWindowProps> = ({ className, onThemeChange }) => {
  const { theme, colorScheme } = useSelector((state: IRootState) => state.themeConfig);

  const themeNames = getThemeNames();

  const windowCards = useMemo(
    () => themeNames.map((themeKey, index) => <ThemeCard key={index} themeKey={themeKey} isColorScheme={colorScheme} isTheme={theme} onThemeChange={onThemeChange} className={className} />),
    [themeNames, colorScheme, onThemeChange, className]
  );

  return <>{windowCards}</>;
};

interface ThemeCardProps {
  themeKey: ThemeName;
  isTheme: string;
  isColorScheme: string | null;
  onThemeChange: (themeKey: ThemeName) => void;
  className?: string;
}

const ThemeCard = ({ themeKey, isColorScheme, onThemeChange, className, isTheme }: ThemeCardProps) => (
  <div className={className}>
    <div
      className={`w-72 h-52 relative bg-light-100 border-light-600 dark:border-primary-1000/70 dark:bg-primary-1200 rounded-3xl cursor-pointer overflow-hidden border-2 animate-border-opacity-animation duration-500 ${
        isColorScheme === themeKey ? `!border-secondary dark:!border-primary border-opacity-100` : ''
      }`}
      style={{ borderColor: `${isTheme === 'light' ? `var(--${themeKey}-500)` : `var(--${themeKey}-1200)`}` }}
      onClick={() => onThemeChange(themeKey)}
    >
      <ThemeOverlay themeKey={themeKey} isTheme={isTheme} />
      <MockupWindow themeKey={themeKey} isTheme={isTheme} />
      <ThemeFooter themeKey={themeKey} isColorScheme={isColorScheme} isTheme={isTheme} />
    </div>
  </div>
);
// @ts-ignore
const ThemeOverlay = ({ themeKey, isTheme }: { themeKey: ThemeName; isTheme: string }) => (
  <div style={{ backgroundColor: `var(--${themeKey}-900)` }} className="absolute !size-full opacity-0 hover:opacity-[0.08] transition-opacity duration-300 z-10 left-0 top-0 right-0 bottom-0" />
);

const MockupWindow = ({ themeKey, isTheme }: { themeKey: ThemeName; isTheme: string }) => (
  <div className="mockup-window relative overflow-hidden overflow-x-auto flex flex-col w-full rounded-xl left-4 top-4">
    <WindowToolbar themeKey={themeKey} isTheme={isTheme} />
    <WindowContent themeKey={themeKey} isTheme={isTheme} />
  </div>
);
// @ts-ignore
const WindowToolbar = ({ themeKey, isTheme }: { themeKey: ThemeName; isTheme?: string }) => (
  <div
    className="mockup-window-toolbar py-2 inline-flex w-full items-center pr-6 rounded-t-lg"
    style={{ backgroundColor: `${themeKey === 'mivatorsilver' ? `var(--${themeKey}-400)` : `var(--${themeKey}-1100)`}` }}
  >
    <WindowControls />
  </div>
);

const WindowControls = () => (
  <>
    <div className="size-2.5 aspect-square rounded-full ml-3 mr-[0.1rem] bg-red-500" />
    <div className="size-2.5 aspect-square rounded-full ml-1 mr-[0.1rem] bg-yellow-500" />
    <div className="size-2.5 aspect-square rounded-full ml-1 mr-3 bg-green-500" />
  </>
);

const WindowContent = ({ themeKey, isTheme }: { themeKey: ThemeName; isTheme: string }) => (
  <div className="flex" style={{ backgroundColor: `${themeKey === 'mivatorsilver' ? `var(--${themeKey}-100)` : `var(--${themeKey}-1000)`}` }}>
    <Sidebar themeKey={themeKey} />
    <MainContent themeKey={themeKey} isTheme={isTheme} />
  </div>
);

const Sidebar = ({ themeKey }: { themeKey: ThemeName }) => (
  <div className="w-16 h-36 flex flex-col items-center pt-4 gap-2" style={{ backgroundColor: `${themeKey === 'mivatorsilver' ? `var(--${themeKey}-600)` : `var(--${themeKey}-1200)`}` }}>
    {[1, 0.75, 0.5, 0.25, 0.1].map((opacity, i) => (
      <div
        key={i}
        className="w-8 h-4 rounded-[0.2rem]"
        style={{
          backgroundColor: `${themeKey === 'mivatorsilver' ? `var(--${themeKey}-1200)` : `var(--${themeKey}-900)`}`,
          opacity,
        }}
      />
    ))}
  </div>
);

const MainContent = ({ themeKey, isTheme }: { themeKey: ThemeName; isTheme: string }) => (
  <div className="flex flex-col justify-between p-4 pt-2 text-5xl font-bold font-syne w-4/5" style={{ color: `${themeKey === 'mivatorsilver' ? `var(--${themeKey}-1200)` : `var(--${themeKey})`}` }}>
    <span>Aa</span>
    <ChatBubbles themeKey={themeKey} isTheme={isTheme} />
  </div>
);
// @ts-ignore
const ChatBubbles = ({ themeKey, isTheme }: { themeKey: ThemeName; isTheme: string }) => (
  <div className="flex flex-col gap-2">
    {[1, 0.3].map((opacity, i) => (
      <div key={i} className="w-4/5 inline-flex items-center gap-2">
        <div
          className="aspect-square size-5 rounded-full"
          style={{
            backgroundColor: `${themeKey === 'mivatorsilver' ? `var(--${themeKey}-1100)` : `var(--${themeKey})`}`,
            opacity,
          }}
        />
        <div
          className="w-4/5 h-5 rounded-md rounded-tl-none"
          style={{
            backgroundColor: `${themeKey === 'mivatorsilver' ? `var(--${themeKey}-1100)` : `var(--${themeKey})`}`,
            opacity,
          }}
        />
      </div>
    ))}
  </div>
);

const ThemeFooter = ({ themeKey, isColorScheme, isTheme }: { isTheme: string; themeKey: ThemeName; isColorScheme: string | null }) => (
  <div
    className={`absolute flex items-center font-nippo font-medium text-base border-t-2 bottom-0 left-0 w-full pl-4 py-2 animate-border-opacity-animation duration-500
                bg-light-100
                dark:bg-primary-1400 
                ${isColorScheme === themeKey ? `dark:!border-t-primary !border-t-secondary` : ''}`}
    style={{
      borderTopColor: `${isTheme === 'light' ? `var(--${themeKey}-500)` : `var(--${themeKey}-1200)`}`,
      color: `${isTheme === 'light' ? `var(--${themeKey}-1100)` : `var(--${themeKey})`}`,
      boxShadow: '0 -5px 10px -5px rgba(0, 0, 0, 0.3)',
    }}
  >
    {getThemeTitle(themeKey)}
    <CurrentThemeLabel isCurrentTheme={isColorScheme === themeKey} />
  </div>
);

const CurrentThemeLabel = ({ isCurrentTheme }: { isCurrentTheme: boolean }) => (
  <span
    className={`ml-2 px-2 py-1 rounded-full opacity-0 font-nippo text-xs leading-none
                text-neu-100 font-medium dark:font-normal
                dark:text-white dark:bg-primary-900
                bg-secondary text-light-100 transition-all duration-500 
                ${isCurrentTheme && 'opacity-100'}`}
  >
    Current
  </span>
);

export default ColorUiWindow;
