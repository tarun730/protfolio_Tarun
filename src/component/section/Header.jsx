import React from 'react'
import { header } from "../../assets/data";
import { useState, useEffect } from 'react'
// import { as Link } from 'react-router-dom';
import { HashLink as NLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


// import { MoonStar, Sun } from 'lucide-react';

const Header = () => {

    const [Theme, setTheme] = useState(localStorage.getItem("theme"))
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (Theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        // console.log(localStorage.getItem("theme"))
    }, [Theme]);

    const handleThemeSwitch = () => {
        setTheme(() => Theme === "dark" ? "light" : "dark");
    };
    return (
        <div className="sticky dark:bg-[#1e293b] transition ease-in-out duration-300 dark:text-white top-0 z-30 w-full border-b border-transparent max-md:border-[#f9fafb] backdrop-blur-sm" >
            <div className=' mx-auto flex w-full max-w-7xl  justify-between p-4 md:px-8 items-start'>
                <h1 className='text-4xl md:text-3xl tracking-[-0.02em] text-gray-900 font-bold ' > 
                 <Link to='/'> 
                 {header.logo}
               </Link>
                 </h1>
                <div className="hidden  items-center gap-6 md:flex  flex-row ">
                    <ul className='flex list-none  md:flex-row items-center gap-6'>
                        {header.Navigation.map((i,index) =>  <NLink to={i.link} smooth key={index} ><li >{i.label}</li></NLink>  )}
                    </ul>
                    <div className='h-6 w-0.5 bg-[#a3a3a3]'> </div>
                    <div className="flex items-center gap-4">
                        <button onClick={handleThemeSwitch} className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"> {Theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>} </button>
                        <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-[#d4d4d8] dark:bg-[#475569]  "  > <a href={header.Resume_link} download>Download CV</a>  </button>
                    </div>
                </div>
                <button onClick={handleThemeSwitch} className=" md:hidden relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"> {Theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>} </button>

                <div className=' hidden  md:hidden flex-row-reverse items-start gap-6  ' >
                    <button className='text-4xl ' onClick={() => setOpen((prev) => !prev)}>{open ? <i className="fa-regular fa-circle-xmark"></i> : <i className="fa-solid fa-bars"></i>} </button>

                    <div className={` ${ open ? `p-[3em] ` : `h-0 overflow-hidden`} flex transition duration-300 delay-150 rounded-3xl absolute z-[-1] drop-shadow-xl bg-[aliceblue] dark:bg-[#1e293b] dark:text-white  items-center gap-6  flex-col `}>
                        <ul className='flex list-none flex-col items-center gap-6'>
                            {header.Navigation.map((i,index) => <NLink to={i.link} smooth key={index} ><li >{i.label}</li></NLink> )}
                        </ul>

                        <button onClick={handleThemeSwitch} className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"> {Theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>} </button>
                        <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-[#d4d4d8] dark:bg-[#475569]"><a href={header.Resume_link} download>Download CV</a> </button>

                    </div>




                </div>



            </div>
        </div>
    )
}

export default Header