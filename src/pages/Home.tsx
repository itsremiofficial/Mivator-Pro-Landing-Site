import BackgroundLines from '@components/BackgroundLines';
import Hero from '@pages/sections/Hero.js';
import MarqueeText from '@components/MarqueeText.js';
import ConnectedIcons from '@components/ConnectedIcons.js';
import { FeaturesSection } from '@/pages/sections/FeaturesBento/FeaturesSection.js';
import { useState } from 'react';
import useLocoScroll from '@/utils/useLocoScroll';
import { Compare } from './sections/ProFeatures/Compare';
const Home = () => {
  const [startScroll, setStartScroll] = useState(true);
  useLocoScroll(startScroll, '[data-scroll-container]');
  return (
    <div>
      <div className="grain"></div>

      <main data-scroll-container className="background flex flex-col items-center">
        <BackgroundLines />
        <Hero />
        <MarqueeText />
        <ConnectedIcons />
        <FeaturesSection />
        <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
