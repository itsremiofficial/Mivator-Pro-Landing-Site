import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const PreLoader = () => {
  const loaderRef = useRef<SVGPathElement>(null);
  const loaderContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  // LOGO ANIMATION
  useEffect(() => {
    const loader = loaderRef.current;
    const fadeUp = document.querySelectorAll('.fadeUpPath');

    if (loader && fadeUp.length > 0) {
      const windowLoadTime = performance.now() / 1000;
      const maxStrokeValue = 800;
      const minStrokeValue = 60;
      loader.style.strokeDasharray = `${maxStrokeValue}`;
      loader.style.strokeDashoffset = `${maxStrokeValue}`;

      gsap.to(loader, {
        duration: windowLoadTime,
        strokeDashoffset: minStrokeValue,
        ease: 'power2.out',
        onUpdate: function () {
          const currentDashoffset = parseFloat(loader.style.strokeDashoffset || '0');
          const progressValue = Math.round(((maxStrokeValue - currentDashoffset) / (maxStrokeValue - minStrokeValue)) * 100);
        },
        onStart: function () {
          setStartAnimation(true);
        },
        onComplete: () => {
          gsap.to(fadeUp, {
            duration: 0.5,
            opacity: 1,
            display: 'block',
            y: 0,
            ease: 'power2.in',
          });
          setTimeout(() => {
            if (loader) loader.style.opacity = '0';
            if (loaderContainerRef.current) loaderContainerRef.current.style.display = 'none';
          }, 3000);
        },
      });
    }
  }, []);

  // COUNTER ANIMATION

  const customEase = 'M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.586,0.88,0.64,0.928,0.679,0.962,0.698,1,1,1';
  useLayoutEffect(() => {
    const windowLoadTime = performance.now() / 1000;
    if (!startAnimation) return;

    const loaderTimeline = gsap.timeline();

    loaderTimeline.to(
      '.counter-span.is--hundreds',
      {
        y: '-102.5%',
        delay: windowLoadTime / 1.8,
        duration: windowLoadTime / windowLoadTime,
        ease: customEase,
      },
      1.6
    );
    loaderTimeline.to(
      '.counter-span.is--tens',
      {
        y: '-1062%',
        duration: windowLoadTime,
        ease: customEase,
      },
      0.2
    );
    loaderTimeline.to(
      '.counter-span.is--ones',
      {
        y: '-10661.5%',
        duration: windowLoadTime,
        ease: customEase,
      },
      0
    );
  }, [startAnimation]);

  return (
    <div ref={loaderContainerRef} className="screen_loader fixed inset-0 bg-light-200 dark:bg-primary-1200 z-[60] grid place-content-center animate__animated">
      <div className="flex flex-col items-center">
        <svg id="mivator_logo" x="0px" y="0px" viewBox="0 0 324.5 348" className="enable-background loader" fill="none" width={250} height={250}>
          <path
            id="shadow"
            className="fill-white dark:fill-primary blur-3xl absolute top-0 bottom-0 left-0 right-0 w-full z-[-2]"
            d="M291.3,34.4L245,85.8c-35.2-38.4-82.6-58.9-82.6-58.9s-48.9,21-84.1,59.4L32.5,34.5
            c0,0-18,111.5,1.9,208.8c0,0,32.9,50.7,128,77.9c95.2-27.2,128-77.9,128-78C310.3,145.9,291.3,34.4,291.3,34.4z M218.4,290.2
            c18.3-27.5,24.1-61.4,25.8-85.4c1.2-15.9,0.6-29.7-0.1-38.3c0,0,0-0.1,0.1-0.1c0.7,8.6,1.3,22.6,0.1,38.7
            c-1.6,23.8-7.4,57.4-25.4,84.7L218.4,290.2z M84.7,172.9c-0.4-0.5-0.8-0.9-1.3-1.4C83.9,171.9,84.3,172.4,84.7,172.9
            C84.7,172.9,84.7,172.9,84.7,172.9z M81.2,168.9c-0.8-0.9-1.5-1.8-2.3-2.7c0,0,0,0,0,0c0.8,0.9,1.6,1.9,2.4,2.8
            c0.2,0.3,0.5,0.6,0.7,0.9C81.8,169.6,81.5,169.3,81.2,168.9z M161.4,312.2c-23.3-6.9-42.5-15.2-58-23.6c0,0,0,0,0,0c0,0,0,0,0-0.1
            C118.9,296.9,138.1,305.3,161.4,312.2L161.4,312.2z M218.4,290.3L218.4,290.3c-15.2,7.9-33.8,15.8-56,22.3
            C184.6,306,203.2,298.2,218.4,290.3z M284,232.4c-0.1,0.7-0.3,1.4-0.4,2.1c-0.1,0.8-0.3,1.5-0.4,2.2c-0.2,1-0.4,2.1-0.6,3.1
            c-0.2,0.3-0.5,0.6-0.8,1c0,0,0,0.1,0,0.1c-3.3,4.3-11.2,13.7-25.3,24.9c-6.3,5-14.3,10.7-24.1,16.6c13.5-26.2,18.3-55.4,19.8-77
            c1.9-28.2-1.1-49-1.2-49.8l-1.3-9.2l-5.7,7.3c-3.3,4.3-6.8,8.4-10.3,12.3c-2.7,2.9-5.4,5.8-8.1,8.5c-2.4,2.5-4.9,4.8-7.3,7.1
            c-15.2,14.2-30.3,25.2-41.4,32.5c-0.7,0.5-1.4,0.9-2.1,1.4c-2.9,1.9-5.5,3.4-7.6,4.7c-1.9,1.2-3.5,2.1-4.8,2.8
            c-0.3,0.2-0.6,0.4-0.9,0.5c-9.3-5.2-51.5-30.1-82.5-69.8l-5.7-7.3l-1.3,9.2c-0.1,0.9-3.1,21.6-1.2,49.6c1.4,21.1,6,49.7,19,75.5
            c0.1,0.1,0.2,0.2,0.3,0.3c-8.8-5.4-16-10.5-21.7-15.2c-15.3-12.2-23.4-22.3-26.1-25.9c-0.4-2.2-0.9-4.5-1.3-6.8
            c-8.5-47-8.3-96.4-6.6-130.3c1-19.9,2.6-36.8,4-49.1l14.8,16.8c18.6,23.6,53.9,62.4,109.1,99.2c2.4-1.5,48.6-31.9,88.5-77.8
            l34.8-38.6c1.4,11.6,3.2,29.1,4.4,49.7C291.9,136.8,292.3,185.9,284,232.4z"
          />
          <g id="m_letter">
            <defs>
              <path
                id="m_outer_clip"
                d="M290,103.1c-1.2-20.6-3-38.1-4.4-49.7l-34.8,38.6
                  c-39.9,45.9-86.1,76.3-88.5,77.8C107.1,133,71.8,94.2,53.2,70.6L38.4,53.8c-1.4,12.3-3,29.2-4,49.1c-1.7,33.9-1.9,83.3,6.6,130.3
                  c0.4,2.3,0.9,4.6,1.3,6.8c2.7,3.6,10.8,13.7,26.1,25.9c6.5,5.2,14.8,11.1,25.1,17.2c17,10.2,39.4,20.7,67.9,29.2v-0.1
                  c-23.3-6.9-42.6-15.3-58.1-23.6c-17.4-27.2-23.1-60.2-24.7-83.7c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7
                  c0.8,0.9,1.6,1.9,2.4,2.8c24,27.4,51.4,46.4,66.7,55.9c6.8,4.2,11.2,6.5,11.8,6.8l1.7,0.9v0.1l0.9-0.5l0.9-0.5
                  c2-1.1,45.7-24.2,80.9-65.5c0.7,8.6,1.3,22.6,0.1,38.7c-1.7,24-7.5,57.9-25.8,85.4c-15.2,7.9-33.8,15.7-56,22.3
                  c46.3-13.6,76.7-32.9,94.1-46.7c14.1-11.2,22-20.6,25.3-24.9c0,0,0-0.1,0-0.1c0.3-0.4,0.6-0.7,0.8-1c0.2-1,0.4-2.1,0.6-3.1
                  c0.1-0.7,0.3-1.4,0.4-2.2c0.1-0.7,0.3-1.4,0.4-2.1C292.3,185.9,291.9,136.8,290,103.1z"
              />
            </defs>
            <clipPath id="m_clip">
              <use xlinkHref="#m_outer_clip" style={{ overflow: 'visible' }} />
            </clipPath>
            <path
              // id="m_path"
              className="dark:stroke-primary-1200 stroke-light-700"
              style={{
                clipPath: 'url(#m_clip)',
                strokeWidth: '76px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: '10',
                fill: 'none',
              }}
              d="
               M74.5,288.6L61,234.8c-7.6-30.1-12.1-61-13.6-92l-2.7-58.7c-0.2-3.4,4.1-5.1,6.2-2.4l16.9,26.2c16.7,21.7,38.9,48,59.3,67.4
               l15.7,12.6c10.3,8.3,24.8,8.6,35.5,0.9l17.8-12.9c28.7-25.9,43.2-47.1,50-55.2l31.9-38.1c3.8-3.5,9.9-0.3,9.3,4.8l-12.8,110.2
               c-2,17.7-5.8,35.1-11.3,52L245,306.2"
            />
            <path
              ref={loaderRef}
              // id="m_path"
              className="dark:stroke-primary stroke-light-700"
              style={{
                clipPath: 'url(#m_clip)',
                strokeWidth: '76px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: '10',
                fill: 'none',
              }}
              d="
               M74.5,288.6L61,234.8c-7.6-30.1-12.1-61-13.6-92l-2.7-58.7c-0.2-3.4,4.1-5.1,6.2-2.4l16.9,26.2c16.7,21.7,38.9,48,59.3,67.4
               l15.7,12.6c10.3,8.3,24.8,8.6,35.5,0.9l17.8-12.9c28.7-25.9,43.2-47.1,50-55.2l31.9-38.1c3.8-3.5,9.9-0.3,9.3,4.8l-12.8,110.2
               c-2,17.7-5.8,35.1-11.3,52L245,306.2"
            />
          </g>
          <path
            style={{
              opacity: 0,
              display: 'none',
              transform: 'translateY(3px)',
            }}
            className="fadeUpPath fill-light-800 dark:fill-primary-800"
            d="M162.3,180.1l-0.8,43.6c0,0-3.4-1.8-9-5.1C123.3,201.4,97.7,178.8,77,152l-3.1-4c0,0-4,29.2-2.1,57.2
         c1.5,21.2,8,50.5,19.2,77.3c-28.2-16.3-45.9-37-48.6-40.6c-0.4-2.2-1-6.4-1.4-8.7c-2.3-21.5-3.2-41.9-3.4-60.5L54,194.1l-16.2-48.4
         c1.3-42.9,6.4-70.8,6.4-70.8c8,12,46.4,48.5,46.4,48.5l12.8,36.5l-1.3-25.3C126.6,159.2,162.3,180.1,162.3,180.1L162.3,180.1z"
          />
          <path
            id="logobg"
            className="fill-secondary dark:fill-primary-1200"
            d="M291.3,34.4L245,85.8c-35.2-38.4-82.6-58.9-82.6-58.9s-48.9,21-84.1,59.4L32.5,34.5
            c0,0-18,111.5,1.9,208.8c0,0,32.9,50.7,128,77.9c95.2-27.2,128-77.9,128-78C310.3,145.9,291.3,34.4,291.3,34.4z M218.4,290.2
            c18.3-27.5,24.1-61.4,25.8-85.4c1.2-15.9,0.6-29.7-0.1-38.3c0,0,0-0.1,0.1-0.1c0.7,8.6,1.3,22.6,0.1,38.7
            c-1.6,23.8-7.4,57.4-25.4,84.7L218.4,290.2z M84.7,172.9c-0.4-0.5-0.8-0.9-1.3-1.4C83.9,171.9,84.3,172.4,84.7,172.9
            C84.7,172.9,84.7,172.9,84.7,172.9z M81.2,168.9c-0.8-0.9-1.5-1.8-2.3-2.7c0,0,0,0,0,0c0.8,0.9,1.6,1.9,2.4,2.8
            c0.2,0.3,0.5,0.6,0.7,0.9C81.8,169.6,81.5,169.3,81.2,168.9z M161.4,312.2c-23.3-6.9-42.5-15.2-58-23.6c0,0,0,0,0,0c0,0,0,0,0-0.1
            C118.9,296.9,138.1,305.3,161.4,312.2L161.4,312.2z M218.4,290.3L218.4,290.3c-15.2,7.9-33.8,15.8-56,22.3
            C184.6,306,203.2,298.2,218.4,290.3z M284,232.4c-0.1,0.7-0.3,1.4-0.4,2.1c-0.1,0.8-0.3,1.5-0.4,2.2c-0.2,1-0.4,2.1-0.6,3.1
            c-0.2,0.3-0.5,0.6-0.8,1c0,0,0,0.1,0,0.1c-3.3,4.3-11.2,13.7-25.3,24.9c-6.3,5-14.3,10.7-24.1,16.6c13.5-26.2,18.3-55.4,19.8-77
            c1.9-28.2-1.1-49-1.2-49.8l-1.3-9.2l-5.7,7.3c-3.3,4.3-6.8,8.4-10.3,12.3c-2.7,2.9-5.4,5.8-8.1,8.5c-2.4,2.5-4.9,4.8-7.3,7.1
            c-15.2,14.2-30.3,25.2-41.4,32.5c-0.7,0.5-1.4,0.9-2.1,1.4c-2.9,1.9-5.5,3.4-7.6,4.7c-1.9,1.2-3.5,2.1-4.8,2.8
            c-0.3,0.2-0.6,0.4-0.9,0.5c-9.3-5.2-51.5-30.1-82.5-69.8l-5.7-7.3l-1.3,9.2c-0.1,0.9-3.1,21.6-1.2,49.6c1.4,21.1,6,49.7,19,75.5
            c0.1,0.1,0.2,0.2,0.3,0.3c-8.8-5.4-16-10.5-21.7-15.2c-15.3-12.2-23.4-22.3-26.1-25.9c-0.4-2.2-0.9-4.5-1.3-6.8
            c-8.5-47-8.3-96.4-6.6-130.3c1-19.9,2.6-36.8,4-49.1l14.8,16.8c18.6,23.6,53.9,62.4,109.1,99.2c2.4-1.5,48.6-31.9,88.5-77.8
            l34.8-38.6c1.4,11.6,3.2,29.1,4.4,49.7C291.9,136.8,292.3,185.9,284,232.4z"
          />
          <path
            style={{
              opacity: 0,
              display: 'none',
              transform: 'translateY(5px)',
            }}
            id="cap_overlay"
            className="fill-light-900 dark:fill-primary-1000 fadeUpPath"
            d="M239.1,91.6c-31.2,34.5-64.5,58.8-76.7,67.3c-9.6-71.9,0.2-122.7,0.2-122.7
         C173.1,41.3,210.6,60.6,239.1,91.6L239.1,91.6z"
          />
          <path
            id="lefteye_ground"
            className="fill-white"
            d="M161.4,232.6v79.6c-23.3-6.9-42.6-15.3-58.1-23.6c-17.4-27.2-23.1-60.2-24.7-83.7
            c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8c24,27.4,51.4,46.4,66.7,55.9c6.8,4.2,11.2,6.5,11.8,6.8
            L161.4,232.6L161.4,232.6z"
          />
          <path
            id="lefteye_ground"
            className="dark:fill-primary/50 fill-light-600"
            d="M161.4,232.6v79.6c-23.3-6.9-42.6-15.3-58.1-23.6c-17.4-27.2-23.1-60.2-24.7-83.7
            c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8c24,27.4,51.4,46.4,66.7,55.9c6.8,4.2,11.2,6.5,11.8,6.8
            L161.4,232.6L161.4,232.6z"
          />
          <path
            id="righteye_ground"
            className="dark:fill-white fill-white"
            d="M244.1,166.2c0.7,8.6,1.3,22.6,0.1,38.7c-1.7,24-7.5,57.9-25.8,85.4
            c-15.2,7.9-33.8,15.7-56,22.3c-0.4-0.1-0.7-0.2-1-0.3v-79.6l0.9-0.5l0.9-0.5C165.2,230.6,208.9,207.5,244.1,166.2z"
          />
          <path
            id="righteye_bg"
            className="fill-pro2"
            d="M231.5,179.9c-0.5,16.5-4.1,64.1-30.9,64.1c-11.9,0-19.1-9.1-23.4-20.5
            c0.9-0.6,1.8-1.1,2.8-1.8c11.7-7.6,28.2-19.4,44.8-35.2C227,184.4,229.2,182.2,231.5,179.9L231.5,179.9z"
          />
          <path
            id="righteye_fg"
            className="fill-pro"
            d="M224.7,186.5c-1.4,13.4-6.8,48.2-27,48.2c-8.3,0-14-5.6-17.8-13
            C191.7,214.1,208.2,202.3,224.7,186.5L224.7,186.5z"
          />
          <path
            id="lefteye_bg"
            className="fill-pro2"
            d="M91.8,180.2c0.5,16.5,4.1,64.1,30.9,64.1c11.9,0,19.1-9.1,23.4-20.5
            c-0.9-0.6-1.8-1.1-2.8-1.8c-11.7-7.6-28.2-19.4-44.8-35.2C96.3,184.7,94,182.5,91.8,180.2L91.8,180.2z"
          />
          <path
            id="lefteye_fg"
            className="fill-pro"
            d="M98.5,186.8c1.4,13.4,6.8,48.2,27,48.2c8.3,0,14-5.6,17.8-13
            C131.6,214.4,115.1,202.5,98.5,186.8L98.5,186.8z"
          />
        </svg>
        {/* PROGRESS COUNTER 1 to 100 */}
        <div className="flex w-full h-fit justify-center py-42 pt-16">
          <div className="loader-wrapper w-max h-full relative py-2">
            <div className="vertical-gradient h-full w-52 absolute left-1/2 transform -translate-x-1/2 top-0 z-[3]"></div>
            <div className="counter relative flex flex-col w-full h-fit text-secondary dark:text-primary z-[1] leading-[0.8] font-counter">
              <div className="loader-counter flex items-stretch text-[15rem] justify-center h-[0.75em] overflow-hidden">
                <div className="counter-span is--hundreds grid gap-0 text-right grid-rows-[max-content] grid-cols-1 auto-rows-[max-content] auto-cols-[1fr]">
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                </div>
                <div className="counter-span is--tens grid gap-0 text-right grid-rows-[max-content] grid-cols-1 auto-rows-[max-content] auto-cols-[1fr] ">
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                </div>
                <div className="counter-span is--ones grid gap-0 text-right grid-rows-[max-content] grid-cols-1 auto-rows-[max-content] auto-cols-[1fr] ">
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                  <div className="counter-digit">0</div>
                  <div className="counter-digit">1</div>
                  <div className="counter-digit">2</div>
                  <div className="counter-digit">3</div>
                  <div className="counter-digit">4</div>
                  <div className="counter-digit">5</div>
                  <div className="counter-digit">6</div>
                  <div className="counter-digit">7</div>
                  <div className="counter-digit">8</div>
                  <div className="counter-digit">9</div>
                </div>
              </div>
              <div className="counter-span is--percent grid gap-0 absolute bottom-4 -right-8">
                <svg className="w-12" viewBox="0 0 1514 2107.3" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                  <path
                    id="bg"
                    className="fill-light-200 dark:fill-primary-1100"
                    d="M1514,1508v220.2c0,52.9-11.4,104.1-33.9,152.3c-21.2,45.4-51.3,86-89.4,120.5
	c-37.1,33.7-80.1,60-127.7,78.2c-48.6,18.6-100,28.1-152.8,28.1s-104.2-9.4-152.8-28.1c-47.6-18.3-90.6-44.6-127.7-78.2
	c-26.3-23.8-48.7-50.5-67.1-79.7l-15.2,74.1c-13.4,65.1-70.7,111.8-137.1,111.8H438c-42.1,0-81.9-18.9-108.5-51.6
	c-26.6-32.6-37.1-75.5-28.6-116.7l195.8-950.2c1.6-7.6,3.7-15,6.5-22.1c-32.3,7.7-65.6,11.6-99.4,11.6c-52.8,0-104.2-9.4-152.8-28.1
	c-47.6-18.3-90.6-44.6-127.7-78.2C85.1,837.5,55.1,797,33.8,751.5C11.4,703.4,0,652.2,0,599.3V379.1C0,326.2,11.4,275,33.8,226.8
	c21.2-45.4,51.3-86,89.4-120.5c37.1-33.6,80.1-60,127.7-78.2C299.5,9.4,350.9,0,403.7,0s104.2,9.4,152.8,28.1
	c47.6,18.3,90.6,44.6,127.7,78.2c28.8,26.1,52.9,55.6,72.2,88l16.9-82.5C786.7,46.7,844,0,910.5,0h172.3
	c42.1,0,81.9,18.9,108.5,51.6c26.6,32.6,37.1,75.5,28.6,116.7l-195.8,950.2c-1.4,7-3.4,13.8-5.8,20.3c30-6.6,60.7-9.9,91.9-9.9
	c52.8,0,104.2,9.4,152.8,28.1c47.6,18.3,90.6,44.6,127.7,78.2c38.1,34.5,68.2,75.1,89.4,120.5C1502.6,1403.9,1514,1455.1,1514,1508z
	"
                  />
                  <path
                    id="fg"
                    className="fill-secondary dark:fill-primary"
                    d="M1082.8,140L887,1090.2h-96.6l-58.6,285.5c0,0,0,0,0,0l-25.2,122.4l-96.3,469.2H438l195.8-950.2h96.6
	L910.5,140H1082.8z M667.4,379.1v220.2c0,132-118.1,239.1-263.7,239.1c-72.8,0-138.8-26.8-186.5-70c-47.7-43.3-77.2-103-77.2-169.1
	V379.1C140,247,258.1,140,403.7,140S667.4,247,667.4,379.1z M482.6,379.1c0-39.4-35.4-71.5-78.9-71.5s-78.9,32.1-78.9,71.5v220.2
	c0,39.4,35.4,71.5,78.9,71.5s78.9-32.1,78.9-71.5V379.1z M1374,1508v220.2c0,132-118.1,239.1-263.7,239.1
	c-72.8,0-138.8-26.8-186.5-70c-47.7-43.3-77.2-103-77.2-169.1V1513v-5c0-32.1,7-62.8,19.7-90.7c39.4-87,133.8-148.3,244.1-148.3
	C1255.9,1268.9,1374,1376,1374,1508z M1189.1,1508c0-39.4-35.4-71.5-78.9-71.5s-78.9,32.1-78.9,71.5v220.2
	c0,39.4,35.4,71.5,78.9,71.5s78.9-32.1,78.9-71.5V1508z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
