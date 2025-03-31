import React, { useState } from 'react'
import { assets } from '../assets/assets';
import {motion} from 'framer-motion'


export const Result = () => {
  const [image ,setImage] = useState(assets.sample_img_2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] =useState(true);
  const [input, setInput] =useState('');
  
  const onSubmitHandler = async (e) => {

  }

  return (
  <motion.form
      initial={{opacity:0.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
   onSubmit={onSubmitHandler}
  className='flex flex-col min-h-[90vh] justify-center items-center '> 
  <div className='my-20'>
      <div className="relative">
         <img src={image} className="max-w-md rounded" alt="" />
         <span className={`absolute bottom-0 left-0 h-1 py-0.5 bg-blue-400 
         ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}>            
         </span>
      </div>

      <h1 className={!loading ? 'hidden' : "py-1 flex items-start"}>Loading...</h1>

     {!isImageLoaded &&
      <div className="flex w-full max-w-xl items-center bg-zinc-600 rounded-full mt-10">
         <input
            onChange={(e) => {setInput(e.target.value)}} value={input}
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
      <p 
      onClick={()=>{setIsImageLoaded(false)}}
      className='bg-transparent border border-zinc-900 
      text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
      <a href='image' download className='bg-zinc-900 px-10 py-3 cursor-pointer flex items-center rounded-full'>Download</a>
    </div>
    }
    </motion.form>
  )
}
