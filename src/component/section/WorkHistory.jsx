import { timeline } from "../../assets/data";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'

import {
  IconCheck,
  IconCheckbox,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
const { head, explist} =timeline
export const WorkHistory = () => {
  return (
    <Section id="Experience max-w-4xl">
    <div className=' mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8'>
    {/* <span className="text-4xl">💼</span> */}
    <SectionHead head={head} />
    {/* <h3 className='text-center'>Here is a quick summary of my most recent experiences:</h3> */}
      <Paragraph className="mt-4">
        I&apos;ve worked in both frontend and full-stack roles at different organizations, where I built products and web apps
      </Paragraph>
       
            <div className='flex flex-col' >
                {explist.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 mt-10 relative justify-center"
          key={`timeline-${index}`}
        >
          <Paragraph className=" ml-32 w-40 self-start">{item.date}</Paragraph>
          <div className="max-w-md">
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            {item.responsibilities.map((responsibility, index) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}


</div>
        </div>
 
</Section>

 
  );
};

const Step = ({ children }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-600 dark:text-slate-200" />
      <Paragraph className="text-sm md:text-base lg:text-sm w-full">
        {children}
      </Paragraph>
    </div>
  );
};
