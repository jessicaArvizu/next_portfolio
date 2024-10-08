import React from 'react'
import { WobbleCard } from './WobbleCard'
import Image from 'next/image'

const ProjectCard = ({ title, img }) => {
    return (
        <WobbleCard className='col-span-1 h-full'>
            <div className="grid grid-cols-3 h-full">
                <div className="col-span-2 flex flex-col justify-center p-4">
                    <h2 className="text-left text-balance text-text text-xl lg:text-2xl font-semibold tracking-[-0.015em]">
                        {title}
                    </h2>
                </div>
                <div className="col-span-1 h-full relative">
                    <Image
                        src={img}
                        layout="fill" 
                        objectFit="cover"
                        alt="Project image"
                        className="grayscale filter"

                    />
                </div>
            </div>
        </WobbleCard>
    )
}

export default ProjectCard
