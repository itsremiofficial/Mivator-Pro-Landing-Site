import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import IconFast from '@icon/Features/IconFast';
import IconModify from '@icon/Features/IconModify';
import IconCompatible from '@icon/Features/IconCompatible';
import IconUi from '@icon/Features/IconUi';
import IconFeatures from '@icon/Features/IconFeatures';
import IconInput from '@icon/Features/IconInput';

const ConnectedIcons = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const refShadow = useRef<SVGPathElement>(null);
  const svgSection = useRef<HTMLDivElement>(null);

  const storedTheme = localStorage.getItem('colorScheme');

  useEffect(() => {
    const svg = svgRef.current;
    const shadow = refShadow.current;
    const section = svgSection.current;
    if (!svg || !section) return;

    const gradients = [
      { id: 'longleft', delay: 0 },
      { id: 'longcenter', delay: 0.2 },
      { id: 'longright', delay: 0.4 },
      { id: 'shortleft', delay: 0.6 },
      { id: 'shortcenter', delay: 0.8 },
      { id: 'shortright', delay: 1.0 },
    ];

    gradients.forEach(({ id }) => {
      const animateGradient = (gradientID: string) => {
        const gradient = svg.querySelector(`#${gradientID}`);
        if (!gradient) return;

        const firstStop = gradient.children[0] as SVGStopElement;

        gsap.to(firstStop, {
          scrollTrigger: {
            trigger: section,
            start: 'top 100%',
            end: 'bottom 70%',
            onUpdate: (self) => {
              const invertedProgress = 1 - self.progress;
              gsap.set(firstStop, { attr: { offset: invertedProgress } });
            },
          },
        });
        gsap.to(shadow, {
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 90%',
            onUpdate: (self) => {
              const opacityProgress = self.progress;
              gsap.set(shadow, { opacity: opacityProgress - 0.2 });
            },
            scrub: 2,
          },
        });
      };

      animateGradient(id);
    });
  }, []);

  return (
    <div ref={svgSection} className="h-screen flex justify-center items-center px-4 iconscontainer">
      {/* Container */}
      <div className="relative w-full h-[850px] max-w-5xl z-[1] flex flex-col between">
        {/* Central Icon */}
        <div className="relative flex flex-col items-center">
          <svg version="1.1" className="mivator_main_logo -top-14 relative z-[1]" viewBox="0 0 500 500" width={320}>
            <g className="mivator">
              <path
                className="fill-secondary dark:fill-primary blur-2xl absolute top-0 bottom-0 left-0 right-0 z-[-2] opacity-0"
                ref={refShadow}
                d="M250.1,397.1c-95.1-27.2-128-77.9-128-77.9c-19.9-97.3-1.9-208.8-1.9-208.8l45.8,51.8
				c35.2-38.4,84.1-59.4,84.1-59.4s47.4,20.5,82.6,58.9l46.3-51.4c0,0,19,111.5-0.9,208.8C378.1,319.2,345.3,369.9,250.1,397.1
				L250.1,397.1z"
              />
              <path
                className="logo_bg"
                d="M250.1,397.1c-95.1-27.2-128-77.9-128-77.9c-19.9-97.3-1.9-208.8-1.9-208.8l45.8,51.8
				c35.2-38.4,84.1-59.4,84.1-59.4s47.4,20.5,82.6,58.9l46.3-51.4c0,0,19,111.5-0.9,208.8C378.1,319.2,345.3,369.9,250.1,397.1
				L250.1,397.1z"
              />
              <path
                id="cap_overlay"
                className="logo_cap"
                d="M329.5,170.6
				c-14,14-27.9,27.9-42.9,40.8c-11.8,10.1-24.3,19.4-36.4,29.1c-0.2,0.1-1.9,1.3-1.9,1.5c-10.7-74.6,1.9-129.9,1.9-129.9
				c10.6,5.1,48.1,24.4,76.5,55.4L329.5,170.6L329.5,170.6z"
              />
              <g id="m_main">
                <path
                  className="dark:fill-primary fill-light-700"
                  d="M369.5,316.9c-3.3,4.3-11.2,13.7-25.3,24.9c-17.4,13.8-47.8,33.1-94.1,46.7c-29-8.5-51.7-19.2-68.9-29.5
					c-10.3-6.1-18.6-12-25.1-17.2c-15.3-12.2-23.4-22.3-26.1-25.9c-0.4-2.2-0.9-4.5-1.3-6.8c-8.5-47-8.3-96.4-6.6-130.3
					c1-19.9,2.6-36.8,4-49.1l14.8,16.8c18.6,23.6,53.9,62.4,109.1,99.2c0,0,0,0,0,0c56.4-26.1,116.9-87.7,116.9-87.7
					C375.6,244.8,371.4,299.7,369.5,316.9L369.5,316.9z"
                />
              </g>
              <g id="inner_eyes_left">
                <path
                  className="fill-white"
                  d="M249.1,308.5v79.6c-23.3-6.9-42.6-15.3-58.1-23.6c-17.4-27.2-23.1-60.2-24.7-83.7
					c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8c24,27.4,51.4,46.4,66.7,55.9
					c6.8,4.2,11.2,6.5,11.8,6.8L249.1,308.5L249.1,308.5z"
                />
                <path
                  className="dark:fill-primary/50 fill-light-600"
                  d="M249.1,308.5v79.6c-23.3-6.9-42.6-15.3-58.1-23.6c-17.4-27.2-23.1-60.2-24.7-83.7
					c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8c24,27.4,51.4,46.4,66.7,55.9
					c6.8,4.2,11.2,6.5,11.8,6.8L249.1,308.5L249.1,308.5z"
                />
              </g>
              <path
                id="inner_eyes_right"
                className="fill-white"
                d="M331.8,242.1
				c0.7,8.6,1.3,22.6,0.1,38.7c-1.7,24-7.5,57.9-25.8,85.4c-15.2,7.9-33.8,15.7-56,22.3c-0.4-0.1-0.7-0.2-1-0.3v-79.6l0.9-0.5
				l0.9-0.5C252.9,306.5,296.6,283.4,331.8,242.1z M377.7,179c-1.2-20.6-3-38.1-4.4-49.7l-34.8,38.6c-39.9,45.9-86,76.1-88.4,77.6
				c0,0-0.1,0-0.1,0c56.4-26.1,116.9-87.7,116.9-87.7c8.7,86.9,4.5,141.8,2.6,159c0.3-0.4,0.6-0.7,0.8-1c0.2-1,0.4-2.1,0.6-3.1
				c0.1-0.7,0.3-1.4,0.4-2.2c0.1-0.7,0.3-1.4,0.4-2.1l0,0C380,261.8,379.6,212.7,377.7,179z"
              />
              <path
                id="inner_eyes_bg"
                className="logo_bg"
                d="M338.7,231.6L338.7,231.6
				l-1.3-9.2l-5.7,7.3c-3.3,4.3-6.8,8.4-10.3,12.3c-2.7,2.9-5.4,5.8-8.1,8.5c-2.4,2.5-4.9,4.8-7.3,7.1
				c-15.2,14.2-30.3,25.2-41.4,32.5c-0.7,0.5-1.4,0.9-2.1,1.4c-2.9,1.9-5.5,3.4-7.6,4.7c-1.9,1.2-3.5,2.1-4.8,2.8
				c-0.3,0.2-0.6,0.4-0.9,0.5c-9.3-5.2-51.5-30.1-82.5-69.8l-5.7-7.3l-1.3,9.2c-0.1,0.9-3.1,21.6-1.2,49.6c1.4,21.1,6,49.7,19,75.5
				c0,0,0,0,0,0c1.2,0.8,2.2,2.2,3.5,3c0.1,0.1,0.2,0.1,0.3,0.2c1.2,0.7,2.4,1.4,3.6,2.1c0.3,0.2,0.7,0.4,1,0.6c1.6,0.9,6,3.8,5.2,2
				c-17.4-27.2-23.1-60.2-24.7-83.7c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8
				c1.1,1.3,2.2,2.5,3.4,3.8c-1.5,18.8-2.4,73.9,38.6,80.1c15.7,0,25.2-12.7,30.3-24.6c0,0,0,0,0,0c3.6,2.1,5.8,3.2,6.2,3.5l1.8,1
				l0.9-0.5l0.9-0.5c0.4-0.2,2.8-1.5,6.6-3.7c5.1,11.9,14.6,24.6,30.3,24.6c41.2-6.3,40.1-61.7,38.6-80.3c0,0,0,0,0,0
				c1.8-2,3.6-4,5.3-6c0.7,8.6,1.3,22.6,0.1,38.7c-1.6,23.8-7.4,57.4-25.4,84.7l-2.7,2.1l1.2,3.1c3-1.6,4-0.2,6.8-1.7l7.3-3.5l0.7-7
				c13.7-26.3,18.5-55.7,20-77.4C341.8,253.2,338.8,232.4,338.7,231.6z"
              />
              <path
                id="eyeback"
                className="logo_eyebg"
                d="M319.2,255.8
				c-0.5,16.5-4.1,64.1-30.9,64.1c-11.9,0-19.1-9.1-23.4-20.5c0.9-0.6,1.8-1.1,2.8-1.8c11.7-7.6,28.2-19.4,44.8-35.2
				C314.7,260.3,316.9,258.1,319.2,255.8L319.2,255.8z"
              />
              <path
                id="eyefront"
                className="logo_eyefg"
                d="M312.4,262.4
				c-1.4,13.4-6.8,48.2-27,48.2c-8.3,0-14-5.6-17.8-13C279.4,290,295.9,278.2,312.4,262.4L312.4,262.4z"
              />
              <path
                id="eyeback"
                className="logo_eyebg"
                d="M179.5,256.1
				c0.5,16.5,4.1,64.1,30.9,64.1c11.9,0,19.1-9.1,23.4-20.5c-0.9-0.6-1.8-1.1-2.8-1.8c-11.7-7.6-28.2-19.4-44.8-35.2
				C184,260.6,181.7,258.4,179.5,256.1L179.5,256.1z"
              />
              <path
                id="eyefront"
                className="logo_eyefg"
                d="M186.2,262.7c1.4,13.4,6.8,48.2,27,48.2
				c8.3,0,14-5.6,17.8-13C219.3,290.3,202.8,278.4,186.2,262.7L186.2,262.7z"
              />
              <g id="m_overlay">
                <path
                  className="fill-light-800 dark:fill-primary-800"
                  d="M250,256.1V299c-0.3,0.2-0.6,0.4-0.9,0.5c-9.3-5.2-51.5-30.1-82.5-69.8l-5.7-7.3l-1.3,9.2
					c-0.1,0.9-3.1,21.6-1.2,49.6c1.4,21.1,6,49.7,19,75.5c-8.6-5.3-15.6-10.4-21.3-14.9c-15.3-12.2-23.4-22.3-26.1-25.9
					c-0.4-2.2-0.9-4.5-1.3-6.8c-2.3-21.5-3.2-41.9-3.4-60.5l16.5,21.4l-16.2-48.4c1.3-42.9,6.3-70.8,6.3-70.8
					c8,12,46.4,48.5,46.4,48.5l12.7,36.5l-1.3-25.3C214.3,235.2,250,256.1,250,256.1L250,256.1z"
                />
              </g>
            </g>
          </svg>
        </div>

        {/* Connecting Lines */}
        <svg ref={svgRef} viewBox="0 0 750 800" className="connected-feature absolute top-0 z-[0] left-1/2 transform -translate-x-1/2 pointer-events-none w-[830px]">
          <defs>
            {/* Gradient Definitions */}
            <linearGradient id="shortleft" gradientUnits="userSpaceOnUse" x1="-26.4174" y1="310.0242" x2="275.9459" y2="7.6609">
              <stop offset="1000" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'white' : 'var(--color13)'}` }} />
              <stop offset="0.6" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'var(--color1200)' : 'var(--color8)'}` }} />
            </linearGradient>
            <linearGradient id="shortcenter" gradientUnits="userSpaceOnUse" x1="648.642" y1="345.8121" x2="435.8853" y2="-22.6933">
              <stop offset="1000" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'white' : 'var(--color13)'}` }} />
              <stop offset="0.6" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'var(--color1200)' : 'var(--color8)'}` }} />
            </linearGradient>
            <linearGradient id="shortright" gradientUnits="userSpaceOnUse" x1="237.3168" y1="336.8375" x2="237.3168" y2="27.17">
              <stop offset="1000" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'white' : 'var(--color13)'}` }} />
              <stop offset="0.6" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'var(--color1200)' : 'var(--color8)'}` }} />
            </linearGradient>
            <linearGradient id="longleft" gradientUnits="userSpaceOnUse" x1="7.1689" y1="669.4844" x2="313.7015" y2="138.5542">
              <stop offset="1000" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'white' : 'var(--color13)'}` }} />
              <stop offset="0.6" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'var(--color1200)' : 'var(--color8)'}` }} />
            </linearGradient>
            <linearGradient id="longright" gradientUnits="userSpaceOnUse" x1="502.8423" y1="700.7964" x2="502.8423" y2="106.892">
              <stop offset="1000" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'white' : 'var(--color13)'}` }} />
              <stop offset="0.6" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'var(--color1200)' : 'var(--color8)'}` }} />
            </linearGradient>
            <linearGradient id="longcenter" gradientUnits="userSpaceOnUse" x1="462.5714" y1="711.5352" x2="462.5714" y2="42.0564">
              <stop offset="1000" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'white' : 'var(--color13)'}` }} />
              <stop offset="0.6" style={{ stopColor: `${storedTheme === 'mivatorsilver' ? 'var(--color1200)' : 'var(--color8)'}` }} />
            </linearGradient>
          </defs>

          {/* Paths */}
          <g transform="translate(50, 50)">
            {' '}
            {/* Centering the group */}
            <path
              d="M375,43.2c0,0-345.8-92.9-345.8,306.3"
              style={{ fill: 'none', stroke: 'url(#shortleft)', strokeOpacity: '0.1', strokeWidth: '3', strokeMiterlimit: '10', strokeDashoffset: '4000', strokeLinecap: 'round' }}
            />
            <path
              d="M375,43.2c0,0,345.8-92,345.8,996.3"
              style={{ fill: 'none', stroke: 'url(#shortcenter)', strokeOpacity: '0.1', strokeWidth: '3', strokeMiterlimit: '10', strokeDashoffset: '4000', strokeLinecap: 'round' }}
            />
            <path
              d="M265.4,27.6c0,0-182,148.7,19.4,308.9"
              style={{ fill: 'none', stroke: 'url(#shortright)', strokeOpacity: '0.1', strokeWidth: '3', strokeMiterlimit: '10', strokeDashoffset: '4000', strokeLinecap: 'round' }}
            />
            <path
              d="M375,83.2C34,193,286,305,177,463C86.9,593.7,20,571,29.2,757.7"
              style={{ fill: 'none', stroke: 'url(#longleft)', strokeOpacity: '0.1', strokeWidth: '3', strokeMiterlimit: '10', strokeDashoffset: '4000', strokeLinecap: 'round' }}
            />
            <path
              d="M375,83.2c0,0,285.4,372.6,229.2,575.8"
              style={{ fill: 'none', stroke: 'url(#longright)', strokeOpacity: '0.1', strokeWidth: '3', strokeMiterlimit: '10', strokeDashoffset: '4000', strokeLinecap: 'round' }}
            />
            <path
              d="M375,83.2c0,0,159.8,31.8,189.8,200.4C604.8,549.4,175,759,175,759"
              style={{ fill: 'none', strokeOpacity: '0.1', strokeWidth: '3', stroke: 'url(#longcenter)', strokeMiterlimit: '10', strokeDashoffset: '4000', strokeLinecap: 'round' }}
            />
          </g>
        </svg>

        {/* Icon Grid */}
        <div className="relative grid grid-cols-3 gap-y-40 !mt-auto w-full px-12 z-[5]">
          {/* Icon 1 */}
          <div className="flex">
            <div className="flex flex-col items-center drop-shadow-[0px_8px_24px_rgba(7,7,10,0.1)] dark:drop-shadow-[0px_8px_24px_rgba(7,7,10,0.7)]">
              <div className="mask mask-squircle">
                <div className="connection_icon">
                  <span className="text-secondary dark:text-primary-600">
                    <IconFast className="size-16" />{' '}
                  </span>
                </div>
              </div>
              <p className="connection_text">Fast&nbsp;&amp;&nbsp;Efficient</p>
            </div>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center drop-shadow-[0px_8px_24px_rgba(7,7,10,0.1)] dark:drop-shadow-[0px_8px_24px_rgba(7,7,10,0.7)]">
              <div className="mask mask-squircle">
                <div className="connection_icon">
                  <span className="text-secondary dark:text-primary-600">
                    <IconModify className="size-16" />{' '}
                  </span>
                </div>
              </div>
              <p className="connection_text">Easy&nbsp;to&nbsp;Modify</p>
            </div>
          </div>

          {/* Icon 3 */}
          <div className="flex justify-end">
            <div className="flex flex-col items-center drop-shadow-[0px_8px_24px_rgba(7,7,10,0.1)] dark:drop-shadow-[0px_8px_24px_rgba(7,7,10,0.7)]">
              <div className="mask mask-squircle">
                <div className="connection_icon">
                  <span className="text-secondary dark:text-primary-600">
                    <IconCompatible className="size-16" />{' '}
                  </span>
                </div>
              </div>
              <p className="connection_text">Highly&nbsp;Compatible</p>
            </div>
          </div>

          {/* Icon 4 */}
          <div className="flex">
            <div className="flex flex-col items-center drop-shadow-[0px_8px_24px_rgba(7,7,10,0.1)] dark:drop-shadow-[0px_8px_24px_rgba(7,7,10,0.7)]">
              <div className="mask mask-squircle">
                <div className="connection_icon">
                  <span className="text-secondary dark:text-primary-600">
                    <IconUi className="size-16" />{' '}
                  </span>
                </div>
              </div>
              <p className="connection_text">Better&nbsp;UI</p>
            </div>
          </div>

          {/* Icon 5 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center drop-shadow-[0px_8px_24px_rgba(7,7,10,0.1)] dark:drop-shadow-[0px_8px_24px_rgba(7,7,10,0.7)]">
              <div className="mask mask-squircle">
                <div className="connection_icon">
                  <span className="text-secondary dark:text-primary-600">
                    <IconFeatures className="size-16" />{' '}
                  </span>
                </div>
              </div>
              <p className="connection_text">Premium&nbsp;Features</p>
            </div>
          </div>

          {/* Icon 6 */}
          <div className="flex justify-end">
            <div className="flex flex-col items-center drop-shadow-[0px_8px_24px_rgba(7,7,10,0.1)] dark:drop-shadow-[0px_8px_24px_rgba(7,7,10,0.7)]">
              <div className="mask mask-squircle">
                <div className="connection_icon">
                  <span className="text-secondary dark:text-primary-600">
                    <IconInput className="size-16" />{' '}
                  </span>
                </div>
              </div>
              <p className="connection_text">Resolvable Inputs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedIcons;
