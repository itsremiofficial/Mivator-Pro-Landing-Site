import gsap from "gsap";
import React, { useEffect } from "react";

const BackgroundLines = () => {
  gsap.registerPlugin();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLLIElement>(
      ".background-grid li"
    );
    const timeline = gsap.timeline({ repeat: -1 });

    const duration = 25;

    elements.forEach((li, index) => {
      const opacityKeyframes = [
        { top: "20%", opacity: 1 },
        { top: "30%", opacity: 0 },
        { top: "40%", opacity: 1 },
        { top: "60%", opacity: 1 },
        { top: "70%", opacity: 0 },
        { top: "80%", opacity: 1 },
        { top: "90%", opacity: 1 },
      ];

      // Sequential animation for each li
      timeline.fromTo(
        li,
        { "--before-top": "-200px" },
        {
          "--before-top": "100%",
          duration: duration,
          ease: "linear",
          onComplete: () => {
            if (index < elements.length - 1) {
              const nextElement = elements[index + 1];
              timeline.add(() => {
                gsap.fromTo(
                  nextElement,
                  { "--before-top": "-200px" },
                  { "--before-top": "100%", duration: duration, ease: "linear" }
                );
              });
            } else {
              timeline.add(() => {
                elements.forEach((el) => {
                  gsap.fromTo(
                    el,
                    { "--before-top": "-200px" },
                    {
                      "--before-top": "100%",
                      duration: duration,
                      ease: "linear",
                    }
                  );
                });
              });
            }
          },
        }
      );

      //   opacityKeyframes.forEach((frame, i, arr) => {
      //     const nextFrame = arr[i + 1];
      //     if (nextFrame) {
      //       timeline.fromTo(
      //         li,
      //         { "--before-opacity": frame.opacity.toString() },
      //         {
      //           "--before-opacity": nextFrame.opacity.toString(),
      //           duration:
      //             (duration *
      //               (parseFloat(nextFrame.top) - parseFloat(frame.top))) /
      //             100,
      //           ease: "linear",
      //         },
      //         (duration * parseFloat(frame.top)) / 100
      //       );
      //     }
      //   });
    });
  }, []);

  // elements.forEach((li, index) => {
  //   timeline.fromTo(
  //     li,
  //     { "--before-top": "-100px", "--before-opacity": "0" },
  //     {
  //       "--before-top": "15%",
  //       "--before-opacity": "1",
  //       duration: duration,
  //       //   delay: 15,
  //       repeatDelay: 10,
  //       ease: "linear",
  //       onComplete: () => {
  //         gsap.to(li, {
  //           "--before-opacity": "0",
  //         });
  //       },
  //     },
  //     index / 5 * 10
  //   );
  // });
  return (
    <ul className="background-grid absolute inset-0">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li className="hidden lg:block"></li>
      <li className="hidden lg:block"></li>
      <li className="hidden 2xl:block"></li>
      <li className="hidden 2xl:block"></li>
    </ul>
  );
};

export default BackgroundLines;
