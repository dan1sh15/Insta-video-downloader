import React from 'react'
import "./Loader.css";

const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4 max-ipad:mr-[5rem] max-sm:mr-0'>
      <span className="loader"></span>
      <p className='text-xl'>Loading, Please Wait</p>
    </div>
  )
}

export default Loader
