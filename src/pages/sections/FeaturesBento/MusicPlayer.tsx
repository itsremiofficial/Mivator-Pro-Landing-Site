import { InfiniteMovingCards } from '@Common/Cards/InfiniteScrolling';
import IconMusic from '@Icons/Features/IconMusic';

const MusicPlayer = () => {
  return (
    <div className="relative flex flex-col h-full">
      <div className="flex items-start justify-between grow">
        <div>
          <div className="feature-card-title text-3xl mb-2 font-medium tracking-wide leading-normal">Interactive Music Player</div>
          <p className="feature-card-subtitle text-balance">Enjoy a feature-rich music player with a sleek, modern UI designed for an immersive listening experience.</p>
        </div>
        <div className="mask mask-squircle w-max relative">
          <div className="p-6 size-max bg-gradient-to-bl from-secondary to-secondary dark:from-primary-1000/50 dark:to-primary/30 rounded-3xl">
            <IconMusic className="size-16 text-primary-600" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 antialiased">
        <InfiniteMovingCards direction="left" />
        <InfiniteMovingCards direction="right" />
      </div>
    </div>
  );
};

export default MusicPlayer;
