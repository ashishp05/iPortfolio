import React from 'react'
import { Intro } from './Core/Intro'
import { NavItems } from './Core/NavItems'
import { DownLoadCV } from './Core/DownLoadCV'
export const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col lg:ml-0   lg:bg-black bg-white '>
            
            <div className='lg:flex hidden'><Intro/></div>
            <div ><NavItems /> </div>
           <div className='lg:flex hidden'> <DownLoadCV/></div>
          
      
    </div>
  )
}
