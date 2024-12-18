import { NowPlayingCard } from '@ThemedStacks/NowPlayingCard';
import { RankCard } from '@ThemedStacks/RankCard';

const CardsUi = () => {
  return (
    <div className="flex flex-col justify-between h-full gap-5">
      <div className="flex flex-col items-start justify-end">
        <div className="text-3xl feature-card-title leading-normal font-medium tracking-wide">
          <div className="relative whitespace-nowrap overflow-hidden">
            <div hoverstagger="title" className="relative inline-block">
              Modern Design Cards
            </div>
            <div hoverstagger="title" className="absolute inset-y-0">
              Modern Design Cards
            </div>
          </div>
        </div>
        <p className="feature-card-subtitle"> Code generated stunning cards effortlessly with dynamic, visually striking designs.</p>
      </div>
      <div className="h-32 w-[380px] xl:h-44 xl:w-[480px] relative mx-auto">
        <NowPlayingCard />
      </div>
      <div className="h-36 w-[380px] mt-5 xl:h-48 xl:w-[480px] relative mx-auto">
        <RankCard />
      </div>
    </div>
  );
};
export default CardsUi;
