import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        id: number;
        className: string;
        imgClassName: string;
        titleClassName: string;
        iconLists: string[];
        img: string;
        spareImg: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item.link}
                    key={item.id} // Use a unique key based on id
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-pink/[0.3] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className={item.className}>
                        <div className="bg-surface-0 p-4 rounded-lg">
                            <img src={item.img} />
                        </div>
                        <CardTitle className={item.titleClassName}>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {item.iconLists.map((icon, index) => (
                                    <div
                                        key={index}
                                        className=" lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center m-2"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                            background: 'rgba(54, 58, 79,0.3)',
                                            borderRadius: '16px',
                                            border: '1px solid rgba(54, 58, 79,1)',
                                        }}
                                    >
                                        <img src={icon} alt="icon5" className="p-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};


export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-2 overflow-hidden group-hover:border-slate-700 relative z-20",
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
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-pink font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-text tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
