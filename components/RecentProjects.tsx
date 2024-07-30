import React from 'react'
import { HoverEffect } from './ui/CardHoverEffect'
import { projects } from '@/data'

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className='py-10 px-10'>
        <h1 className='heading'>
          Some of my {' '}
          <span className='text-pink'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-3 gap-16 mt-10'>
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  )
}

export default RecentProjects