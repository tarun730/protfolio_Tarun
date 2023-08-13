import React from 'react'
import ExpList from '../generalcomp/ExpList'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'

const Experience = ({ head,
    explist }) => {
    return (
        <Section id="Experience">
            <SectionHead head={head} />
            <h3 className='text-center'>Here is a quick summary of my most recent experiences:</h3>
           
               
                    <div >
                        {
                            explist.map((element, index) => <ExpList key={index} element={element} />)

                        }
                    </div>
                
         
        </Section>
    )
}

export default Experience