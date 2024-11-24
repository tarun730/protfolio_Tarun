import React from 'react'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'
import Skill from '../generalcomp/Skill'
import { Paragraph } from './Paragraph'
const Skills = ({ head, heading, skills }) => {
    return (
   
        <Section id="Skills" >
             <div className='mx-auto flex w-full max-w-7xl  flex-col'>
            {/* <span className="text-4xl">⚡</span> */}
                <SectionHead head={head} />
                <Paragraph className="max-w-xl mt-4 mb-4">{heading}</Paragraph>

                <div className='grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12'>
                {skills.map((i, index) => <Skill key={index} logo={i.logo} label={i.label} />
                )}
               </div>
            </div>
        </Section>
        
    )
}

export default Skills