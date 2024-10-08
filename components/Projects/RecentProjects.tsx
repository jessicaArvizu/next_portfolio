import React from 'react'
import { projects } from '@/data'
import { SectionsEnum } from '../_enums/sectionsEnums'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <section id={SectionsEnum.Projects} className='px-10 pt-10 lg:px-20'>
      <h1 className='heading'>
        Some of my {' '}
        <span className='text-peach'>recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl w-full mt-10">
        {projects.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="relative group block p-2 h-full w-full"
          >
            <ProjectCard
              title={item.title}
              img={item.img}  />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RecentProjects
