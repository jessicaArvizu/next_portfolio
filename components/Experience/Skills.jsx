import React from "react";

function Skills({ skills }) {
    return (
        <div className="flex flex-wrap">
            {skills && skills.map((skill, index) => (
                <p key={index} className="bg-peach rounded-xl px-3 py-1 text-xs text-surface-1 m-1">{skill}</p>
            ))}
        </div>
    );
}

export default Skills;
