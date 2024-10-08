"use client";
import { cn } from "@/lib/utils";
import SkillItem from "../Skills/SkillItem";
import { FaBootstrap, FaCss3Alt, FaElementor, FaFigma, FaCog, FaGit, FaGithub, FaHandSparkles, FaHtml5, FaJs, FaLaptopCode, FaNodeJs, FaReact, FaSass, FaWeebly, FaWix, FaWordpress } from "react-icons/fa";

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
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 mt-10 lg:gap-8 mx-auto",
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
    titleClassName,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id: number;
    titleClassName?: string;
}) => {

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2 justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: 'rgba( 68, 71, 105, 0.25 )',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
            }}
        >
            <div className={`${id === 3} && 'flex justify-center h-full'`}>
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
                            <SkillItem Icon={FaBootstrap} name="Bootstrap" />
                            <SkillItem Icon={FaJs} name="JavaScript" />
                            <SkillItem Icon={FaNodeJs} name="Node" />
                            <SkillItem Icon={FaReact} name="React" />
                            <SkillItem Icon={FaGit} name="Git" />
                            <SkillItem Icon={FaGithub} name="GitHub" />
                            <SkillItem Icon={FaLaptopCode} name="Responsive Design" />
                            <SkillItem Icon={FaCog} name="RESTful APIs" />
                            <SkillItem Icon={FaSass} name="Sass" />
                            <SkillItem Icon={FaHandSparkles} name="Web Accessibility" />
                            <SkillItem Icon={FaWordpress} name="WordPress" />
                            <SkillItem Icon={FaElementor} name="Elementor" />
                            <SkillItem Icon={FaWix} name="Wix" />
                            <SkillItem Icon={FaWeebly} name="Weebly" />
                        </div>
                    )}

                    {id === 3 && (
                        <div className="flex gap-2 lg:gap-3 w-fit absolute -right-3 lg:right-5">
                            <div className=" flex flex-col gap-2 lg:gap-3">
                                
                                {['Next.js', 'Typescript', 'JavaScript'].map
                                    ((item) => (
                                        <span key={item} className="py-2 px-3 text-xs opacity-100
                                     lg:opacity-100 rounded-xl text-center font-bold text-surface-1 bg-peach">
                                            {item}
                                        </span>
                                    ))}
                                <span className="py-4 px-4 text-xs opacity-20 rounded-xl text-center text-text bg-surface-0"></span>
                            </div>

                            <div className=" flex flex-col gap-2 lg:gap-3">
                                <span className="py-4 px-4 text-xs opacity-20 rounded-xl text-center text-text bg-surface-0"></span>
                                {['Tailwind', 'WordPress', 'React.js'].map
                                    ((item) => (
                                        <span key={item} className="py-2 px-2 lg:px-3 text-xs opacity-100
                                     lg:opacity-100 rounded-xl text-center font-bold text-surface-1 bg-peach">
                                            {item}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
