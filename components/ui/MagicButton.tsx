import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon?: React.ReactNode;
    position?: string; handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button className={`px-4 py-2 text-white backdrop-blur-sm border border-white
        rounded-xl hover:bg-gray-100/30 hover:cursor-pointer w-full
         bg-white/10 text-sm transition duration-200 gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </button>
    )
}

export default MagicButton
