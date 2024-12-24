import { InfiniteMovingCards } from '@Common/Cards/InfiniteScrolling';
import IconMusic from '@Icons/Features/IconMusic';

const MusicPlayer = () => {
  return (
    <div className="relative flex flex-col h-full gap-2 xl:gap-4">
      <div className="flex items-start justify-between grow">
        <div>
          <div className="feature-card-title mb-2 font-extrabold tracking-wide leading-normal">Interactive Music Player</div>
          <p className="feature-card-subtitle text-balance">Enjoy music player with a sleek and modern UI.</p>
        </div>
        <div className="mask mask-squircle w-max relative">
          <div className="p-6 size-max bg-gradient-to-bl from-secondary to-secondary dark:from-primary-1000/50 dark:to-primary/30 rounded-3xl">
            <IconMusic className="md:size-8 2xl:size-16 text-primary-600" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 xl:gap-4 antialiased">
        <InfiniteMovingCards direction="left" />
        <InfiniteMovingCards direction="right" />
      </div>
    </div>
  );
};

export default MusicPlayer;
