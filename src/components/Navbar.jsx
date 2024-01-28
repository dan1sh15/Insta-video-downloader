import React from 'react';
import {TbRefresh} from "react-icons/tb";
import LoadingBar from "react-top-loading-bar";

const Navbar = (props) => {
    const progress = props.progress;
  return (
    <div className=' h-[10%] fixed z-20 block max-sm:h-auto max-sm:py-5 w-full bg-[#071333]'>
      <div className='w-11/12 mx-auto flex justify-between items-center text-white h-[100%]'>
          <p className='text-2xl max-sm:text-lg max-sm:text-center'>Instagram Video Downloader</p>

          <button onClick={() => { window.location.reload(); }} className='text-2xl flex items-center gap-x-3 hover:text-slate-300 transition-all duration-300 ease-in-out'><span className='max-md:hidden'>Refresh</span><TbRefresh /></button>
      </div>

      <LoadingBar
          height={3}
          color='#fff' 
          progress={progress}
      />
    </div>
  )
}

export default Navbar
