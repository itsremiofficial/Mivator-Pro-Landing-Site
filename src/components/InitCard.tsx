'use client';

import { SpotifyIcon } from 'hugeicons-react';
import { IconClock, IconPlusSquare, IconUser } from './Icon';
import { CardStack } from './NowPlayCard';
import { useMemo } from 'react';
import { ThemeName } from '../colorSchemes';

const CardStacked = () => {
  const themeNames: ThemeName[] = useMemo(
    () => [
      'mivatorblurple',
      'mivatorcoal',
      'mivatorhotpink',
      'mivatoremerald',
      'mivatorsilver',
      'mivatorgold',
      'mivatoraqua',
      'pastelpurple',
      'mivatorpeach',
      'pastelblue',
      'mivatorred',
      'mivatorplatinum',
      'pastelgreen',
      'pastelpink',
      'pastelyellow',
      'mivatorpink',
    ],
    []
  );

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
                  <IconUser className="size-5" width={2} /> Remi
                </div>
                <div className="flex items-center gap-2 font-nippo tracking-wider">
                  <IconClock className="size-5" width={2} /> 03:50
                </div>
              </div>
              <div className="text-3xl font-syne font-bold flex ml-1">In The Dust</div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2 font-nippo tracking-wider">
                  <IconPlusSquare className="size-5" width={2} /> Remi
                </div>
                <div className="flex items-center gap-2 font-nippo tracking-wider">
                  <SpotifyIcon size={24} /> Spotify
                </div>
              </div>
            </div>
          </>
        ),
      })),
    [themeNames]
  );
  return <CardStack items={CARDS} />;
};
export default CardStacked;
