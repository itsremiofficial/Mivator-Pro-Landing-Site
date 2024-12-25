import Hero from '@Sections/Hero.js';
import MarqueeText from '@Components/MarqueeText.js';
import { MivatorFeatures } from '@Sections/FeaturesBento/FeaturesSection.js';
import { HowItWorks } from '@Sections/HowItWorks/HowItWorks';
import WhyPro from '@Sections/WhyPro/WhyPro';
import CTA from '@Sections/CTA';
import MivatorFooterText from '@Sections/Footer/MivatorText';
import NeutralFeatures from '@/components/NeutralFeatures';
import BackgroundLines from '@/components/BackgroundLines';

const Home = () => {
  return (
    <>
      <div className="grain"></div>
      <main id="home" className="relative background flex flex-col items-center min-h-screen h-max">
        {/* <TestGrid /> */}
        <BackgroundLines />
        <Hero />
        <MarqueeText />
        <MivatorFeatures />
        <NeutralFeatures />
        <WhyPro />
        <HowItWorks />
        <CTA />
        <MivatorFooterText />
      </main>
    </>
  );
};

export default Home;
