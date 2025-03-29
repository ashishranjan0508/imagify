import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return ( 
    <div className='flex items-center justify-between gap-4 py-3 mt-20 pb-10 '>
      <div className='flex items-center'>
        <Link to={'/'}>
        <img src={assets.logo} alt='' width={150} className='border-r border-gray-400 px-2'></img>
        </Link>

            <h1 className='flex-1 border-1 border-gray-400 pl-4 text-sm
             text-gray-500 max-sm:hidden'>All right reserved. | Copyright @imagify</h1>
        </div>
        <div className='flex gap-2.5'>
           <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt='Facebook' width={35} />
           </a>
           <a href="https://www.instagram.com/a_ashish_ranjan?igsh=MTY3cjNkNWJjd3VpeA==" target="_blank" rel="noopener noreferrer">
              <img src={assets.instagram_icon} alt='Instagram' width={35} />
           </a>
  
           <a href="https://x.com/AshishRanj11019?t=FgidLYVfcVqp18aRh-M6Mw&s=09" target="_blank" rel="noopener noreferrer">
               <img src={assets.x_icon} alt='X' width={35} />
           </a>
      </div>
    </div>
  )
}

export default Footer
