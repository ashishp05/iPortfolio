import React from 'react'
import myphoto from "../../assets/myphoto1.jpg"
import { FaFacebookF , FaInstagram ,FaWhatsapp ,FaLinkedinIn ,FaGithub} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavItems } from './NavItems';
import { DownLoadCV } from './DownLoadCV';


export const Intro = () => {
  return (
    <div className=' lg:flex lg:flex-col flex-row items-center lg:justify-center justify-between  '>
                  <div className='lg:w-[300px]   flex  lg:flex-col flex-row lg:justify-center justify-between items-center lg:bg-black bg-white  '>
                    <div className='lg:flex hidden  items-center justify-start flex-col mx-auto w-[140px] mt-5 rounded-full bg-richblack-800 '>
                      <img src={myphoto} alt='myphoto1' className='shadow-2xl rounded-full p-[10px]' />
                    </div>
                    <h1 className='lg:visible text-[22px] mt-3 font-bold font-inter text-richblack-25 hidden'>Ashish Haripara</h1>
                    <div className='  text-richblack-25 lg:flex items-start justify-center rounded-full  hidden'>
                        <Link to="https://github.com/ashishp05"  className='bg-richblack-800  m-2 p-2 rounded-full'> <FaGithub /></Link>
                        <Link className='bg-richblack-800  m-2 p-2 rounded-full'> <FaFacebookF /></Link>
                        <Link className='bg-richblack-800  m-2 p-2 rounded-full'>  <FaInstagram/></Link>
                        <Link className='bg-richblack-800  m-2 p-2 rounded-full'>  <FaWhatsapp /></Link>
                        <Link className='bg-richblack-800  m-2 p-2 rounded-full'> <FaLinkedinIn /></Link>
                      </div>
          
            </div>

    </div>
  )
}
