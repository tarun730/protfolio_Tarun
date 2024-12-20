import React from 'react'
import Section from '../generalcomp/Section'
import Project from '../generalcomp/Project'
import SectionHead from '../generalcomp/SectionHead'
import { Link } from 'react-router-dom'
import { Paragraph } from './Paragraph'
const Projects = (props) => {
    let list = props.list
    // console.log(list)
    return (
        <Section id="Projects">
            <div className='mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8'>
            
                <SectionHead head={props.head} />
                <Paragraph className="mt-4"> These are some of my projects</Paragraph>
                <div className='flex flex-col self-center' >
                    {
                        list.slice(0, 3).map((element, index) => <Project key={index} i={element} />)
                    }
                </div>
                <div className='text-center items-center'>
                <Link to='More-project'> <button className="bg-[aliceblue] dark:bg-[#4d5e6e] backdrop-blur-md rounded h-12 text-xl w-28  drop-shadow-lg"> More <i className="fa-solid fa-angles-right"></i> </button></Link>
            </div>
            </div>
        </Section>
    )
}

export default Projects