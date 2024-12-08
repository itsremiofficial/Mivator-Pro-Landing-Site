// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const useLocoScroll = (start, triggerElem) => {
//   gsap.registerPlugin(ScrollTrigger);
//   useEffect(() => {
//     if (!start) return;

//     const cards = document.querySelectorAll(triggerElem);
//     if (!cards.length) {
//       console.warn('No elements found for the provided selector:', triggerElem);
//       return;
//     }

//     let iteration = 0;
//     gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

//     const spacing = 0.1;
//     const snapTime = gsap.utils.snap(spacing);

//     const buildSeamlessLoop = (items, spacing, animateFunc) => {
//       const rawSequence = gsap.timeline({ paused: true });
//       const seamlessLoop = gsap.timeline({
//         paused: true,
//         repeat: -1,
//         onRepeat() {
//           this._time === this._dur && (this._tTime += this._dur - 0.01);
//         },
//         onReverseComplete() {
//           this.totalTime(this.rawTime() + this.duration() * 100);
//         },
//       });

//       const cycleDuration = spacing * items.length;
//       let dur;

//       items
//         .concat(items)
//         .concat(items)
//         .forEach((item, i) => {
//           const anim = animateFunc(items[i % items.length]);
//           rawSequence.add(anim, i * spacing);
//           dur ||= anim.duration();
//         });

//       seamlessLoop.fromTo(rawSequence, { time: cycleDuration + dur / 2 }, { time: '+=' + cycleDuration, duration: cycleDuration, ease: 'none' });

//       return seamlessLoop;
//     };

//     const animateFunc = (element) => {
//       const tl = gsap.timeline();
//       tl.fromTo(element, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: 'power1.in', immediateRender: false }).fromTo(
//         element,
//         { xPercent: 400 },
//         { xPercent: -400, duration: 1, ease: 'none', immediateRender: false },
//         0
//       );
//       return tl;
//     };

//     const seamlessLoop = buildSeamlessLoop(Array.from(cards), spacing, animateFunc);
//     const playhead = { offset: 0 };
//     const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

//     const scrub = gsap.to(playhead, {
//       offset: 0,
//       onUpdate() {
//         seamlessLoop.time(wrapTime(playhead.offset));
//       },
//       duration: 0.5,
//       ease: 'power3',
//       paused: true,
//     });

//     const trigger = ScrollTrigger.create({
//       start: 0,
//       onUpdate(self) {
//         const scroll = self.scroll();
//         if (scroll > self.end - 1) {
//           wrap(1, 2);
//         } else if (scroll < 1 && self.direction < 0) {
//           wrap(-1, self.end - 2);
//         } else {
//           scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
//           scrub.invalidate().restart();
//         }
//       },
//       end: '+=3000',
//       pin: '.gallery',
//     });

//     const progressToScroll = (progress) => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);

//     const wrap = (iterationDelta, scrollTo) => {
//       iteration += iterationDelta;
//       trigger.scroll(scrollTo);
//       trigger.update();
//     };

//     ScrollTrigger.addEventListener('scrollEnd', () => scrollToOffset(scrub.vars.offset));

//     const scrollToOffset = (offset) => {
//       const snappedTime = snapTime(offset);
//       const progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
//       const scroll = progressToScroll(progress);
//       if (progress >= 1 || progress < 0) {
//         return wrap(Math.floor(progress), scroll);
//       }
//       trigger.scroll(scroll);
//     };

//     document.querySelector('.next')?.addEventListener('click', () => scrollToOffset(scrub.vars.offset + spacing));
//     document.querySelector('.prev')?.addEventListener('click', () => scrollToOffset(scrub.vars.offset - spacing));

//     return () => {
//       ScrollTrigger.kill();
//     };
//   }, [start, triggerElem]);
// };

// export default useLocoScroll;
