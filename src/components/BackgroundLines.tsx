import gsap from 'gsap';
import React, { useEffect } from 'react';

const BackgroundLines = () => {
    gsap.registerPlugin();

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLLIElement>('.background-grid li');
        const timeline = gsap.timeline({ repeat: -1 });

        const duration = 25;
        const overlapFactor = 0.4;

        elements.forEach((li, index) => {
            timeline.fromTo(
                li,
                { '--before-top': '-100px' },
                {
                    '--before-top': '100%',
                    duration: duration,
                    delay: 15,
                    repeatDelay: 10,
                    ease: 'linear',
                },
                index * 10
            );
        });
    }, []);
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
