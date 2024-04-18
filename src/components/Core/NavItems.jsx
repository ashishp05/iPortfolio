import React from 'react'
import {  Link } from 'react-scroll';
import { IoHome } from "react-icons/io5";
import { IoPersonCircleSharp ,IoDocumentOutline } from "react-icons/io5"; 
import { GiSkills } from "react-icons/gi";
import { RiContactsBook2Fill } from "react-icons/ri";


export const NavItems = () => {
  return (
   
    <div className=' lg:w-[100%]  mx-auto   text-white mt-10 '>
    <ul className='flex lg:flex-col flex-row lg:items-start items-center justify-center  text-xl lg:gap-y-7 gap-7  text-black lg:text-richblack-50'>
        <li className='flex items-center justify-center gap-x-2  hover:text-blue-100 rounded-full '>
        <IoHome className='lg:flex hidden'/> 
          <Link  activeClass="active"  to="Home" spy={true} smooth={true}  offset={50} duration={500}  >  Home</Link> 
        </li>

      <li className='flex items-center justify-center gap-x-2  hover:text-blue-100 '>
      <IoPersonCircleSharp className='lg:flex hidden' />
      <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} >About</Link>
      </li>

      <li className='flex items-center justify-center gap-x-2  hover:text-blue-100'>
      <GiSkills className='lg:flex hidden'/> 
      <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500} >Skills</Link>
      </li>

      <li className='flex items-center justify-center gap-x-2  hover:text-blue-100'>
      <IoDocumentOutline className='lg:flex hidden'/>
      <Link  activeClass="active"  to="Resume" spy={true}  smooth={true} offset={50} duration={500} >Resume</Link>
      </li>

      <li className='flex items-center justify-center gap-x-2  hover:text-blue-100'>
      <RiContactsBook2Fill className='lg:flex hidden'/>
      <Link activeClass="active" to="Contact"    spy={true}  smooth={true} offset={50}  duration={500}  >Contact</Link> 
      </li>
    </ul>

    
  </div> 
  )
}
