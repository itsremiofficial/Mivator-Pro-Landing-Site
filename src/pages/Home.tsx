import BackgroundLines from '@components/BackgroundLines';
import Hero from '@pages/sections/Hero.js';
import MarqueeText from '@components/MarqueeText.js';
import ConnectedIcons from '@components/ConnectedIcons.js';
import { FeaturesSection } from '@/pages/sections/FeaturesBento/FeaturesSection.js';
import { useState } from 'react';
import useLocoScroll from '@/utils/useLocoScroll';
import { HowItWorks } from './sections/HowItWorks/HowItWorks';
import WhyPro from './sections/WhyPro/WhyPro';
import Footer from './sections/Footer/Footer';
import CTA from './sections/CTA';
import { MivatorText } from './sections/Footer/MivatorText';
const Home = () => {
  const [startScroll, setStartScroll] = useState(true);
  useLocoScroll(startScroll, '[data-scroll-container]');
  return (
    <>
      <div className="grain"></div>

      <main data-scroll-container className="relative background flex flex-col items-center min-h-screen h-max">
        <BackgroundLines />
        <Hero />
        <MarqueeText />
        <FeaturesSection />
        <ConnectedIcons />
        <WhyPro />
        <HowItWorks />
        <CTA />
        <div className="relative flex items-center justify-center w-screen">
          <MivatorText text="MIVATOR" />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
