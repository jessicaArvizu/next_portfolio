import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { FlipWords } from './ui/flip-words'
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero = () => {

    const words = ["amazing", "better", "beautiful", "modern"];

    return (
        <div>
            <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                    <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/30">
                        Hi, my name is Jessica Arvizu
                    </h1>

                    <h2 className="bg-clip-text text-transparent drop-shadow-lg bg-gradient-to-b from-white/90 to-white/30 mt-10 text-2xl md:text-3xl lg:text-5xl">
                        And I love to build <FlipWords words={words} /> apps
                    </h2>

                </div>
            </BackgroundGradientAnimation>

        </div>
    )
}

export default Hero
