import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div
      initial={{opacity:0.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
    >

    <div className='flex items-center flex-col'>
      <p className='text-4xl text-slate-800'>Create AI Images</p>
      <p className='py-1 text-slate-500 text-s'>Turn your imagination into visuals</p>
    </div>

    <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-100
     to-orange-100 p-8 rounded-lg shadow-sm max-w-5xl mx-auto my-4">
 
      <div className="w-full md:w-1/2">
         <img 
         src={assets.sample_img_1} 
         alt="" 
         className="rounded-lg shadow-lg  h-auto object-cover">          
         </img>
      </div>

      <div className="w-full md:w-1/2 px-6">
         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
         Introducing the AI-Powered Text to Image Generator
         </h2>
         <p className="text-gray-700 mb-4">
         Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
         </p>
         <p className="text-gray-700">
         Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
         </p>
      </div>


    </div>
     
  </motion.div>
    
  )
}

export default Description