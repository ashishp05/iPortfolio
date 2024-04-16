import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 import { IoMdDownload ,IoIosGitNetwork } from "react-icons/io";
import Pdf from '../../assets/myresume.pdf';
export const DownLoadCV = () => {
   
  return (
    <div className=' '>
        <div className='flex items-center  justify-center p-2 m-2 w-fit h-fit rounded-xl mt-5 bg-richblue-50'>

        <Link to = {Pdf} target = "_blank">DownloadCV</Link>
      <IoMdDownload />
     
    </div>
    
    </div>
  )
}






