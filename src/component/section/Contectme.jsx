import React from 'react'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'
const Contectme = ({
    head,
    description,
    gmail,
    number,
    content
}) => {
    return (
        <Section id="Contactme">
            <div className=' mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8 bg'>
                <div className='flex flex-col items-center gap-4'>
                    <SectionHead head={head} />
                    <p className='text-normal text-lg md:text-xl max-w-xl text-center'>{description}</p>
                </div>

                <div className='flex flex-col items-center gap-6 md:gap-12'>
                    <div className='flex items-center gap-4 md:gap-5'><i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-8 md:w-8"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></i><h2 className='text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900'>{gmail}</h2></div>

                    <div className='flex items-center justify-center gap-1'>
                        <p className='text-normal text-sm flex items-center text-center'>{content}</p>
                    </div>
                </div>
            </div>




          



        </Section>
    )
}

export default Contectme