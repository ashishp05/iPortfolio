import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF , FaInstagram ,FaWhatsapp ,FaLinkedinIn ,FaGithub} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='flex lg:hidden flex-col w-11/12 mx-auto m-2'>
       <h2 className='text-2xl'>Contact Me  </h2>
       <div className='w-28 h-1 bg-black'></div>
       <div className='  text-richblack-25 flex lg:hidden items-start justify-center rounded-full  '>
                        <Link to="https://github.com/ashishp05"  className='bg-richblack-800  m-2 p-2 rounded-full'> <FaGithub /></Link>
                        <Link className='bg-richblack-800  m-2 p-2 rounded-full'> <FaFacebookF /></Link>
                        <Link to="https://www.instagram.com/patel_ashish_185/" className='bg-richblack-800  m-2 p-2 rounded-full'>  <FaInstagram/></Link>
                        <Link to="//wa.me/7984816169" className='bg-richblack-800  m-2 p-2 rounded-full'>  <FaWhatsapp /></Link>
                        <Link to="https://www.linkedin.com/in/aashish-haripara-857675253" target='_blank' className='bg-richblack-800  m-2 p-2 rounded-full'> <FaLinkedinIn /></Link>
                      </div>
    </div>
  )
}
