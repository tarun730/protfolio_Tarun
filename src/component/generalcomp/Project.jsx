

import React from "react";
import { Heading } from "../section/Heading";
import { Paragraph } from "../section/Paragraph";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { skill } from "../../assets/data";

const Project = (props) => {
  // console.log(props)
  const { Codelink, Livelink, des, image, name, tech_stack } = props.i
  return (<>

    <div>
      <div className=" dark:text-slate-50  border-stone-300 dark:my-2 my-3 md:col-span-2 row-span-1 rounded-xl dark:hover:bg-[#2b3c57] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#1e293b] dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4">
        {/* {products.map((product, idx) => ( */}
        
        <motion.div
          // key={product.href}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: 1 * 0.1 }}
        >
          <div
            //   href={product.slug ? `/projects/${product.slug}` : product.href}
            //   key={product.href}
            className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 dark:hover:bg-[#2b3c5700] hover:bg-[#e7e7e7c2] rounded-2xl transition duration-200 p-3"
          >
            <img
              src={image}
              alt="thumbnail"
              height="200"
              width="200"
              className="rounded-md shadow-md"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-row justify-between ">
                <Heading
                  as="h4"
                  className="font-black text-lg md:text-lg lg:text-lg "
                >
                  {name}
                </Heading>
                <div className='flex flex-row gap-4'>
           {
               Codelink=="#" ? null: <a href={Codelink} target='_blank' className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500'><i className="fa-solid fa-code"></i></a>
 }
          <a href={Livelink} target='_blank' className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
                       </div>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                  {des}
                </Paragraph>
       
              <div className="flex space-x-2 md:mb-1 mt-4 md:mt-2">

                {

                  skill.skills.map(i => (
                    tech_stack.map(iof => (iof == i.label ? <img height="30" width="30" loading='lazy' src={i.logo} alt="SkillLogo" srcSet="" /> : null))
                  ))

                }

                {/* {tech_stack?.map((stack) => (
                    <>
                            <img  height="14" width="14" loading='lazy' src={stack} alt="SkillLogo" srcSet="" /> 

                    <span
                      key={stack}
                      className="mr-3 text-sm font-Montserrat uppercase text-[#db2777] hover:text-primary-600 dark:hover:text-primary-400"
                     className="text-xs  md:text-xs lg:text-xs bg-[#d4d4d4c2] px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                    </>
                  ))} */}
              </div>
              
            </div>
            
          </div>
        </motion.div>
        {/* ))} */}
      </div>
    </div>



    <div style={{ display: "none" }} className='rounded-xl md:even:flex-row-reverse p-2  bg-[#9c9c87] shadow-md dark:bg-gray dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row'>

      <div className='flex items-center justify-center border-gray-100 bg-[#b9babd]  dark:bg-[#334155] rounded-lg md:w-1/2 lg:p-4 md:order-last '>
        <img className='shadow-xl' src={image} alt="" srcSet="" />
      </div>

      <div className='flex flex-col gap-6 p-8 md:w-1/2 lg:p-8 md:order-first'>
        <h2 className='text-lg md:text-xl font-semibold text-gray-900'>{name}</h2>
        <div className='flex flex-col gap-4' >
          {
            des.map((i, index) => <p key={index} className='text-normal  text-base'> {i} </p>)
          }
        </div>

        <div className='flex flex-wrap gap-2'>
          {
            tech_stack.map((i, index) => <div className="flex items-center justify-center rounded-xl bg-[#a3a3a3] px-5 py-1" key={index}> <h2 className='text-normal text-sm font-medium ' > {i}</h2> </div>)
          }
        </div>
        <div className='flex flex-row gap-4'>
          <a href={Codelink} target='_blank' className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500'><i className="fa-solid fa-code"></i></a>
          <a href={Livelink} target='_blank' className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
    </div>

  </>
  )
}

export default Project