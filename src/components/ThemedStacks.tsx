'use client';

import { Clock01Icon, Message02Icon, MessageMultiple01Icon, Mic01Icon, SpotifyIcon, UserIcon, VolumeHighIcon } from 'hugeicons-react';
import { CardStack } from '@Common/CardStack';
import { useMemo } from 'react';
import { getThemeNames, getThemeTitle, ThemeName, constants } from '@/colorSchemes';
import githubPagesBase from '@/assets/CONSTANTS';

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
              <img className="object-cover w-full h-full" src="/inthedust.jpeg" alt="In The Dust" />
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
    [themeNames],
  );
  return <CardStack items={CARDS} speed={7.5} containerClass="absolute size-full rounded-[3rem] flex items-center !p-4" />;
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
                <img className="object-cover w-full h-full" src={`${githubPagesBase}avatar.avif`} alt="In The Dust" />
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
    [themeNames],
  );
  return <CardStack items={CARDS} speed={9} containerClass="absolute size-full rounded-[3rem] flex items-center !p-4" />;
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
    [themeNames, storedTheme],
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

interface LogoThemesProps {
  onLogoClick: (themeKey: ThemeName) => void;
  className?: string;
}

export const LogoThemes: React.FC<LogoThemesProps> = ({ className, onLogoClick }) => {
  const handleThemeChange = (themeName: ThemeName) => {
    onLogoClick(themeName);
  };

  const mivatorLogos = useMemo(
    () =>
      themeNames.slice(7, 14).map((themeKey, index) => ({
        id: index,
        themeKey: themeKey,
        content: (
          <div key={index}>
            <svg className={`mivator_main_logo ${className}`} viewBox="0 0 350 350" onClick={() => handleThemeChange(themeKey)}>
              <g className="mivator" transform="translate(-75, -75)">
                <path
                  style={{ fill: `var(--${themeKey})` }}
                  className="blur-2xl absolute top-0 bottom-0 left-0 right-0 z-[-2] opacity-0"
                  d="M250.1,397.1c-95.1-27.2-128-77.9-128-77.9c-19.9-97.3-1.9-208.8-1.9-208.8l45.8,51.8
                    c35.2-38.4,84.1-59.4,84.1-59.4s47.4,20.5,82.6,58.9l46.3-51.4c0,0,19,111.5-0.9,208.8C378.1,319.2,345.3,369.9,250.1,397.1
                    L250.1,397.1z"
                />
                <path
                  style={{ fill: `var(--${themeKey}-1200)` }}
                  d="M250.1,397.1c-95.1-27.2-128-77.9-128-77.9c-19.9-97.3-1.9-208.8-1.9-208.8l45.8,51.8
                    c35.2-38.4,84.1-59.4,84.1-59.4s47.4,20.5,82.6,58.9l46.3-51.4c0,0,19,111.5-0.9,208.8C378.1,319.2,345.3,369.9,250.1,397.1
                    L250.1,397.1z"
                />
                <path
                  style={{ fill: `var(--${themeKey}-1100)` }}
                  d="M329.5,170.6
                    c-14,14-27.9,27.9-42.9,40.8c-11.8,10.1-24.3,19.4-36.4,29.1c-0.2,0.1-1.9,1.3-1.9,1.5c-10.7-74.6,1.9-129.9,1.9-129.9
                    c10.6,5.1,48.1,24.4,76.5,55.4L329.5,170.6L329.5,170.6z"
                />
                <g id="m_main">
                  <path
                    style={{ fill: `var(--${themeKey})` }}
                    d="M369.5,316.9c-3.3,4.3-11.2,13.7-25.3,24.9c-17.4,13.8-47.8,33.1-94.1,46.7c-29-8.5-51.7-19.2-68.9-29.5
                      c-10.3-6.1-18.6-12-25.1-17.2c-15.3-12.2-23.4-22.3-26.1-25.9c-0.4-2.2-0.9-4.5-1.3-6.8c-8.5-47-8.3-96.4-6.6-130.3
                      c1-19.9,2.6-36.8,4-49.1l14.8,16.8c18.6,23.6,53.9,62.4,109.1,99.2c0,0,0,0,0,0c56.4-26.1,116.9-87.7,116.9-87.7
                      C375.6,244.8,371.4,299.7,369.5,316.9L369.5,316.9z"
                  />
                </g>
                <g id="inner_eyes_left">
                  <path
                    className="fill-white"
                    d="M249.1,308.5v79.6c-23.3-6.9-42.6-15.3-58.1-23.6c-17.4-27.2-23.1-60.2-24.7-83.7
                      c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8c24,27.4,51.4,46.4,66.7,55.9
                      c6.8,4.2,11.2,6.5,11.8,6.8L249.1,308.5L249.1,308.5z"
                  />
                  <path
                    style={{ fill: `var(--${themeKey}-600)` }}
                    d="M249.1,308.5v79.6c-23.3-6.9-42.6-15.3-58.1-23.6c-17.4-27.2-23.1-60.2-24.7-83.7
                      c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8c24,27.4,51.4,46.4,66.7,55.9
                      c6.8,4.2,11.2,6.5,11.8,6.8L249.1,308.5L249.1,308.5z"
                  />
                </g>
                <path
                  id="inner_eyes_right"
                  className="fill-white"
                  d="M331.8,242.1
                    c0.7,8.6,1.3,22.6,0.1,38.7c-1.7,24-7.5,57.9-25.8,85.4c-15.2,7.9-33.8,15.7-56,22.3c-0.4-0.1-0.7-0.2-1-0.3v-79.6l0.9-0.5
                    l0.9-0.5C252.9,306.5,296.6,283.4,331.8,242.1z M377.7,179c-1.2-20.6-3-38.1-4.4-49.7l-34.8,38.6c-39.9,45.9-86,76.1-88.4,77.6
                    c0,0-0.1,0-0.1,0c56.4-26.1,116.9-87.7,116.9-87.7c8.7,86.9,4.5,141.8,2.6,159c0.3-0.4,0.6-0.7,0.8-1c0.2-1,0.4-2.1,0.6-3.1
                    c0.1-0.7,0.3-1.4,0.4-2.2c0.1-0.7,0.3-1.4,0.4-2.1l0,0C380,261.8,379.6,212.7,377.7,179z"
                />
                <path
                  style={{ fill: `var(--${themeKey}-1200)` }}
                  d="M338.7,231.6L338.7,231.6
                    l-1.3-9.2l-5.7,7.3c-3.3,4.3-6.8,8.4-10.3,12.3c-2.7,2.9-5.4,5.8-8.1,8.5c-2.4,2.5-4.9,4.8-7.3,7.1
                    c-15.2,14.2-30.3,25.2-41.4,32.5c-0.7,0.5-1.4,0.9-2.1,1.4c-2.9,1.9-5.5,3.4-7.6,4.7c-1.9,1.2-3.5,2.1-4.8,2.8
                    c-0.3,0.2-0.6,0.4-0.9,0.5c-9.3-5.2-51.5-30.1-82.5-69.8l-5.7-7.3l-1.3,9.2c-0.1,0.9-3.1,21.6-1.2,49.6c1.4,21.1,6,49.7,19,75.5
                    c0,0,0,0,0,0c1.2,0.8,2.2,2.2,3.5,3c0.1,0.1,0.2,0.1,0.3,0.2c1.2,0.7,2.4,1.4,3.6,2.1c0.3,0.2,0.7,0.4,1,0.6c1.6,0.9,6,3.8,5.2,2
                    c-17.4-27.2-23.1-60.2-24.7-83.7c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8
                    c1.1,1.3,2.2,2.5,3.4,3.8c-1.5,18.8-2.4,73.9,38.6,80.1c15.7,0,25.2-12.7,30.3-24.6c0,0,0,0,0,0c3.6,2.1,5.8,3.2,6.2,3.5l1.8,1
                    l0.9-0.5l0.9-0.5c0.4-0.2,2.8-1.5,6.6-3.7c5.1,11.9,14.6,24.6,30.3,24.6c41.2-6.3,40.1-61.7,38.6-80.3c0,0,0,0,0,0
                    c1.8-2,3.6-4,5.3-6c0.7,8.6,1.3,22.6,0.1,38.7c-1.6,23.8-7.4,57.4-25.4,84.7l-2.7,2.1l1.2,3.1c3-1.6,4-0.2,6.8-1.7l7.3-3.5l0.7-7
                    c13.7-26.3,18.5-55.7,20-77.4C341.8,253.2,338.8,232.4,338.7,231.6z"
                />
                <path
                  style={{ fill: `var(${constants.pro2})` }}
                  d="M319.2,255.8
                    c-0.5,16.5-4.1,64.1-30.9,64.1c-11.9,0-19.1-9.1-23.4-20.5c0.9-0.6,1.8-1.1,2.8-1.8c11.7-7.6,28.2-19.4,44.8-35.2
                    C314.7,260.3,316.9,258.1,319.2,255.8L319.2,255.8z"
                />
                <path
                  style={{ fill: `var(${constants.pro})` }}
                  d="M312.4,262.4
                    c-1.4,13.4-6.8,48.2-27,48.2c-8.3,0-14-5.6-17.8-13C279.4,290,295.9,278.2,312.4,262.4L312.4,262.4z"
                />
                <path
                  style={{ fill: `var(${constants.pro2})` }}
                  d="M179.5,256.1
                    c0.5,16.5,4.1,64.1,30.9,64.1c11.9,0,19.1-9.1,23.4-20.5c-0.9-0.6-1.8-1.1-2.8-1.8c-11.7-7.6-28.2-19.4-44.8-35.2
                    C184,260.6,181.7,258.4,179.5,256.1L179.5,256.1z"
                />
                <path
                  style={{ fill: `var(${constants.pro})` }}
                  d="M186.2,262.7c1.4,13.4,6.8,48.2,27,48.2
                    c8.3,0,14-5.6,17.8-13C219.3,290.3,202.8,278.4,186.2,262.7L186.2,262.7z"
                />
                <g id="m_overlay">
                  <path
                    style={{ fill: `var(--${themeKey}-1000)`, opacity: 0.7 }}
                    d="M250,256.1V299c-0.3,0.2-0.6,0.4-0.9,0.5c-9.3-5.2-51.5-30.1-82.5-69.8l-5.7-7.3l-1.3,9.2
                      c-0.1,0.9-3.1,21.6-1.2,49.6c1.4,21.1,6,49.7,19,75.5c-8.6-5.3-15.6-10.4-21.3-14.9c-15.3-12.2-23.4-22.3-26.1-25.9
                      c-0.4-2.2-0.9-4.5-1.3-6.8c-2.3-21.5-3.2-41.9-3.4-60.5l16.5,21.4l-16.2-48.4c1.3-42.9,6.3-70.8,6.3-70.8
                      c8,12,46.4,48.5,46.4,48.5l12.7,36.5l-1.3-25.3C214.3,235.2,250,256.1,250,256.1L250,256.1z"
                  />
                </g>
              </g>
            </svg>
          </div>
        ),
      })),
    [themeNames],
  );

  return <CardStack items={mivatorLogos} speed={12} noBg offset={5} containerClass="absolute inset-0 flex items-center justify-center rounded-[3rem]" />;
};
