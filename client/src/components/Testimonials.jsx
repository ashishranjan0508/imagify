import React from 'react'
import {motion} from 'framer-motion'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <motion.div 
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
    className='mt-12'>

     <div className='flex-col'>
      <div className='flex-col flex items-center'>
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-slate-900'>Customer testimonials</h1>
        <p className='mt-1 text-stone-600'>what Our Users Are Saying</p>
      </div>

  <div className='flex gap-3 flex-col sm:flex-row md:flex-row lg:flex-row w-full justify-center items-center my-5'> 
    {testimonialsData.map((items, index) => (
      <div key={index} className='bg-stone-200 px-5 py-5 border rounded-md shadow-md text-center flex flex-col items-center
       hover:scale-[1.021] tranisition-all duration-300'>
        <img src={items.image} className='w-20 h-20 rounded-full' alt='User' />
        <h1 className='text-lg font-semibold mt-2'>{items.name}</h1>
        <h1 className='text-sm text-gray-600'>{items.role}</h1>
        <div className='flex justify-center mt-2'>
          {
            [...Array(items.stars)].map((_, i) => (
            <img key={i} src={assets.rating_star} className='w-5 h-5' alt='' />
           ))
          }
        </div>
           <h1 className='mt-3 text-gray-700'>{items.text}</h1>
     </div>
            ))}
     </div>
     
     </div>
     
    </motion.div>
  )
}

export default Testimonials