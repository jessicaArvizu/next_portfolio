"use client";
import { cn } from "@/lib/utils";
import { Meteors } from "./MeteorEffect";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import SkillItem from "../Skills/SkillItem";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaFigma, FaReact, FaGit, FaGithub, FaLaptopCode, FaCog, FaSass, FaHandsHelping, FaWordpress, FaElementor, FaWix, FaWeebly } from 'react-icons/fa';
import { FaAccessibleIcon } from "react-icons/fa6";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('jessica.arvizu.trabajo@gmail.com');
        setCopied(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2 justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: 'rgba(54, 58, 79,0.3)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(54, 58, 79,1)',
            }}
        >
            <div className={`${id === 4} && 'flex justify-center h-full'`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover, object-center')}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className='object-cover, object-center, w-full h-full'
                        />
                    )}
                </div>

                <div className={cn(
                    titleClassName,
                    'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-x-5 p-5 lg:p-10'
                )}>

                    <div className="text-peach font-bold text-lg lg:text-3xl mb-10 z-10">
                        {title}
                    </div>

                    <div className="text-sm z-10 text-text">
                        {description}
                    </div>

                    {id === 1 && (
                        <div className="grid grid-cols-4 gap-2">
                            <SkillItem Icon={FaHtml5} name="HTML 5" />
                            <SkillItem Icon={FaCss3Alt} name="CSS 3" />
                            <SkillItem Icon={FaJs} name="JavaScript" />
                            <SkillItem Icon={FaNodeJs} name="Node" />
                            <SkillItem Icon={FaFigma} name="Figma" />
                            <SkillItem Icon={FaReact} name="React" />
                            <SkillItem Icon={FaGit} name="Git" />
                            <SkillItem Icon={FaGithub} name="GitHub" />
                            <SkillItem Icon={FaLaptopCode} name="Responsive Design" />
                            <SkillItem Icon={FaCog} name="RESTful APIs" />
                            <SkillItem Icon={FaSass} name="Sass" />
                            <SkillItem Icon={FaHandsHelping} name="Web Accessibility" />
                            <SkillItem Icon={FaWordpress} name="WordPress" />
                            <SkillItem Icon={FaElementor} name="Elementor" />
                            <SkillItem Icon={FaWix} name="Wix" />
                            <SkillItem Icon={FaWeebly} name="Weebly" />
                        </div>
                    )}

                    {id === 2 && <Meteors number={50} />}

                    {id === 3 && (
                        <div className="flex gap-2 lg:gap-3 w-fit absolute -right-3 lg:right-5">
                            <div className=" flex flex-col gap-2 lg:gap-3">
                                {['Next.js', 'Typescript', 'JavaScript'].map
                                    ((item) => (
                                        <span key={item} className="py-2 px-3 text-xs opacity-50
                                     lg:opacity-100 rounded-xl text-center text-text bg-surface-1">
                                            {item}
                                        </span>
                                    ))}
                                <span className="py-4 px-4 text-xs opacity-20 rounded-xl text-center text-text bg-surface-1"></span>
                            </div>

                            <div className=" flex flex-col gap-2 lg:gap-3">
                                <span className="py-4 px-4 text-xs opacity-20 rounded-xl text-center text-text bg-surface-1"></span>
                                {['Tailwind', 'WordPress', 'React.js'].map
                                    ((item) => (
                                        <span key={item} className="py-2 px-2 lg:px-3 text-xs opacity-50
                                     lg:opacity-100 rounded-xl text-center bg-surface-1">
                                            {item}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    )}

                    {id === 5 && (
                        <div className="w-full relative">
                            <div
                                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                                    }`}
                            >
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>

                            <MagicButton
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
