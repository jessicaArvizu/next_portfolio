import React from 'react';
import { FlipWords } from './ui/FlipWords';
import Socials from './Socials/Socials';

const Hero = () => {
    const words = ["amazing", "better", "beautiful", "modern"];

    return (
        <section id='header' className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-text font-bold lg:p-20">
            <div className='p-10 lg:p-0'>
                <h1 className="text-3xl lg:text-5xl text-center lg:text-left">
                    Hi, my name is
                    <br />
                    <span className=" text-3xl text-peach lg:text-6xl ">Jessica Arvizu</span>
                </h1>
                <h2 className="mt-10 text-2xl lg:text-3xl text-center lg:text-left">
                    And I love to build
                    <br />
                    <FlipWords words={words} /> apps
                </h2>
                <h3 className="mt-10 text-sm lg:text-xl text-center lg:text-left font-normal">
                    Passionate Front-End Developer
                    <span className="text-peach">•</span> React Enthusiast <span className="text-peach">•</span> Agile Advocate <span className="text-peach">•</span> Scrum Master
                </h3>

                <Socials />
            </div>
            <div className='font-normal text-sm lg:text-[18px] p-10 lg:p-0 space-y-8'>
                <p>
                    A decade ago, my journey into the enchanting world of frontend development began with the humble act of transforming Tumblr themes using the magic of HTML and CSS. Fast forward to today, and I find myself immersed in the dynamic realms of React, JavaScript, Bootstrap, and Tailwind – the tools that bring my digital dreams to life.
                </p>
                <p>
                    I consider myself being more of a people-person than your typical introvert. I thrive in the delicate dance between the symphony of creating a project from its inception, conversing with clients to breathe life into their ideas, and the serene solitude of coding, where the magic truly unfolds.
                </p>
                <p>
                    There&apos;s a poetic charm in crafting not just beautiful, but impeccably engineered projects. I find joy in the delicate balance of design and engineering, where aesthetics and functionality waltz together seamlessly.
                </p>
                <p>
                    When I&apos;m not weaving digital wonders, you&apos;ll find me lost in the vibrant world of reading, embracing the tactile beauty of crocheting and embroidery, or nurturing my ever-growing collection of plants. Because, let&apos;s face it, life is just more enjoyable when it&apos;s bursting with 
                    <span className='text-pink font-bold'> c</span>
                    <span className='text-peach font-bold'>o</span>
                    <span className='text-lavender font-bold'>l</span>
                    <span className='text-green font-bold'>o</span>
                    <span className='text-blue font-bold'>r</span>! 🌈✨
                </p>
            </div>

        </section>

    );
}

export default Hero;
