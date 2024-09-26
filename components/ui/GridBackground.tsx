import React, { PropsWithChildren } from "react";

export function GridBackground({ children }: PropsWithChildren) {
    return (
        <div className="h-fit w-full bg-base bg-grid-small-white/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-base [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
}

