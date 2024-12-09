'use client';

import { Clock01Icon, Message02Icon, MessageMultiple01Icon, Mic01Icon, SpotifyIcon, UserIcon, VolumeHighIcon } from 'hugeicons-react';
import { CardStack } from './ELements/CardStack';
import { useMemo } from 'react';
import { getThemeNames } from '../colorSchemes';

// NOW PLAYING CARDS
export const NowPlayingCard = () => {
  const themeNames = getThemeNames();
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
  const themeNames = getThemeNames();

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
