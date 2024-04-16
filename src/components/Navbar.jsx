import React from 'react'
import { Intro } from './Core/Intro'
import { NavItems } from './Core/NavItems'
import { DownLoadCV } from './Core/DownLoadCV'
export const Navbar = () => {
  return (
    <div className='flex items-center justify-center flex-col lg:ml-0  ml-12 lg:bg-black bg-richblack-25 '>
        
            <div><Intro/></div>
            <div ><NavItems /> </div>
           <div className='lg:flex hidden'> <DownLoadCV/></div>
          
      
    </div>
  )
}
