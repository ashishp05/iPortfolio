import React from 'react'
import { personalinfo, personalinfo2 } from '../data/personalinfo'
import { FaChevronRight } from "react-icons/fa";


export const About = () => {
  return (
    <div>
      {/* section About */}
      <div className='flex flex-col w-full mx-auto p-5 bg-richblack-5 '>
          <h2 className='text-4xl  font-semibold'> About </h2>
          <div className='w-[100px] h-[3px] bg-blue-200 mt-1'></div>
          <div className='text-2xl text-richblack-500 w-full mx-auto p-2'>
          Hello, my name is Ashish Haripara, and I am a 3<sup>rd</sup> year student at
           Gujarat Technoligocal Univercity(GTU). I am  pursuing my degree in Information Technology(IT).
          </div>
          <div className='flex  gap-x-5 p-2'>
           
             <div className='flex flex-col m-5'>
               <h3 className='text-2xl font-medium  text-blue-300'>Software Enginner & Web Developer</h3>
               <p className='text-[16px] text-richblack-600 font-thin'>
              
               </p>
              <div className='flex lg:flex-row flex-col lg:items-center items-start ml-12 lg:ml-0 justify-center lg:gap-x-52 py-3'>
              <div> 
                  {
                    personalinfo.map((info , index) =>
                    {
                      return (
                        <div key={index} className='flex  items-center justify-start gap-3 pb-3 pt-3'>
                        <div className='text-blue-200'> 
                        <FaChevronRight /></div>
                        
                        <p className='text-[20px] text-richblack-900 font-semibold'> {info.title} :</p><p className='text-richblack-700 text-[18px]'> {info.value} </p>
                        </div>
                      )
                    })
                  }

                  
                  
               </div>
               <div> 
                  {
                    personalinfo2.map((info , index) =>
                    {
                      return (
                        <div key={index} className='flex  items-center justify-start gap-3 pb-3 pt-3'>
                        <div className='text-blue-200'> 
                        <FaChevronRight /></div>
                        
                        <p className='text-[20px] text-richblack-900 font-semibold'> {info.title} :</p><p className='text-richblack-700 text-[18px]'> {info.value} </p>
                        </div>
                      )
                    })
                  }

                  
                  
               </div>
               
              </div>
              <div className='text-richblack-900 font-thin'>
              I am a skilled programmer with 
                      JavaScript,React.js , and Node.js 
                      looking for a fresher role. I possess 
                      strong leadership qualities and thrive 
                      in collaborative team environments. 
                      With a passion for technology and 
                      attention to detail, I deliver high- 
                      quality results.
              I am committed to 
                      continuous learning and eager to 
                      contribute to a dynamic 
                      organization.
              </div>
             </div>
          </div>
       </div>
    </div>
  )
}
