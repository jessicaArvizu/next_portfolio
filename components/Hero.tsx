import React from 'react';
import { BackgroundGradientAnimation } from './ui/BackgroundGradientAnimation';
import { FlipWords } from './ui/FlipWords';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
    const words = ["amazing", "better", "beautiful", "modern"];

    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold pointer-events-none text-center p-10">
                <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/30 text-3xl md:text-4xl lg:text-7xl">
                    Hi, my name is <span className="text-white">Jessica Arvizu</span>
                </h1>
                <h2 className="bg-clip-text z-50 text-transparent drop-shadow-lg bg-gradient-to-b from-white/90 to-white/30 mt-10 text-2xl md:text-3xl lg:text-5xl">
                    And I love to build <FlipWords words={words} /> apps
                </h2>
                <h3 className="bg-clip-text z-50 text-transparent drop-shadow-lg bg-gradient-to-b from-white/90 to-white/30 mt-10 text-sm md:text-xl lg:text-2xl">
                    Passionate Front-End Developer <span className="text-white">•</span> React Enthusiast <span className="text-white">•</span> Agile Advocate <span className="text-white">•</span> Scrum Master
                </h3>
                <a href="#about" className="z-100 pointer-events-auto mt-5">
                    <MagicButton title="See my work!" icon={<FaLocationArrow />} position="right" />
                </a>
            </div>
        </BackgroundGradientAnimation>
    );
}

export default Hero;
