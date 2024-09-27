import React from "react";
import { IconType } from 'react-icons'; 

export default function SkillItem({
    Icon,
    name,
}: {
    Icon: IconType;  
    name: string;
}) {
    return (
        <div className="flex flex-col justify-center items-center text-center mb-2"> {/* Flex column for centering */}
            <Icon className="text-4xl mb-2 text-text" /> 
            <span className="text-[8px] font-bold text-peach">{name}</span>
        </div>
    );
}
