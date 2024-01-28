import React from 'react'
import instaImg from "../assets/insta.png";
import Downloader from './Downloader';

const MainSection = (props) => {

    const setProgress = props.setProgress;

  return (
    <div className={`min-h-[100%] h-auto w-full flex relative`}>
        
        <div className=' w-[20%] max-md:hidden h-full bg-[#DCF2F1]' />

        <div className=' max-lg:top-[20%] max-md:hidden max-md:h-[20rem] max-wideScreen:w-[15rem] h-[30rem] w-[16rem] border-[6px] rounded-3xl max-wideScreen:left-[4rem] max-ipad:left-[6rem] top-[21%] left-[11.5rem] bg-black absolute  border-black'>
            <img src={instaImg} alt="Instagram" className='h-full w-full object-fit' />
        </div>

        <div className=' w-[80%] py-10 max-md:w-full max-md:justify-center bg-[#7FC7D9] flex items-center max-ipad:justify-end justify-center'>
            <Downloader setProgress={setProgress} />
        </div>
    </div>
  )
}

export default MainSection
