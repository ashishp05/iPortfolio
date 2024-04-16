import React from 'react'
import myphoto2 from "../assets/myphoto2.1.1.jpg"
import { TypeAnimation } from 'react-type-animation'
import { About } from './About';
import { Resume } from './Resume';
import { Skills } from '../components/Skills';
import Pdf from "../assets/myresume.pdf"
import { Link } from 'react-router-dom';
 import { IoIosGitNetwork } from "react-icons/io";
import Contact from './Contact';


export const Home = () => {
  return (
    <div className='w-fit  max-w-screen lg:overflow-x-hidden overflow-auto lg:h-screen bg-richblack-5 '>
       {/* Section Home */}
       <div className='flex lg:flex-col flex-row  w-full items-center justify-center relative'>
          <div >
             <img src={myphoto2} alt='myphoto2'
              className=' ' />
          </div>
          <div className='flex flex-col  lg:left-80 left-40 absolute mb-5'>
             <p className='text-5xl  text-richblack-900 font-inter font-bold relative '>Ashish Haripara</p>
             <div>
              <span className='text-2xl  font-semibold text-white'> I Am </span>
                    <TypeAnimation
                      style={{ text:'white',fontSize: '2.5em' }}
                      preRenderFirstString={true}
                      sequence={[
                        500,
                        ' Software Enginner', // initially rendered starting point
                        1000,
                        ' Coder',
                        1000,
                        ' Web Developer',
                        1000,
                        ' Freelancer',
                        500,
                      ]}
                      speed={50}
                      repeat={Infinity}
                    />
              </div>
              <div className='flex items-center text-richblack-25  gap-2 justify-center p-2 m-2 w-fit h-fit rounded-xl mt-5 bg-richblack-800'>
                   <Link to = {Pdf} target = "_blank">HireMe</Link>
                  <IoIosGitNetwork/>
                </div>
             


          </div>
       </div>
       {/* about */}
       <div> <About/></div>       
       {/* section Skills-JavaBasics , Dsa ,html-css , js , reactjs ,mongodb , taliwindcss , pythonbasics  */}
        <div>
          <Skills/>
        </div>
       {/* section resume */}
      <div>
        <Resume/>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  )
}
