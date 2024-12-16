import React from 'react';

const WhyPro = () => {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg" alt="" className="w-full rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">Why Choose Us</span>
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">Make your customers happy by giving services.</h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPro;

// import React from 'react';

// const WhyPro = () => {
//   return (
//     <div className="w-screen relative">
//       <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
//         <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//           <svg
//             viewBox="0 0 1024 1024"
//             className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
//             aria-hidden="true"
//           >
//             <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
//             <defs>
//               <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
//                 <stop stopColor="#7775D6" />
//                 <stop offset="1" stopColor="#E935C1" />
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
