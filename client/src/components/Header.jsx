import React from 'react'
import { motion } from "framer-motion"
import { assets } from '../assets/assets'
import GenerateBtn from './GenerateBtn'

const Header = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col justify-center items-center
    text-center my-20'>

    <motion.div 
    initial={{opacity:0, y:-20}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.2, y:0}}  
    className='group flex items-center gap-1.5 border rounded-full border-slate-300
     px-3.5 py-0.5 bg-slate-100 hover:cursor-pointer'>  
       <p className='text-slate-500'>Best text to image generator</p>
       <img 
        src={assets.star_icon} 
        alt=''
        className="transition-transform duration-500 transform group-hover:rotate-180 group-hover:scale-150"
       />
    </motion.div>
     
    <motion.div 
    initial={{opacity:0, y:-20}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.4, y:0}}
    className='mt-10 text-4xl max-w-[290px] sm:text-6xl sm:max-w-[490px] 
     md:text-7xl md:max-w-[590px] lg:text-8xl lg:max-w-[790px]'>
    <p className='text-slate-800 leading-tight'>
        Turn text to <span className='text-blue-600'>image</span>, in seconds.
    </p>
    </motion.div>

    <motion.div
    initial={{opacity:0, y:-20}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.6, y:0}}
     className='mt-7 text-slate-600 text-center'>
        <p>Unleash your creativity with AI. Turn your imagination into visual art in seconds 
        – just type, and watch the magic happen.</p>
    </motion.div>

   <GenerateBtn></GenerateBtn>

    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1, duration:1}}
     className='flex  justify-center w-20 mt-16 gap-3'>
        {[...Array(6)].map((_, index) => (
          <img
         
           key={index} src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
          className='rounded-lg transition-transform duration-500 
          transform hover:rotate-45 hover:scale-'/>
        ))}
    </motion.div>

    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1.2,duration:0.8}}
     className='mt-2 text-stone-600 flex items-center'>
    Generated images from imagify
    </motion.div>

    </motion.div>
  )
}

export default Header