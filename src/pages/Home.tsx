import BackgroundLines from '@Components/BackgroundLines';
import Hero from '@Sections/Hero.js';
import MarqueeText from '@Components/MarqueeText.js';
import ConnectedIcons from '@Components/ConnectedIcons.js';
import { MivatorFeatures } from '@Sections/FeaturesBento/FeaturesSection.js';
import useLocoScroll from '@Utils/useLocoScroll';
import { HowItWorks } from '@Sections/HowItWorks/HowItWorks';
import WhyPro from '@Sections/WhyPro/WhyPro';
import Footer from '@Sections/Footer/Footer';
import CTA from '@Sections/CTA';
import MivatorFooterText from '@Sections/Footer/MivatorText';
import SiteHeader from '@Layouts/SiteHeader';

const Home = () => {
  const { scrollToSection } = useLocoScroll('[data-scroll-container]');
  return (
    <>
      <div className="grain"></div>

      <SiteHeader handleScroll={scrollToSection} />
      <main id="home" data-scroll-container className="relative background flex flex-col items-center min-h-screen h-max">
        <BackgroundLines />
        <Hero />
        <MarqueeText />
        <MivatorFeatures />
        <ConnectedIcons />
        <WhyPro />
        <HowItWorks />
        <CTA />
        <MivatorFooterText />
        <Footer />
      </main>
    </>
  );
};

export default Home;
