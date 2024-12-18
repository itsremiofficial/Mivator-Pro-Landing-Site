import BackgroundLines from '@Components/BackgroundLines';
import Hero from '@Sections/Hero.js';
import MarqueeText from '@Components/MarqueeText.js';
import ConnectedIcons from '@Components/ConnectedIcons.js';
import { FeaturesSection } from '@Sections/FeaturesBento/FeaturesSection.js';
import { useState } from 'react';
import useLocoScroll from '@Utils/useLocoScroll';
import { HowItWorks } from '@Sections/HowItWorks/HowItWorks';
import WhyPro from '@Sections/WhyPro/WhyPro';
import Footer from '@Sections/Footer/Footer';
import CTA from '@Sections/CTA';
import MivatorFooterText from '@Sections/Footer/MivatorText';

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
        <div id="features">
          <FeaturesSection />
        </div>
        <ConnectedIcons />
        <div id="why-pro">
          <WhyPro />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <CTA />
        <MivatorFooterText />
        <Footer />
      </main>
    </>
  );
};

export default Home;
