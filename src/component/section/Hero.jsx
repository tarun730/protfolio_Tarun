import React from 'react'
import Section from '../generalcomp/Section'

import animationData from '../../lotties/Skb1oA2iyf.json';

const Hero = ({ Coloumn, image }) => {
    // let list=Coloumn.social
  
    return (
        <Section id='Hero'>
            <div className='bg-[url(./pics/line.svg)] dark:mix-blend-color-dodge mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:py-0 py-28 md:gap-12 md:px-8' >
                <div className='flex flex-col gap-1 md:flex-row'>

                    <div className='hidden md:block w-2/5 flex items-center justify-center md:order-last md:flex-grow md:justify-end'>

                    

                        <lottie-player src="https://lottie.host/372379ed-34d3-4743-81f5-8e58897ca4ef/yfseGhxyuV.json" background="Transparent" speed="1" direction="1" mode="normal" loop autoplay></lottie-player>

                    </div>
                    <div className='flex max-w-3xl md:w-3/5 flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-4xl flex items-center py-2 font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900'>{Coloumn.name}
                                <span className='block w-[3em]'>

                                    {/* <lottie-player src="https://lottie.host/34748da0-5a33-418f-9982-30bdbda0345d/WOVWMk5NRf.json" background="Transparent" speed="1"  direction="1" mode="normal" loop autoplay></lottie-player> */}

                                </span>
                            </h1>
                            <p className='text-normal text-base'> {Coloumn.description} </p>
                        </div>
                        <div className='flex flex-row gap-[1em] items-center'>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                            <p>{Coloumn.location}</p>

                        </div>
                        <div className='flex gap-4 text-2xl'>

                            <a target="_blank " href={Coloumn.social[0]}><i className="fa-brands fa-github"></i></a>
                            <a target="_blank" href={Coloumn.social[1]}><i className="fa-brands fa-twitter"></i></a>
                            <a target="_blank" href={Coloumn.social[2]}><i className="fa-brands fa-linkedin-in"></i></a>
                            <a target="_blank" href={Coloumn.social[3]}><i className="fa-regular fa-envelope"></i></a>

                        </div>
                    </div>


                </div>
                <div className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20" aria-hidden="true">
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
            </div>
        </Section>
    )
}

export default Hero