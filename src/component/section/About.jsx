import React from 'react'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'

const About = ({ desciption, image, heading, head }) => {
    return (
        <Section id="About">
            
            <div className='  mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8'>
                <SectionHead head={head} />
                <div className='flex w-full flex-col justify-center gap-12 md:flex-row '>
                    <span className='rounded-md object-cover transform rotate-3 shadow-xl block  hover:rotate-0 transition duration-200'>
                    <img className=' relative h-[380px] w-[288px]  md:h-[280px] md:w-[200px] lg:h-[420px] lg:w-[331px] md:p-8' loading='lazy' src={image} alt="my photo" srcSet="" />

                    </span>
                    <div className='flex max-w-xl mt-6 flex-col gap-6' >
                        <h1 className='text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900'>{heading}</h1>
                        {desciption.map((i,index)=><p key={index} className='text-normal text-base'> {i} </p>)}
                    </div>
                </div>
            </div>
            
        </Section>
    )
}

export default About