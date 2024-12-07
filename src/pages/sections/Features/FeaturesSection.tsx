import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { features } from './FeaturesData';
import { FeatureCard } from './FeatureCard';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import AnimatedButton from '../../../components/AnimatedButton';
import SplitType from 'split-type';
import gsap from 'gsap';
export const FeaturesSection: React.FC = () => {
  //   useEffect(() => {
  //     const handleMouseMove = (e: MouseEvent) => {
  //       const cards = document.querySelectorAll('.group');
  //       cards.forEach((card) => {
  //         const rect = card.getBoundingClientRect();
  //         const x = ((e.clientX - rect.left) / rect.width) * 100;
  //         const y = ((e.clientY - rect.top) / rect.height) * 100;
  //         (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
  //         (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
  //       });
  //     };

  //     window.addEventListener('mousemove', handleMouseMove);
  //     return () => window.removeEventListener('mousemove', handleMouseMove);
  //   }, []);

  const linkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const linkElement = linkRef.current;

    if (!linkElement) return;

    const textElements = linkElement.querySelectorAll("[hoverstagger='text']");

    textElements.forEach((el) => {
      new SplitType(el as HTMLElement, {
        types: 'words,chars',
        tagName: 'span',
      });
    });

    const tl = gsap.timeline({ paused: true });

    const [text1, text2] = textElements;
    if (text1 && text2) {
      tl.to(text1.querySelectorAll('.char'), {
        yPercent: -120,
        duration: 0.3,
        stagger: { amount: 0.2 },
      }).from(
        text2.querySelectorAll('.char'),
        {
          yPercent: 200,
          duration: 0.3,
          stagger: { amount: 0.2 },
        },
        0
      );
    }

    const handleMouseEnter = () => tl.restart();
    const handleMouseLeave = () => tl.reverse();

    linkElement.addEventListener('mouseenter', handleMouseEnter);
    linkElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      linkElement.removeEventListener('mouseenter', handleMouseEnter);
      linkElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 w-full" key={'FeaturesSection'}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="features_title">Why Mivator?</h2>
          <p className="text-secondary dark:text-primary-700/40 max-w-2xl mx-auto text-lg">Experience the next generation of innovation</p>
        </motion.div>
        {/* BENTO */}
        <div className="text-white py-8 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Over 9,000 Components */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-light-600 dark:bg-primary-1100 p-6 rounded-4xl text-center relative feature-card overflow-hidden group">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 feature_card_mousetracker mix-blend-overlay z-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 * 0.1 }}
                ref={linkRef}
              />
              <div className="flex flex-col relative z-[1]">
                <div className="flex justify-center pb-12">
                  <svg className="h-72" viewBox="0 0 3955 3132">
                    <defs>
                      <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={themeConfig.theme === 'dark' ? `var(--color-primary)` : 'var(--color-secondary)'} />
                        <stop offset="50%" stopColor={themeConfig.theme === 'dark' ? `var(--color-primary-900)` : 'var(--color-light-900)'} />
                        <stop offset="75%" stopColor={themeConfig.theme === 'dark' ? `var(--color-primary-1000)` : 'var(--color-light-700)'} />
                        <stop offset="100%" stopColor={themeConfig.theme === 'dark' ? `var(--color-primary-1100)` : 'var(--color-light-600)'} />
                      </linearGradient>
                    </defs>
                    <defs>
                      <linearGradient id="gradient-fill-hover" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={themeConfig.theme === 'dark' ? `var(--color-primary)` : 'var(--color-secondary)'} />
                        <stop offset="50%" stopColor={themeConfig.theme === 'dark' ? `var(--color-primary-900)` : 'var(--color-light-900)'} />
                        <stop offset="75%" stopColor={themeConfig.theme === 'dark' ? `var(--color-primary-1000)` : 'var(--color-light-700)'} />
                        <stop offset="100%" stopColor={themeConfig.theme === 'dark' ? `var(--color-primary-1100)` : 'var(--color-light-600)'} />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient-fill)"
                      d="M3495.88 3131.49C3426.69 3131.49 3361.83 3131.49 3283.99 3131.49C3098.06 3131.49 2955.36 2949.88 2951.04 2768.26C2912.12 1976.94 2873.2 1181.3 2834.28 389.985C2821.31 160.805 3046.17 0.812256 3258.05 0.812256C3348.86 0.812256 3439.66 0.812256 3530.47 0.812256C3742.35 0.812256 3967.21 160.805 3954.24 389.985C3915.32 1181.3 3876.4 1976.94 3837.48 2768.26C3833.16 2949.88 3690.46 3131.49 3495.88 3131.49ZM3331.56 1847.22C3331.56 2106.67 3335.88 2361.79 3335.88 2616.92C3335.88 2651.51 3357.5 2686.1 3392.1 2690.43C3392.1 2690.43 3396.42 2690.43 3400.75 2690.43C3431.02 2686.1 3452.64 2651.51 3452.64 2616.92C3456.96 2314.23 3456.96 2007.21 3461.28 1704.52C3418.04 1752.09 3374.8 1799.65 3331.56 1847.22ZM3322.91 515.385C3322.91 839.695 3327.24 1168.33 3327.24 1492.64C3374.8 1445.08 3418.04 1397.51 3461.28 1349.94C3465.61 1068.87 3465.61 792.13 3465.61 515.385C3469.93 480.792 3435.34 446.199 3400.75 446.199C3361.83 446.199 3322.91 472.144 3322.91 515.385Z"
                    />
                    <path
                      fill="url(#gradient-fill)"
                      d="M2083.61 3131.49C2014.42 3131.49 1949.56 3131.49 1871.72 3131.49C1685.79 3131.49 1543.09 2949.88 1538.76 2768.26C1499.85 1976.94 1460.93 1181.3 1422.01 389.985C1409.04 160.805 1633.9 0.812256 1845.78 0.812256C1936.59 0.812256 2027.39 0.812256 2118.2 0.812256C2330.08 0.812256 2554.94 160.805 2541.96 389.985C2503.05 1181.3 2464.13 1976.94 2425.21 2768.26C2420.89 2949.88 2278.19 3131.49 2083.61 3131.49ZM1919.29 1847.22C1919.29 2106.67 1923.61 2361.79 1923.61 2616.92C1923.61 2651.51 1945.23 2686.1 1979.83 2690.43C1979.83 2690.43 1984.15 2690.43 1988.47 2690.43C2018.74 2686.1 2040.36 2651.51 2040.36 2616.92C2044.69 2314.23 2044.69 2007.21 2049.01 1704.52C2005.77 1752.09 1962.53 1799.65 1919.29 1847.22ZM1910.64 515.385C1910.64 839.695 1914.96 1168.33 1914.96 1492.64C1962.53 1445.08 2005.77 1397.51 2049.01 1349.94C2053.34 1068.87 2053.34 792.13 2053.34 515.385C2057.66 480.792 2023.07 446.199 1988.47 446.199C1949.56 446.199 1910.64 472.144 1910.64 515.385Z"
                    />
                    <path
                      fill="url(#gradient-fill)"
                      d="M636.945 515.385C636.945 476.468 602.352 446.199 567.759 446.199C528.841 446.199 494.248 476.468 494.248 515.385C494.248 908.882 498.572 1306.7 502.896 1700.2C563.434 1700.2 623.972 1700.2 684.51 1700.2C887.745 1700.2 1056.39 1881.81 1043.41 2085.05C1030.44 2314.23 1021.79 2539.08 1008.82 2768.26C1004.5 2949.88 861.8 3131.49 675.862 3131.49C598.028 3131.49 533.165 3131.49 463.979 3131.49C269.393 3131.49 126.696 2949.88 122.372 2768.26C118.048 2681.78 113.724 2599.62 109.4 2513.14C100.751 2379.09 161.289 2283.96 303.986 2283.96C316.958 2283.96 334.255 2283.96 351.552 2283.96C459.655 2275.31 507.221 2348.82 507.221 2448.28C507.221 2504.49 507.221 2560.7 507.221 2616.92C507.221 2651.51 528.841 2690.43 567.759 2690.43C606.676 2690.43 628.296 2655.83 623.972 2616.92C623.972 2482.87 628.297 2348.82 628.297 2219.1C628.297 2180.18 606.676 2141.26 567.759 2145.59C489.924 2145.59 407.765 2145.59 329.931 2149.91C165.614 2154.23 83.4549 2059.1 79.1308 1899.11C53.1859 1367.24 27.2411 835.371 1.29623 303.502C-11.6762 95.9433 118.048 5.13657 312.634 5.13657C481.276 0.812225 649.917 0.812225 818.559 5.13657C1013.14 5.13657 1142.87 95.9433 1129.9 303.502C1112.6 640.785 1099.63 978.068 1082.33 1311.03C1078.01 1453.72 995.848 1535.88 853.152 1527.23C706.131 1527.23 628.297 1440.75 632.621 1298.05C636.945 1038.61 636.945 779.157 636.945 515.385Z"
                    />
                  </svg>
                </div>
                <div className="absolute z-[2] inset-0 m-auto flex flex-col items-center justify-end">
                  <div className="text-6xl font-extrabold leading-none text-secondary dark:text-primary-600 font-syne overflow-hidden h-14">
                    <div className="relative overflow-hidden z-[1]">
                      <div hoverstagger="text" className="relative inline-block">
                        Commands
                      </div>
                      <div hoverstagger="text" className="absolute inset-y-0">
                        Commands
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-light-800 dark:text-primary-800 text-lg">...and counting</p>
                </div>
              </div>
            </div>

            {/* Fully Optimized for Tokens Studio */}
            <div className=" bg-light-600 dark:bg-primary-1100 p-6 rounded-4xl shadow-md flex flex-col items-center justify-center text-center ">
              <div className="flex flex-col relative">
                <div className="flex">
                  <svg className="h-72" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 2466 3136">
                    <path
                      fill="url(#gradient-fill)"
                      d="M875.2,471.3c0.6-3.2,0.8-6.4,0.3-9.6c-1.4-8.2-6.2-11.1-16.9-11.1c-3,0-6.1,0.5-9.1,1.6c-9.7,3.4-16.9,11.6-19.7,21.5
		C709.9,907,602.7,1340.4,504,1778h129.7C714.3,1310.1,819.2,746.5,875.2,471.3z M1152.6,2232.1h-112.4
		c-13,229.2-21.6,458.4-34.6,687.5c-4.3,116.8-56.2,216.2-194.6,216.2c-138.4,0-185.9-103.8-181.6-224.9c0-229.2,0-458.4,0-687.5
		c-108.1,0-220.5,0-328.6,4.3c-142.7,4.3-211.9-82.1-216.2-216.2c-4.3-60.5-4.3-121.1-8.6-181.6c0-25.9,0-56.2,8.6-82.2
		C205.6,1228.9,352.7,714.3,521.3,204C564.5,61.4,689.9-3.5,832.6,5.1c8.6,0,21.6,0,34.6,0c164.3,0,276.7,82.2,263.8,255.1
		c-21.6,510.2-47.6,1020.5-69.2,1526.4h112.4c21.3,0,38.2,17.9,36.9,39.1l-21.6,371.4C1188.4,2216.8,1172.2,2232.1,1152.6,2232.1z"
                    />
                    <path
                      fill="url(#gradient-fill)"
                      d="M2357.5,3040.7c0,47.9-38.8,86.7-86.7,86.7c-183.3,0.1-555.1,0.7-637,4.3c-177.1,4.3-246.2-120.9-250.5-280.7
			c-13-246.2-25.9-492.3-38.9-738.5c-8.6-103.6,38.9-207.3,129.6-254.8c133.9-86.4,272.1-168.4,410.3-246.1
			c4.3-367.1,4.3-729.8,4.3-1096.9c4.3-38.9-34.5-69.1-69.1-69.1c-38.9,0-73.4,30.2-73.4,69.1c0,276.4,4.3,552.8,4.3,829.1
			c4.3,142.5-73.4,224.6-215.9,224.6c-142.5,8.6-224.6-69.1-228.9-211.6c-13-323.9-30.2-643.5-47.5-967.3
			c-13-229.1,212.1-389,423.9-388.7c95.5,0,191.1,0,286.6,0c206.7,1.2,433.9,160.6,420.9,388.6c-21.6,444.8-47.5,885.3-69.1,1330.1
			c0,99.3-60.5,198.6-151.1,246.1c-138.2,73.4-276.4,151.1-410.3,228.9c0,164.1,0,328.2,4.3,492.3h507.4c47.9,0,86.7,38.8,86.7,86.7
			V3040.7z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 m-auto flex flex-col items-center justify-end">
                  <span className="text-2xl font-extrabold leading-none text-secondary dark:text-primary-600 font-syne">Events</span>
                  <p className="mt-2 text-light-800 dark:text-primary-800 text-lg">...and counting</p>
                </div>
              </div>
            </div>

            {/* Built for Designers & Developers */}
            <div className=" bg-light-600 dark:bg-primary-1100 p-6 rounded-4xl shadow-md flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-purple-600 rounded-full mb-4"></div>
              <h3 className="text-lg font-semibold">Built for both Designers & Developers</h3>
            </div>

            {/* Thousands of Icons */}
            <div className=" bg-light-600 dark:bg-primary-1100 p-6 rounded-4xl shadow-md flex flex-col items-center justify-center text-center">
              <div className="bg-purple-600 p-4 rounded-full mb-4">
                <span className="text-white text-4xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold">Thousands of high-quality Icons</h3>
            </div>

            {/* Dark Mode Components */}
            <div className=" bg-light-600 dark:bg-primary-1100 p-6 rounded-4xl shadow-md flex flex-col items-center justify-center text-center">
              <div className="bg-gray-700 w-full h-32 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white text-xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold">Dark Mode Components</h3>
            </div>

            {/* Variables and Tokens */}
            <div className="col-span-1 md:col-span-2  bg-light-600 dark:bg-primary-1100 p-6 rounded-4xl shadow-md text-center">
              <h3 className="text-lg font-semibold mb-4">Variables. Design Tokens. Styles.</h3>
              <div className="bg-gray-700 rounded-full h-2 relative w-full">
                <div className="absolute top-0 left-0 bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-400">bg-primary · text-body</p>
            </div>

            {/* Desktop, Tablet, Mobile */}
            <div className="bg-light-600 dark:bg-primary-1100 p-6 rounded-4xl shadow-md flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold mb-4">Desktop. Tablet. Mobile.</h3>
              <p className="text-gray-400 text-sm">"I'm surprised you had the courage."</p>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {features.map((feature, index) => {
                        return (
                            <div data-scroll data-scroll-speed={index <= 3 ? (index % 0.2) * 4 : (index % 1) * 3} data-scroll-direction="vertical" data-scroll-delay={index * 0.1} key={index}>
                                <FeatureCard key={index + 6} {...feature} index={index} />
                            </div>
                        );
                    })}
                </div> */}
      </div>
    </section>
  );
};
