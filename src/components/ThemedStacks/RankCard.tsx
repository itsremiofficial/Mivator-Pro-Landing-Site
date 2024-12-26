import { getThemeNames } from '@/colorSchemes';
import { ReactNode, useMemo } from 'react';
import { CardStack } from '@Common/CardStack';
import { Message02Icon, MessageMultiple01Icon, VolumeHighIcon } from 'hugeicons-react';

export const RankCard = () => {
  const themeNames = getThemeNames().slice(5, 10);

  const CARDS = useMemo(
    () =>
      themeNames.map((theme, index) => ({
        id: index,
        themeKey: theme,
        content: <RankCardContent key={index} theme={theme} />,
      })),
    [themeNames]
  );

  return <CardStack items={CARDS} speed={5} offset={4} scaleFactor={0.07} containerClass="absolute size-full rounded-4xl xl:rounded-[3rem] flex items-center text-white !p-6" />;
};

interface RankCardContentProps {
  theme: string;
}

const RankCardContent = ({ theme }: RankCardContentProps) => (
  <div className="flex gap-2 xl:gap-4 justify-between w-full">
    <ProfileSection />
    <StatsSection theme={theme} />
  </div>
);

const ProfileSection = () => (
  <div className="flex flex-col items-center justify-center">
    <Avatar />
    <LevelIndicator />
  </div>
);

const Avatar = () => (
  <div className="size-16 xl:size-24 overflow-hidden mask mask-squircle">
    <img className="object-cover w-full h-full" src="/avatar.avif" alt="User Avatar" />
  </div>
);

const LevelIndicator = () => (
  <>
    <div className="font-mont text-[10px] font-extrabold tracking-widest leading-[1.6] xl:text-xs uppercase">Level</div>
    <div className="py-1 w-full rounded-lg xl:rounded-xl leading-none tracking-widest font-mont xl:text-2xl text-center font-extrabold bg-black/25">33</div>
  </>
);

const StatsSection = ({ theme }: RankCardContentProps) => (
  <div className="flex flex-col grow justify-between">
    <div className="flex justify-between h-full w-full gap-2 pb-1 grow">
      <StatsContent />
      <RankNumber theme={theme} />
    </div>
    <ProgressBar theme={theme} />
  </div>
);

const StatsContent = () => (
  <div className="flex flex-col gap-1">
    <div className="xl:text-3xl text-xl font-bold font-syne whitespace-nowrap">EnvoGod</div>
    <StatRows />
  </div>
);

const StatRows = () => (
  <div className="flex flex-col gap-1">
    <div className="flex gap-4">
      <StatItem icon={<Message02Icon className="size-4 xl:size-5" />} label="text rank" value="02" />
      <StatItem icon={<VolumeHighIcon className="size-4 xl:size-5" />} label="voice rank" value="02" />
    </div>
    <div className="flex gap-4">
      <StatItem icon={<MessageMultiple01Icon className="size-4 xl:size-5" />} label="total msgs" value="02" />
      <StatItem icon={<VolumeHighIcon className="size-4 xl:size-5" />} label="voice time" value="2D 9H" />
    </div>
  </div>
);

interface StatItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

const StatItem = ({ icon, label, value }: StatItemProps) => (
  <div className="flex items-center gap-1 xl:gap-2 font-mont tracking-wider">
    {icon}
    <div className="uppercase flex flex-col justify-center gap-1 font-mont tracking-widest leading-none text-[6px] xl:text-[9px]">
      {label.split(' ').map((word, index) => (
        <span key={index}>
          {word}
          <br />
        </span>
      ))}
    </div>
    <div className="xl:text-xl whitespace-nowrap font-semibold">{value}</div>
  </div>
);

const RankNumber = ({ theme }: RankCardContentProps) => (
  <div style={{ color: `var(--${theme}-1200)` }} className="absolute right-2 top-5 xl:right-5 text-4xl xl:text-6xl font-mont flex font-black leading-[0.8]">
    97<span className="text-xl font-normal">#</span>
  </div>
);

const ProgressBar = ({ theme }: RankCardContentProps) => (
  <div className="w-full h-7.5 xl:h-10 overflow-hidden rounded-lg xl:rounded-xl">
    <div style={{ background: `var(--${theme}-1100)` }} className="size-full relative">
      <div style={{ background: `linear-gradient(90deg, var(--${theme}-900) 0%, var(--${theme}-600) 100%)` }} className="h-full w-1/2 absolute shadow-lg shadow-black/40 rounded-lg xl:rounded-r-xl" />
      <ProgressLabel theme={theme} />
    </div>
  </div>
);

const ProgressLabel = ({ theme }: RankCardContentProps) => (
  <div className="px-2 xl:px-4 flex justify-between absolute top-1/2 -translate-y-1/2 w-full font-mont text-[10px] xl:text-sm tracking-widest font-bold">
    <span style={{ color: `var(--${theme}-1100)` }}>POINTS</span>
    <span>2840/4550</span>
  </div>
);
