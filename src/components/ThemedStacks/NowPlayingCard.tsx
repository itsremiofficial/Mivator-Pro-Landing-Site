import { getThemeNames } from '@/colorSchemes';
import { useMemo } from 'react';
import { CardStack } from '@Common/CardStack';
import { Clock01Icon, Mic01Icon, SpotifyIcon, UserIcon } from 'hugeicons-react';
import githubPagesBase from '@/assets/CONSTANTS';
export const NowPlayingCard = () => {
  const themeNames = getThemeNames().slice(0, 4);

  const CARDS = useMemo(
    () =>
      themeNames.map((theme, index) => ({
        id: index,
        themeKey: theme,
        content: <NowPlayingContent />,
      })),
    [themeNames],
  );

  return <CardStack items={CARDS} speed={9} offset={4} scaleFactor={0.07} containerClass="absolute size-full rounded-4xl xl:rounded-[3rem] p-3 xl:p-4 text-white" />;
};

const NowPlayingContent = () => (
  <div className="relative flex h-full items-center justify-between gap-2 ">
    <AlbumCover />
    <SongInfo />
  </div>
);

const AlbumCover = () => (
  <div className="xl:size-36 size-24 flex items-center justify-center overflow-hidden mask mask-squircle">
    <img className="object-cover w-full h-full" src={`/${githubPagesBase}inthedust.jpeg`} alt="In The Dust" />
  </div>
);

const SongInfo = () => (
  <div className="flex flex-col justify-between h-full py-3 grow xl:p-4 rounded-4xl">
    <UserInfo />
    <SongTitle />
    <ArtistInfo />
  </div>
);

const UserInfo = () => (
  <div className="flex justify-between font-nippo tracking-wider xl:font-semibold text-left text-[12px]">
    <div className="flex items-center gap-1 xl:gap-2">
      <UserIcon className="size-[14px] xl:size-5" /> Remi
    </div>
    <div className="flex items-center gap-1 xl:gap-2 w-20">
      <Clock01Icon className="size-[14px] xl:size-5" /> 03:50
    </div>
  </div>
);

const SongTitle = () => <div className="text-xl xl:text-3xl font-syne font-bold flex ml-1 whitespace-nowrap">In The Dust</div>;

const ArtistInfo = () => (
  <div className="flex justify-between font-nippo font-medium tracking-wider xl:font-semibold text-left text-[12px]">
    <div className="flex items-center gap-1 xl:gap-2">
      <Mic01Icon className="size-[14px] xl:size-5" /> Richard
    </div>
    <div className="flex items-center gap-1 xl:gap-2 w-20">
      <SpotifyIcon className="size-[14px] xl:size-5" /> Spotify
    </div>
  </div>
);
