import React from 'react'
import { assets } from '../assets/assets'

const UserButton = () => {
  return (
    <div className='flex items-center sm:gap-3 bg-blue-100 px-5 rounded-full pt-0.5 pb-0.5'>
       <p className=' text-gray-600 text-xs sm:text-sm md:text-md max-sm:hidden'>Hii.. Ashish</p>
       <div className='relative group'>
       <img src={assets.profile_icon} alt='' className='w-5 h-5 sm:w-7 
       sm:h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 drop-shadow'/>    
       
       <div className='absolute hidden group-hover:block shadow-md border
       top-full left-1/2 -translate-x-1/2 z-10 text-black rounded-lg px-2 py-0.5'>
            <ul><li>Logout</li></ul>
       </div>
       </div>
    </div>
  )
}
export default UserButton
