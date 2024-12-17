import ProButton from '@/components/ProButton';
import ThemeCustomizer from '@/components/ThemeCustomizer';
import gsap from 'gsap';
import { CancelCircleIcon, Menu03Icon } from 'hugeicons-react';
import React, { useEffect, useRef, useState } from 'react';

const SiteHeader = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const menuItemsRef = useRef<HTMLDivElement>(null); // Ref to menu container
  // Toggle expand state on button click
  const handleButtonClick = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (menuItemsRef.current) {
      const items = menuItemsRef.current.querySelectorAll('.menu_item');

      if (isExpanded) {
        // Animate menu items one by one when opening
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2, // Delay between each animation
            ease: 'power2.out',
          }
        );
      } else {
        // Animate menu items in reverse when closing
        gsap.to(items, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.1, // Reverse delay
          ease: 'power2.in',
        });
      }
    }
  }, [isExpanded]);

  return (
    <header className="relative flex justify-center items-center w-screen py-6 px-40">
      <div className="flex justify-end w-full relative z-20">
        {/* NAV MENU */}
        <div className={`header_button absolute inset-y-0 overflow-hidden left-0 bg-secondary dark:bg-primary-900 text-sm py-4 px-5 cursor-pointer ${isExpanded ? 'expanded' : ''}`}>
          <div className="w-full flex flex-col gap-3 group/button" ref={menuItemsRef}>
            <button
              className="flex gap-3 first_menu_item justify-center text-primary-700 group-hover/button:text-primary-400 cursor-pointer transition-colors duration-300"
              onClick={handleButtonClick}
            >
              {isExpanded ? <CancelCircleIcon className="size-5" strokeWidth="2" /> : <Menu03Icon className="size-5" strokeWidth="2" />}
            </button>
            <div className="h-full flex flex-col gap-4 py-6 whitespace-nowrap font-nippo text-xl font-extrabold">
              <button className="flex items-center gap-3 cursor-pointer text-light-700 hover:text-light-500 dark:text-primary-600 hover:dark:text-primary-400 transition-colors duration-300 menu_item">
                FEATURES
              </button>
              <button className="flex items-center gap-3 cursor-pointer text-light-700 hover:text-light-500 dark:text-primary-600 hover:dark:text-primary-400 transition-colors duration-300 menu_item">
                WHY PRO?
              </button>
              <button className="flex items-center gap-3 cursor-pointer text-light-700 hover:text-light-500 dark:text-primary-600 hover:dark:text-primary-400 transition-colors duration-300 menu_item">
                HOW IT WORKS?
              </button>
              <button className="flex items-center gap-3 cursor-pointer text-light-700 hover:text-light-500 dark:text-primary-600 hover:dark:text-primary-400 transition-colors duration-300 menu_item">
                CONTACT
              </button>
            </div>
          </div>
        </div>

        <div className="inline-flex gap-4 items-center">
          <ThemeCustomizer />
          <ProButton buttonTitle="Get Pro" className="py-3 px-5" />
        </div>
      </div>

      {/* HEADERLOGO */}
      <div className="absolute flex-shrink-0 rounded-md w-20">
        <svg className="mivator_main_logo" x="0px" y="0px" viewBox="0 0 500 500">
          <g className="mivator">
            <path
              className="bg_shadow"
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
                className="logo_main"
                d="M369.5,316.9c-3.3,4.3-11.2,13.7-25.3,24.9c-17.4,13.8-47.8,33.1-94.1,46.7c-29-8.5-51.7-19.2-68.9-29.5
					c-10.3-6.1-18.6-12-25.1-17.2c-15.3-12.2-23.4-22.3-26.1-25.9c-0.4-2.2-0.9-4.5-1.3-6.8c-8.5-47-8.3-96.4-6.6-130.3
					c1-19.9,2.6-36.8,4-49.1l14.8,16.8c18.6,23.6,53.9,62.4,109.1,99.2c0,0,0,0,0,0c56.4-26.1,116.9-87.7,116.9-87.7
					C375.6,244.8,371.4,299.7,369.5,316.9L369.5,316.9z"
              />
            </g>
            <g id="inner_eyes_left">
              <path
                className="lefteye_ground"
                d="M249.1,308.5v79.6c-23.3-6.9-42.6-15.3-58.1-23.6c-17.4-27.2-23.1-60.2-24.7-83.7
					c-1.1-15.7-0.6-29.3,0.1-38c0-0.2,0-0.5,0.1-0.7c0.8,0.9,1.6,1.9,2.4,2.8c24,27.4,51.4,46.4,66.7,55.9
					c6.8,4.2,11.2,6.5,11.8,6.8L249.1,308.5L249.1,308.5z"
              />
            </g>
            <path
              id="inner_eyes_right"
              className="logo_eyebgwhite"
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
                className="logo_moverlay"
                d="M250,256.1V299c-0.3,0.2-0.6,0.4-0.9,0.5c-9.3-5.2-51.5-30.1-82.5-69.8l-5.7-7.3l-1.3,9.2
					c-0.1,0.9-3.1,21.6-1.2,49.6c1.4,21.1,6,49.7,19,75.5c-8.6-5.3-15.6-10.4-21.3-14.9c-15.3-12.2-23.4-22.3-26.1-25.9
					c-0.4-2.2-0.9-4.5-1.3-6.8c-2.3-21.5-3.2-41.9-3.4-60.5l16.5,21.4l-16.2-48.4c1.3-42.9,6.3-70.8,6.3-70.8
					c8,12,46.4,48.5,46.4,48.5l12.7,36.5l-1.3-25.3C214.3,235.2,250,256.1,250,256.1L250,256.1z"
              />
            </g>
          </g>
        </svg>
      </div>
    </header>
  );
};

export default SiteHeader;
