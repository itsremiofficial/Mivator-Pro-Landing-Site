import Hero from '@Sections/Hero.js';
import MarqueeText from '@Components/MarqueeText.js';
import { MivatorFeatures } from '@Sections/FeaturesBento/FeaturesSection.js';
import useLocoScroll from '@Utils/useLocoScroll';
import { HowItWorks } from '@Sections/HowItWorks/HowItWorks';
import WhyPro from '@Sections/WhyPro/WhyPro';
import Footer from '@Sections/Footer/Footer';
import CTA from '@Sections/CTA';
import MivatorFooterText from '@Sections/Footer/MivatorText';
import SiteHeader from '@Layouts/SiteHeader';
import NeutralFeatures from '@/components/NeutralFeatures';
import BackgroundLines from '@/components/BackgroundLines';

const Home = () => {
  const { scrollToSection } = useLocoScroll('[data-scroll-container]');
  return (
    <>
      <div className="grain"></div>

      <SiteHeader handleScroll={scrollToSection} />
      <main id="home" data-scroll-container className="relative background flex flex-col items-center min-h-screen h-max">
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
