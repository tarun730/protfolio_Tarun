import React from 'react'
import { project } from '../../assets/data'
import Project from '../generalcomp/Project'
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
const Moreproject = () => {
  return (
    <div className='mx-auto flex w-full  flex-col px-4 md:px-8 h-[60rem] dark:bg-[#1e293b]'>
      <div className='flex flex-col self-center' >

        <h1 className='mt-2 text-3xl font-bold tracking-tight dark:text-slate-50 text-gray-900 sm:text-4xl text-center p-4'>PROJECTS</h1>
        <Link to="/#Projects" className='dark:text-slate-50 '><IconArrowNarrowLeft /></Link>

        {project.list.slice(3, project.list.length).map((element, index) => <Project key={index} i={element} />)}




      </div>
    </div>
  )
}

export default Moreproject