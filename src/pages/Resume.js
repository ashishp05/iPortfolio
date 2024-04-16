import React from 'react'
import { courses, education, projects } from '../data/personalinfo'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

export const Resume = () => {
  return (
    <div>
     <div className='flex flex-col p-5 w-full mx-auto  '>
       <div  className='text-4xl  font-semibold  '> Resume </div>
          <div className='w-[100px] h-[3px] bg-blue-200 mt-1'></div>
          <div className='text-2xl text-richblack-500 w-full mx-auto p-2 '>
          I am a skilled programmer with 
          JavaScript,React.js , and Node.js 
          looking for a fresher role. 
          </div>
         <div className='border-l bg-richblack-5 relative '>
         <Element name='Resume' className='w-5 h-5 bg-richblack-100 -left-[10px] top-[22px] absolute  rounded-full '></Element>
         <div className=' flex flex-col gap-y-7 p-3 '>
          <p  className='text-3xl font-medium ml-2'>Education</p>
          <div className=' flex lg:flex-row flex-col gap-y-5 lg:ml-0 ml-5 gap-x-5   '>
            {
              education.map((ele , index) =>
              {
                return (
                  <div key={index} className='flex flex-col  lg:w-[50%] w-full  justify-between  p-3 rounded-md hover:rounded-xl hover:scale-105 shadow-lg items-start gap-y-1 gap-x-3 bg-richblack-25 '>
                   <h3 className='text-xl font-600 font-semibold'> {ele.title} </h3>
                   <span className='bg-blue-50 px-1 rounded-sm'>{ele.duration} </span>
                   <p className='text-[18px] font-edu-sa'> {ele.institute} </p>
                   <p className='text-richblack-200'>{ele.desctiption} </p>

                  </div>
                )
              })
            }
          </div>

          </div>
          <div className=' flex flex-col gap-y-7 p-3 relative'>
         <div className='w-5 h-5 bg-richblack-100 -left-[10px] top-[22px] absolute  rounded-full '></div>

          <p className='text-3xl font-medium ml-2 '>Courses</p>
          <div className=' flex lg:flex-row flex-col gap-y-5 lg:ml-0 ml-5 gap-x-5 lg:w-fit w-full  '>
            {
              courses.map((ele , index) =>
              {
                return (
                  <div key={index} className='flex flex-col  lg:w-[50%] w-full  justify-between  p-3 rounded-md hover:rounded-xl hover:scale-105 shadow-lg items-start gap-y-1 gap-x-3 bg-richblack-25 '>
                   <h3 className='text-xl font-600 font-semibold'> {ele.title} </h3>
                   <span className='bg-blue-50 px-1 rounded-sm'>{ele.duration} </span>
                   <p className='text-[18px] font-edu-sa'> {ele.institute} </p>
                   <p className='text-richblack-200'>{ele.desctiption} </p>

                  </div>
                )
              })
            }
          </div>

          </div>

          <div className=' flex flex-col gap-y-7 p-3 relative'>
         <div className='w-5 h-5 bg-richblack-100 -left-[10px] top-[22px] absolute  rounded-full '></div>
          <p className='text-3xl font-medium ml-2'>Projects</p>
          <div className='flex lg:flex-row flex-col gap-y-5 lg:ml-0 ml-5 gap-x-5  '>
            {
              projects.map((ele , index) =>
              {
                return (
                  <div key={index} className='flex flex-col   lg:w-[50%] w-full    p-3 rounded-md hover:rounded-xl hover:scale-105 shadow-lg items-start gap-y-1  bg-richblack-25 '>
                   <h3 className='text-xl font-600 font-semibold'> {ele.title} </h3>
                   <span className='bg-blue-50 px-1 rounded-sm '>{ele.duration} </span>
                   <p className='text-richblack-200 '>{ele.desctiption} </p>
                    <p className='flex flex-col  text-blue-200'> <span className='text-black font-mono'> SKILLS :</span> {ele.skills} </p>
                    <Link to={ele.link} target='_blank' className='text-blue-100 text-[20px]' > Link</Link>
                    
                  </div>
                )
              })
            }
          </div>
          
           

          </div>

         </div>
       </div>
    </div>
  )
}   
