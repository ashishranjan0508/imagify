import React from 'react'
import { assets } from '../assets/assets'
import GenerateBtn from './GenerateBtn'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center
    text-center my-20'>

    <div className='group flex items-center gap-1.5 border rounded-full border-slate-300
     px-3.5 py-0.5 bg-slate-100 hover:cursor-pointer'>  
       <p className='text-slate-500'>Best text to image generator</p>
       <img 
        src={assets.star_icon} 
        alt=''
        className="transition-transform duration-500 transform group-hover:rotate-180 group-hover:scale-150"
       />
    </div>

    <div className='mt-10 text-4xl max-w-[290px] sm:text-6xl sm:max-w-[490px] 
     md:text-7xl md:max-w-[590px] lg:text-8xl lg:max-w-[790px]'>
    <p className='text-slate-800 leading-tight'>
        Turn text to <span className='text-blue-600'>image</span>, in seconds.
    </p>
    </div>

    <div className='mt-7 text-slate-600 text-center'>
        <p>Unleash your creativity with AI. Turn your imagination into visual art in seconds 
        – just type, and watch the magic happen.</p>
    </div>

       <GenerateBtn></GenerateBtn>

    <div className='flex  justify-center w-20 mt-16 gap-3'>
        {[...Array(6)].map((_, index) => (
          <img key={index} src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
          className='rounded-lg transition-transform duration-500 
          transform hover:rotate-45 hover:scale-'/>
        ))}
    </div>

    <div className='mt-2 text-stone-600 flex items-center'>
    Generated images from imagify
    </div>
    </div>
  )
}

export default Header