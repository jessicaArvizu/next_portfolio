import React from 'react'
import { HoverEffect } from './ui/CardHoverEffect'
import { projects } from '@/data'

const RecentProjects = () => {
  return (
    <div className='py-10 px-10'>
        <h1 className='heading'>
            
            Some of my projects
        </h1>
        <HoverEffect items={projects} />
    </div>
  )
}

export default RecentProjects