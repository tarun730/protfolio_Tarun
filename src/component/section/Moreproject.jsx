import React from 'react'
import { project } from '../../assets/data'
import Project from '../generalcomp/project'

const Moreproject = () => {
  return (
    <div className='flex  flex-col gap-4'>
     
      <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center p-4'>PROJECTS</h1>

      {project.list.slice(3, project.list.length).map((element, index) => <Project key={index} i={element} />)}
  {/* <div className='absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5'></div> */}



    </div>
  )
}

export default Moreproject