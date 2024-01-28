import React from 'react'
import toast from 'react-hot-toast';
import "../App.css";

const DownloadSection = (props) => {
    const mediaArr = props.media;
    const {setShowDownloadSection} = props;

    const clickHandler = () => {
        toast.success("Download Started");
        setShowDownloadSection(false);   
    }
  return (
    <div className='grid mt-[10vh] grid-cols-2 max-ipad:grid-cols-1 gap-5 max-ipad:mr-[10rem] max-md:mr-0  items-center max-md:gap-y-5 justify-center h-auto '>
      {
          mediaArr.map((items, key) => (
            <div key={key} className='flex flex-col gap-y-5 w-full h-full p-5 bg-[#DCF2F1] rounded-lg'>
              <h1 className='text-2xl max-sm:text-xl text-center text-[#11235A] font-semibold capitalize'>Download Your {items.type.split('/')[0]} here</h1>
              <img loading='lazy' src={items.thumb} className='max-h-[400px] w-full object-contain' alt="Thumbnail Not Found" />
              <a onClick={clickHandler} href={items.url} className=' cursor-pointer capitalise bg-[#11235A] w-fit hover:scale-[1.03] transition-all duration-300 ease-in-out px-4 mx-auto py-2 text-white max-sm:text-sm rounded-lg'>Download {items.type.split('/')[0]}</a>
          </div>
          ))
      }
    </div>
  )
}

export default DownloadSection
