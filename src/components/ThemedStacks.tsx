'use client';

import { Clock01Icon, Message02Icon, MessageMultiple01Icon, Mic01Icon, SpotifyIcon, UserIcon, VolumeHighIcon } from 'hugeicons-react';
import { CardStack } from '@components/Common/CardStack';
import { useMemo } from 'react';
import { getThemeNames, getThemeTitle, ThemeName} from '@/colorSchemes';

const themeNames = getThemeNames();
// NOW PLAYING CARDS
export const NowPlayingCard = () => {
  const CARDS = useMemo(
    () =>
      themeNames.slice(0, 7).map((theme, index) => ({
        id: index,
        themeKey: theme,
        content: (
          <>
            <div className="w-40 h-40 flex items-center justify-center overflow-hidden mask mask-squircle">
              <img className="object-cover w-full h-full" src="/public/inthedust.jpeg" alt="In The Dust" />
            </div>

            <div className="flex flex-col justify-between p-6 grow gap-4 rounded-4xl">
              <div className="flex justify-between">
                <div className="flex items-center gap-2 font-nippo tracking-wider">
                  <UserIcon className="size-5" /> Remi
                </div>
                <div className="flex items-center text-left w-24 gap-2 font-nippo tracking-wider">
                  <Clock01Icon className="size-5" /> 03:50
                </div>
              </div>
              <div className="text-3xl font-syne font-bold flex ml-1 whitespace-nowrap">In The Dust</div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2 font-nippo tracking-wider">
                  <Mic01Icon className="size-5" /> Richard Judge
                </div>
                <div className="flex items-center gap-2 font-nippo text-left w-24 tracking-wider">
                  <SpotifyIcon className="size-5" /> Spotify
                </div>
              </div>
            </div>
          </>
        ),
      })),
    [themeNames]
  );
  return <CardStack items={CARDS} speed={7.5} />;
};

// RANK CARDS
export const RankCard = () => {
  const CARDS = useMemo(
    () =>
      themeNames.slice(7, 14).map((theme, index) => ({
        id: index,
        themeKey: theme,
        content: (
          <div className="px-4 flex gap-6 justify-between w-full">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="size-24 overflow-hidden mask mask-squircle">
                <img className="object-cover w-full h-full" src="/public/avatar.avif" alt="In The Dust" />
              </div>
              <div className="font-mont text-xs uppercase">Level</div>
              <div className={`py-1 px-5 w-full rounded-xl leading-none tracking-widest font-mont text-2xl text-center font-extrabold bg-black/25`}>33</div>
            </div>

            <div className="flex flex-col grow justify-between">
              <div className="flex justify-between h-full w-full gap-2 py-1 grow rounded-4xl">
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold font-syne">Dark Soul</div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1 font-mont tracking-wider">
                        <Message02Icon className="size-6" />{' '}
                        <div className="uppercase font-mont tracking-widest text-[8px]">
                          text <br /> rank
                        </div>{' '}
                        <div className="text-2xl">02</div>
                      </div>
                      <div className="flex items-center gap-1 font-mont tracking-wider">
                        <VolumeHighIcon className="size-6" />{' '}
                        <div className="uppercase font-mont tracking-widest text-[8px]">
                          voice <br /> rank
                        </div>{' '}
                        <div className="text-2xl">02</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1 font-mont tracking-wider">
                        <MessageMultiple01Icon className="size-6" />{' '}
                        <div className="uppercase font-mont tracking-widest text-[8px]">
                          total <br /> msgs
                        </div>{' '}
                        <div className="text-2xl">02</div>
                      </div>
                      <div className="flex items-center gap-1 font-mont tracking-wider">
                        <VolumeHighIcon className="size-6" />{' '}
                        <div className="uppercase font-mont tracking-widest text-[8px]">
                          voice <br /> time
                        </div>{' '}
                        <div className="text-2xl">02</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: `var(--${theme}-1200)` }} className="text-7xl font-mont flex font-black leading-tight">
                  97<span className="text-xl pt-4 font-normal ">#</span>
                </div>
              </div>
              <div className="w-ful h-10">
                <div style={{ background: `var(--${theme}-1100)` }} className="size-full rounded-xl relative overflow-hidden">
                  <div style={{ background: `linear-gradient(90deg, var(--${theme}-900) 0%, var(--${theme}-600) 100%)` }} className="h-full w-1/2 absolute rounded-xl shadow-lg shadow-black/40"></div>
                  <span style={{ color: `var(--${theme}-1100)` }} className="absolute left-4 top-1/2 -translate-y-1/2 font-mont text-sm tracking-widest font-bold">
                    POINTS
                  </span>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mont text-sm tracking-widest font-bold">2840/4550</span>
                </div>
              </div>
            </div>
          </div>
        ),
      })),
    [themeNames]
  );
  return <CardStack items={CARDS} speed={9} />;
};

interface ColorUiWindowProps {
  onThemeChange: (themeKey: ThemeName) => void;
  className?: string;
}

export const ColorUiWindow: React.FC<ColorUiWindowProps> = ({ className, onThemeChange }) => {
  const storedTheme = localStorage.getItem('colorScheme');

  const handleThemeChange = (themeName: ThemeName) => {
    onThemeChange(themeName);
  };

  const windowCards = useMemo(
    () =>
      themeNames.map((themeKey, index) => {
        return (
          <div key={index}>
            <div
              className={`w-72 h-52 relative bg-light-500 border-light-100/10 dark:bg-primary-1400 rounded-3xl cursor-pointer overflow-hidden border-2 animate-border-opacity-animation duration-500 ${
                storedTheme === themeKey ? `!border-secondary dark:!border-primary border-opacity-100` : ''
              }`}
              onClick={() => handleThemeChange(themeKey)}
            >
              <div
                style={{ backgroundColor: `var(--${themeKey})` }}
                className="absolute !size-full opacity-0 hover:opacity-[0.15] transition-opacity duration-300 z-10 left-0 top-0 right-0 bottom-0"
              ></div>
              <div className="mockup-window relative overflow-hidden overflow-x-auto flex flex-col w-full rounded-2xl bg-base-300 left-6 top-6">
                <div className={`mockup-window-toolbar py-2 inline-flex w-full items-center pr-6 rounded-t-lg`} style={{ backgroundColor: `var(--${themeKey}-1100)` }}>
                  <div className="size-3 aspect-square rounded-full ml-3 mr-[0.1rem] bg-red-500"></div>
                  <div className="size-3 aspect-square rounded-full ml-1 mr-[0.1rem] bg-yellow-500"></div>
                  <div className="size-3 aspect-square rounded-full ml-1 mr-3 bg-green-500"></div>
                  <div
                    className="relative mx-6 inline-flex justify-center items-center h-5 w-4/5 text-ellipsis whitespace-nowrap rounded-md font-nippo font-light"
                    // style={{ color: color4, backgroundColor: color1 }}
                  >
                    {/* {themeObj.name} */}
                  </div>
                </div>
                <div className={`bg-base-200 flex`} style={{ backgroundColor: `var(--${themeKey}-1000)` }}>
                  <div className="w-16 h-36 flex flex-col items-center pt-4 gap-2" style={{ backgroundColor: `var(--${themeKey}-1200)` }}>
                    <div className="w-8 h-4 rounded-[0.2rem]" style={{ backgroundColor: `var(--${themeKey}-900)`, opacity: 1 }}></div>
                    <div className="w-8 h-4 rounded-[0.2rem]" style={{ backgroundColor: `var(--${themeKey}-900)`, opacity: 0.75 }}></div>
                    <div className="w-8 h-4 rounded-[0.2rem]" style={{ backgroundColor: `var(--${themeKey}-900)`, opacity: 0.5 }}></div>
                    <div className="w-8 h-4 rounded-[0.2rem]" style={{ backgroundColor: `var(--${themeKey}-900)`, opacity: 0.25 }}></div>
                    <div className="w-8 h-4 rounded-[0.2rem]" style={{ backgroundColor: `var(--${themeKey}-900)`, opacity: 0.1 }}></div>
                  </div>
                  <div className="flex flex-col justify-between p-4 pt-2 text-5xl font-bold font-syne w-4/5" style={{ color: `var(--${themeKey})` }}>
                    <span>Aa</span>
                    <div className="flex flex-col gap-2">
                      <div className="w-4/5 inline-flex items-center gap-2">
                        <div className="aspect-square size-5 rounded-full" style={{ backgroundColor: `var(--${themeKey})` }}></div>
                        <div className="w-4/5 h-5 rounded-md rounded-tl-none" style={{ backgroundColor: `var(--${themeKey})` }}></div>{' '}
                      </div>
                      <div className="w-full inline-flex items-center gap-2">
                        <div className="aspect-square size-5 rounded-full" style={{ backgroundColor: `var(--${themeKey})`, opacity: 0.3 }}></div>
                        <div className="w-4/5 h-5 rounded-md rounded-tl-none" style={{ backgroundColor: `var(--${themeKey})`, opacity: 0.3 }}></div>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`absolute flex items-center font-nippo text-base border-t-2 bottom-0 left-0 w-full pl-4 py-2 animate-border-opacity-animation duration-500
                          border-t-light-100/10 bg-light-400
                          dark:bg-primary-1400 dark:border-t-light-100/10
                          ${storedTheme === themeKey ? `dark:!border-t-primary !border-t-secondary` : ''} `}
                style={{
                  color: `var(--${themeKey})`,
                  boxShadow: '0 -5px 10px -5px rgba(0, 0, 0, 0.3)',
                }}
              >
                {getThemeTitle(themeKey)}
                <span
                  className={`ml-2 px-2 py-1 rounded-full opacity-0 font-nippo text-xs leading-none
                              text-neu-100 font-medium dark:font-normal
                              dark:text-white dark:bg-primary-900
                              bg-secondary text-light-100 transition-all duration-500 ${storedTheme && storedTheme === themeKey && 'opacity-100'}`}
                >
                  Current
                </span>
              </div>
            </div>
          </div>
        );
      }),
    [themeNames, storedTheme]
  );

  return (
    <>
      {windowCards.map((window, i) => (
        <div key={i} className={className}>
          {window}
        </div>
      ))}
    </>
  );
};
