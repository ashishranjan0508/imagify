import React, { useState } from 'react'
import { assets } from '../assets/assets';

export const Result = () => {
  const [image ,setImage] = useState(assets.sample_img_2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
  <form className='flex flex-col min-h-[90vh] justify-center items-center '> 
  <div className='my-20'>
      <div className="relative">
         <img src={image} className="max-w-md rounded" alt="" />
         <span className='absolute bottom-0 left-0 h-1 
          bg-blue-400 w-full py-0.5 transition-all duration-[10s]'></span>
      </div>
      <h1 className="py-1 flex items-start">Loading...</h1>

     {!isImageLoaded &&
      <div className="flex w-full max-w-xl items-center bg-zinc-600 rounded-full mt-10">
         <input
            className="text-md px-3 flex-1 placeholder-color bg-transparent outline-none"
            placeholder="Describe what you want to generate."
            type="text"
         />
         <button
            type="submit"
            className="bg-slate-950  sm:px-10 py-2 mx-1 my-1
            text-slate-400 rounded-full">Generate
         </button>
      </div>
     }


    </div>
    
    {isImageLoaded && 
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm
    p-0.5 mt-10 rounded-full'>
      <p className='bg-transparent border border-zinc-900 
      text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
      <a href='image' download className='bg-zinc-900 px-10 py-3 cursor-pointer flex items-center rounded-full'>Download</a>
    </div>
    }
    </form>
  )
}
