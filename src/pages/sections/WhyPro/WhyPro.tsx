// import { IRootState } from '@/store';
// import { useMemo } from 'react';
// import { useSelector } from 'react-redux';

// const WhyPro = () => {
//   const themeConfig = useSelector(
//     (state: IRootState) => state.themeConfig,
//     (prev, next) => prev.theme === next.theme
//   );

//   const isDark = useMemo(() => themeConfig.theme === 'dark', [themeConfig.theme]);

//   return (
//     <div className="w-screen relative">
//       <div className="mx-auto max-w-7xl py-10">
//         <div className="relative isolate overflow-hidden dark:bg-primary-1100/50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//           <svg
//             viewBox="0 0 1024 1024"
//             className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
//             aria-hidden="true"
//           >
//             <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
//             <defs>
//               <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
//                 <stop stopColor={isDark ? `var(--color8)` : ``} />
//                 <stop offset="1" stopColor={isDark ? `var(--color8)` : ``} />
//               </radialGradient>
//             </defs>
//           </svg>
//           <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
//             <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Boost your productivity. Start using our app today.</h2>
//             <p className="mt-6 text-lg/8 text-pretty text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
//             <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//               <a
//                 href="#"
//                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//               >
//                 Get started
//               </a>
//               <a href="#" className="text-sm/6 font-semibold text-white">
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//           <div className="relative mt-16 h-80 lg:mt-8">
//             <img
//               className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
//               src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
//               alt="App screenshot"
//               width="1824"
//               height="1080"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto max-w-7xl py-10">
//         <div className="relative isolate overflow-hidden dark:bg-primary-1100/50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//           <svg
//             viewBox="0 0 1024 1024"
//             className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
//             aria-hidden="true"
//           >
//             <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
//             <defs>
//               <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
//                 <stop stopColor={isDark ? `var(--color8)` : ``} />
//                 <stop offset="1" stopColor={isDark ? `var(--color8)` : ``} />
//               </radialGradient>
//             </defs>
//           </svg>
//           <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
//             <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Boost your productivity. Start using our app today.</h2>
//             <p className="mt-6 text-lg/8 text-pretty text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
//             <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//               <a
//                 href="#"
//                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//               >
//                 Get started
//               </a>
//               <a href="#" className="text-sm/6 font-semibold text-white">
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//           <div className="relative mt-16 h-80 lg:mt-8">
//             <img
//               className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
//               src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
//               alt="App screenshot"
//               width="1824"
//               height="1080"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto max-w-7xl py-10">
//         <div className="relative isolate overflow-hidden dark:bg-primary-1100/50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//           <svg
//             viewBox="0 0 1024 1024"
//             className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
//             aria-hidden="true"
//           >
//             <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
//             <defs>
//               <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
//                 <stop stopColor={isDark ? `var(--color8)` : ``} />
//                 <stop offset="1" stopColor={isDark ? `var(--color8)` : ``} />
//               </radialGradient>
//             </defs>
//           </svg>
//           <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
//             <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Boost your productivity. Start using our app today.</h2>
//             <p className="mt-6 text-lg/8 text-pretty text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
//             <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//               <a
//                 href="#"
//                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//               >
//                 Get started
//               </a>
//               <a href="#" className="text-sm/6 font-semibold text-white">
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//           <div className="relative mt-16 h-80 lg:mt-8">
//             <img
//               className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
//               src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
//               alt="App screenshot"
//               width="1824"
//               height="1080"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyPro;

import React from 'react';
import { Compare } from '../ProFeatures/Compare';

const WhyPro = () => {
  return (
    <div>
      <section className="w-screen relative py-32 overflow-hidden">
        <div className="container px-4 mx-auto group/whypro">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 p-8">
              <h2 className="mb-6 text-6xl md:text-7xl font-extrabold font-syne tracking-px-n leading-tight text-primary-700">Custom Branding</h2>
              <p className="font-sans text-lg text-primary-600/60 leading-relaxed md:max-w-lg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
              </p>
            </div>
            <div className=" perspective-dramatic">
              <div
                className="relative p-4 border-2 rounded-3xl dark:bg-primary-1100 bg-neutral-100 border-neutral-200 dark:border-white/5 px-4
              transform-3d transition-all duration-500 rotate-x-12 scale-z-[0.2] -rotate-y-5 group-hover/whypro:rotate-x-0 group-hover/whypro:scale-z-1 group-hover/whypro:rotate-y-0"
              >
                <Compare
                  firstImage="/whypro/profile.png"
                  secondImage="/whypro/profilealt.png"
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="w-[500px] h-[694px]"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPro;
