import useLocoScroll from "../hooks/useLocoScroll.js";
import BackgroundLines from "../components/BackgroundLines";
import Hero from "./sections/Hero.js";
const Home = () => {
  useLocoScroll(true, "[data-scroll-container]");

  return (
    <div>
      <div className="grain"></div>

      <main data-scroll-container className="background">
        <BackgroundLines />
        <Hero />
        {/* <MarqueeText /> */}
        {/* <ConnectedIcons /> */}
        {/* <FeaturesSection /> */}
        {/* <Bento /> */}
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </main>
    </div>
  );
};

export default Home;
