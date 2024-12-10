import { getThemeNames, getThemeTitle, ThemeName } from '@/colorSchemes';
import { useMemo } from 'react';

interface ColorUiWindowProps {
  onThemeChange: (themeKey: ThemeName) => void;
  className?: string;
}

export const ColorUiWindow: React.FC<ColorUiWindowProps> = ({ className, onThemeChange }) => {
  const storedTheme = localStorage.getItem('colorScheme');
  const themeNames = getThemeNames();

  const windowCards = useMemo(
    () => themeNames.map((themeKey, index) => <ThemeCard key={index} themeKey={themeKey} storedTheme={storedTheme} onThemeChange={onThemeChange} className={className} />),
    [themeNames, storedTheme, onThemeChange, className]
  );

  return <>{windowCards}</>;
};

interface ThemeCardProps {
  themeKey: ThemeName;
  storedTheme: string | null;
  onThemeChange: (themeKey: ThemeName) => void;
  className?: string;
}

const ThemeCard = ({ themeKey, storedTheme, onThemeChange, className }: ThemeCardProps) => (
  <div className={className}>
    <div
      className={`w-72 h-52 relative bg-light-500 border-light-100/10 dark:bg-primary-1400 rounded-3xl cursor-pointer overflow-hidden border-2 animate-border-opacity-animation duration-500 ${
        storedTheme === themeKey ? `!border-secondary dark:!border-primary border-opacity-100` : ''
      }`}
      onClick={() => onThemeChange(themeKey)}
    >
      <ThemeOverlay themeKey={themeKey} />
      <MockupWindow themeKey={themeKey} />
      <ThemeFooter themeKey={themeKey} storedTheme={storedTheme} />
    </div>
  </div>
);

const ThemeOverlay = ({ themeKey }: { themeKey: ThemeName }) => (
  <div style={{ backgroundColor: `var(--${themeKey})` }} className="absolute !size-full opacity-0 hover:opacity-[0.08] transition-opacity duration-300 z-10 left-0 top-0 right-0 bottom-0" />
);

const MockupWindow = ({ themeKey }: { themeKey: ThemeName }) => (
  <div className="mockup-window relative overflow-hidden overflow-x-auto flex flex-col w-full rounded-2xl bg-base-300 left-6 top-6">
    <WindowToolbar themeKey={themeKey} />
    <WindowContent themeKey={themeKey} />
  </div>
);

const WindowToolbar = ({ themeKey }: { themeKey: ThemeName }) => (
  <div className="mockup-window-toolbar py-2 inline-flex w-full items-center pr-6 rounded-t-lg" style={{ backgroundColor: `var(--${themeKey}-1100)` }}>
    <WindowControls />
  </div>
);

const WindowControls = () => (
  <>
    <div className="size-3 aspect-square rounded-full ml-3 mr-[0.1rem] bg-red-500" />
    <div className="size-3 aspect-square rounded-full ml-1 mr-[0.1rem] bg-yellow-500" />
    <div className="size-3 aspect-square rounded-full ml-1 mr-3 bg-green-500" />
  </>
);

const WindowContent = ({ themeKey }: { themeKey: ThemeName }) => (
  <div className="bg-base-200 flex" style={{ backgroundColor: `var(--${themeKey}-1000)` }}>
    <Sidebar themeKey={themeKey} />
    <MainContent themeKey={themeKey} />
  </div>
);

const Sidebar = ({ themeKey }: { themeKey: ThemeName }) => (
  <div className="w-16 h-36 flex flex-col items-center pt-4 gap-2" style={{ backgroundColor: `var(--${themeKey}-1200)` }}>
    {[1, 0.75, 0.5, 0.25, 0.1].map((opacity, i) => (
      <div
        key={i}
        className="w-8 h-4 rounded-[0.2rem]"
        style={{
          backgroundColor: `var(--${themeKey}-900)`,
          opacity,
        }}
      />
    ))}
  </div>
);

const MainContent = ({ themeKey }: { themeKey: ThemeName }) => (
  <div className="flex flex-col justify-between p-4 pt-2 text-5xl font-bold font-syne w-4/5" style={{ color: `var(--${themeKey})` }}>
    <span>Aa</span>
    <ChatBubbles themeKey={themeKey} />
  </div>
);

const ChatBubbles = ({ themeKey }: { themeKey: ThemeName }) => (
  <div className="flex flex-col gap-2">
    {[1, 0.3].map((opacity, i) => (
      <div key={i} className="w-4/5 inline-flex items-center gap-2">
        <div
          className="aspect-square size-5 rounded-full"
          style={{
            backgroundColor: `var(--${themeKey})`,
            opacity,
          }}
        />
        <div
          className="w-4/5 h-5 rounded-md rounded-tl-none"
          style={{
            backgroundColor: `var(--${themeKey})`,
            opacity,
          }}
        />
      </div>
    ))}
  </div>
);

const ThemeFooter = ({ themeKey, storedTheme }: { themeKey: ThemeName; storedTheme: string | null }) => (
  <div
    className={`absolute flex items-center font-nippo text-base border-t-2 bottom-0 left-0 w-full pl-4 py-2 animate-border-opacity-animation duration-500
                border-t-light-100/5 bg-light-400
                dark:bg-primary-1400 
                ${storedTheme === themeKey ? `dark:!border-t-primary !border-t-secondary` : ''}`}
    style={{
      color: `var(--${themeKey})`,
      boxShadow: '0 -5px 10px -5px rgba(0, 0, 0, 0.3)',
    }}
  >
    {getThemeTitle(themeKey)}
    <CurrentThemeLabel isCurrentTheme={storedTheme === themeKey} />
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
