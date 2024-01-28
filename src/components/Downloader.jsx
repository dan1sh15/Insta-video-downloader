import React, { useState } from 'react'
import DownloadSection from './DownloadSection';
import Loader from './Loader';
import Toast from "react-hot-toast";
import { FaPaste } from "react-icons/fa6";

const Downloader = (props) => {

    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [media, setMedia] = useState([]);
    const [showDownloadSection, setShowDownloadSection] = useState(false);
    const setProgress = props.setProgress;

    const changeHandler = (e) => {
        setLink(e.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        setProgress(10);
        
        setLoading(true);
        const url = process.env.REACT_APP_API_URL + link;

        setProgress(30);

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            const result = data?.result;
            setProgress(75);
            console.log(result);
            if(data?.status === false) {
                Toast.error("Failed to fetch data, please try again later");
                setLoading(false);
                setProgress(100);
                setShowDownloadSection(false);
                setLink("");
                return;
            }
            setMedia(result);

            setProgress(100);
            Toast.success("Success");
            setLoading(false);
            setShowDownloadSection(true);
            setLink("");
        } catch (error) {
            console.error(error);
            setProgress(100);
            setLoading(false);
            Toast.error("No data found");
            setShowDownloadSection(false);
            setLink("");
        }
    }
    const inputField = document.getElementById('link');
    const pasteHandler = async () => {
        try {
            const inputText = await navigator.clipboard.readText();
            if(inputText === null) {
                Toast.error("Couldn't copy from clipboard");
                console.log("cannot fetch from clipbpoard");
                return;
            }
            inputField.value = inputText;

            Toast.success("Copied from clipboard");

        } catch (error) {
            Toast.error("Couldn't copy from clipboard");
            console.log(error);
        }
    }

    const clickHandler = () => {
        pasteHandler();
    }

  return (
    <>
        {
            loading ? <Loader /> : showDownloadSection ? <DownloadSection media={media} setShowDownloadSection={setShowDownloadSection} /> : (
                <div className='flex mt-[10vh] rounded-3xl flex-col max-lg:gap-y-2 gap-y-4 items-center justify-evenly bg-[#EEF5FF] h-[75%] max-lg:h-[60%] max-md:h-[75%]  max-sm:w-full max-sm:h-full max-sm:bg-[#7FC7D9] max-sm:rounded-none max-ipad:w-[60%] max-ipad:mr-[5rem] max-md:mr-0 max-md:w-[70%] w-[50%]'>
                    <h1 className='text-3xl text-[#11235A] px-3 text-center font-bold tracking-tighter max-sm:text-3xl max-sm:tracking-normal '>Instagram Video Download</h1>
                    <form onSubmit={submitHandler} className='flex flex-col gap-y-5 max-sm:w-[80%] w-[60%]'>
                        <div className='flex items-center rounded-lg gap-x-3 bg-white pr-3 justify-between'>
                            <input type="text" 
                                required
                                placeholder='Enter the link to download'
                                className='border-none rounded-lg px-5 outline-none py-3 w-full'
                                name='link'
                                id='link'
                                value={link}
                                onChange={changeHandler}
                                onClick={(event) => {
                                    event.target.focus();
                                }}
                                onPaste={pasteHandler}
                            />
                            <FaPaste onClick={ clickHandler } className='text-2xl cursor-pointer text-[#11235A]' />
                        </div>
                        <button className='bg-[#11235A] max-sm:bg-[#071333] w-fit hover:scale-[1.03] transition-all duration-300 ease-in-out px-4 mx-auto py-2 text-white rounded-lg'>Search</button>
                    </form>
                </div>
            )
        }
    </>
  )
}

export default Downloader
