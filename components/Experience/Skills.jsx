import React from "react";

function Skills({ skills }) {
    return (
        <div className="my-2 flex flex-wrap">
            {skills && skills.map((skill, index) => (
                <p key={index} className="bg-peach rounded-xl px-3 py-1 text-xs text-text m-1">{skill}</p>
            ))}
        </div>
    );
}

export default Skills;
