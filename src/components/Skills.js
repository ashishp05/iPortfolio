import React from 'react'
import { FaReact ,FaNodeJs ,FaJava,FaPython ,FaBootstrap,FaDatabase,FaLinux } from "react-icons/fa";
import { FaComputer,FaPhp } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { DiJavascript,DiMongodb } from "react-icons/di";
import { SiTailwindcss,SiInstructure } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";


export const Skills = () => {
  return (
    <div>
      <div className='flex flex-col p-5 w-full mx-auto'>
       <h2 className='text-4xl  font-semibold  '> Skills </h2>
          <div className='w-[100px] h-[3px] bg-blue-200 mt-1'></div>
          <div className='text-2xl text-richblack-500 w-full mx-auto p-2'>
           I started my coding jurnie in 2021. I learned many programming languages like C, Java, Python, JavaSrcript and MERN Stack technology.
          </div>
            <div className='flex items-start justify-evenly gap-5 text-start w-full mx-auto '>
             <div className='lg:flex'>
             <div >
             <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaHtml5 />
              <p>HTML&CSS</p>
             </div>
              <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
             <DiJavascript />
              <p>JAVASCRIPT</p>
             </div>
              <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaReact />
              <p>React.js</p>
             </div>
              <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaNodeJs />
              <p>Node.js</p>
             </div>
             </div>
             <div>
              <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaJava />
              <p>JAVA programming language</p>
             </div>
             <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaPython />
              <p>PYTHON programming language</p>
             </div><div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <DiMongodb />
              <p>MongoDB</p>
             </div><div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <SiTailwindcss />
              <p>Taliwindcss</p>
             </div>
              </div>
             </div>


             <div className='lg:flex '>
             <div>
              <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaBootstrap />
              <p>Bootstrap</p>
             </div>
             <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaDatabase />
              <p>Database Management System</p>
             </div><div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaComputer />
              <p>Computer Networks</p>
             </div><div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <GrSystem />
              <p>Operating System</p>
             </div>
               </div>
               <div>
              <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaPhp />
              <p>PHP</p>
             </div>
             <div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <FaLinux />
              <p>Linux</p>
             </div><div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <GiArtificialIntelligence />
              <p>AI/ML</p>
             </div><div className='flex items-center  gap-2 text-richblack-800 font-inter p-5 '>
              <SiInstructure />
              <p>Data-Structure</p>
             </div>
               </div>
             </div>

            
            </div>

       </div>

    </div>
  )
}
