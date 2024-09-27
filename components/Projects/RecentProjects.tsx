import React from 'react'
import { projects } from '@/data'
import { HoverEffect } from '../ui/CardHoverEffect'
import { SectionsEnum } from '../_enums/sectionsEnums'

const RecentProjects = () => {
  return (
    <section id={SectionsEnum.Projects} className='px-10 pt-10 lg:px-20'>
      <h1 className='heading'>
        Some of my {' '}
        <span className='text-peach'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-16'>
        <HoverEffect items={projects} />
      </div>
    </section>
  )
}

export default RecentProjects