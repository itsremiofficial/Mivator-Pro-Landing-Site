import BackgroundLines from '@components/BackgroundLines';
import Hero from '@pages/sections/Hero.js';
import MarqueeText from '@components/MarqueeText.js';
import ConnectedIcons from '@components/ConnectedIcons.js';
import { FeaturesSection } from '@/pages/sections/FeaturesBento/FeaturesSection.js';
import { useState } from 'react';
import useLocoScroll from '@/utils/useLocoScroll';
import { HowItWorks } from './sections/HowItWorks/HowItWorks';
import WhyPro from './sections/WhyPro/WhyPro';
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
        <HowItWorks />
        <WhyPro />
      </main>
    </div>
  );
};

export default Home;
