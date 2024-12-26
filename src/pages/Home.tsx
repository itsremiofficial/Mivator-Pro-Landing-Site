import Hero from '@Sections/Hero.js';
import MarqueeText from '@Components/MarqueeText.js';
import { MivatorFeatures } from '@Sections/FeaturesBento/FeaturesSection.js';
import { HowItWorks } from '@Sections/HowItWorks/HowItWorks';
import WhyPro from '@Sections/WhyPro/WhyPro';
import CTA from '@Sections/CTA';
import MivatorFooterText from '@Sections/Footer/MivatorText';
import NeutralFeatures from '@/components/NeutralFeatures';
import BackgroundLines from '@/components/BackgroundLines';
import useLocoScroll from '@/utils/useLocoScroll';
import Footer from '@Sections/Footer/Footer';
import SiteHeader from '@/layouts/SiteHeader';
import { useEffect, useState } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Home = () => {
  const { scrollToSection, scrollProgress } = useLocoScroll('[data-scroll-container]');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(scrollProgress > 10);
    };

    handleScroll();

  }, [scrollProgress]);

  const handleScrollToTop = () => {
    scrollToSection('#home');
  };

  return (
    <>
      <div className="grain"></div>
      <ScrollToTopButton isVisible={isVisible} onClick={handleScrollToTop} />
      <SiteHeader handleScroll={scrollToSection} />
      <main data-scroll-container id="home" className="relative background flex flex-col items-center min-h-screen h-max">
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
        <Footer handleScroll={scrollToSection} />
      </main>
    </>
  );
};

export default Home;
