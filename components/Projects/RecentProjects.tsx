import React from 'react'
import { projects } from '@/data'
import { SectionsEnum } from '../_enums/sectionsEnums'
import { InfiniteMovingCards } from '../ui/InfiniteCards'

const RecentProjects = () => {
  return (
    <section id={SectionsEnum.Projects} className='px-10 pt-10 lg:px-20'>
      <h1 className='heading'>
        Some of my {' '}
        <span className='text-peach'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-16'>
        <InfiniteMovingCards
          items={projects}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  )
}

export default RecentProjects