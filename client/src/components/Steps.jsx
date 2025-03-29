import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col justify-center items-center
    text-center'>
       <div>
        <p className='text-slate-950 text-2xl max-w-[190px] sm:text-4xl sm:max-w-[290px]
        md:text-4xl md:max-w-[790px] lg:text-4xl lg:max-w-[1490px]'>How it works</p>
        <p className='text-stone-600 mb-10'>Transform words into Stunning Images</p>
       </div>
     

     <div>      
       {stepsData.map((item, index) =>(
        <div key={index} className='bg-slate-100 mb-5 pl-6 py-4 border rounded-lg
        drop-shadow-md cursor-pointer hover:scale-[1.021] tranisition-all duration-300'>
          <div className='flex items-center gap-2.5'>
          <img src={item.icon}
          className='w-9'></img>
          <div className='text-stone-900'>{item.title}</div>
          </div>
          <div className='text-stone-500 px-11 flex items-center text-xs '>{item.description}</div>
        </div>
        ))}
     </div>







    </div>
  )
}

export default Steps