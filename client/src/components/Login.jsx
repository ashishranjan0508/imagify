import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Login = () => {

    const [state, setState] = useState('Login');
    const {setShowLogin} =useContext(AppContext);


    useEffect(()=>{
        window.scrollTo(0, 0);
        document.body.style.overflow ='hidden';
        return ()=>{
            document.body.style.overflow ='unset';
        }
    },[])
   return (
    <div className='absolute top-0 bottom-0 right-0 left-0 z-10
    backdrop-blur-sm bg-black/30 flex justify-center items-center'>
    <form className='relative bg-gray-50 p-10 rounded-xl text-slate-500'>
      <div className='flex flex-col items-center'>
         <div className='text-black text-3xl'>{state}</div>
         <div className='mt-1'>{state != 'Login'}</div>
            {state === 'Login' ? 
            <h1 className='text-sm'>Welcome back! Please sign in to continue</h1>
             : <h1 className='text-sm'>Welcome! Please sign up to continue</h1>
            }
      </div>

     <div className='flex flex-col gap-5 mt-10 mb-7'>
          { state != 'Login' ?
            <div className='flex border rounded-full py-0.5 items-center'>
              <img src={assets.profile_icon} className='h-8 w-8'></img>
              <input type='text' placeholder='Full Name' required className='border-none outline-none'></input>
            </div>
            :""      
           }
          

          <div className='flex border rounded-full px-3 py-1.5 items-center'>
             <img src={assets.email_icon} className='h-5 w-5 backdrop-brightness-10 mr-1'></img>
             <input type='email' placeholder='Email Id' required className='border-none outline-none'></input>  
          </div>

          <div className='flex border rounded-full px-3 py-1.5 items-center'>
             <img src={assets.lock_icon} className='h-5 w-5 backdrop-brightness-10 mr-1'></img>
             <input type='password' placeholder='Password' required className='border-none outline-none'></input>  
          </div>         
     </div>
     <div>
        <a href="#" className="text-blue-500">{state === 'Login' ? "Forgot password?" : ""}</a>
     </div>
     
     <button className='bg-blue-600 w-full p-2 mt-2 hover:scale-105 transition duration-300
        justify-center rounded-full text-white'>{state === 'Login' ?'Login' : 'Signup'}</button>

      <div className='mt-5 flex flex-col items-center'>
        {state === 'Login' ? 
        <div className='flex gap-1'>
           <h1 className='text-gray-400'>Don't have an account?</h1>
           <span className='text-blue-500 underline hover:cursor-pointer' onClick={()=>{setState('Sign Up')}}>Sign up</span>
        </div>
        :
        <div className='flex gap-1'>
           <p className='text-gray-400'>Already have an account?</p>
           <span className='text-blue-500 underline hover:cursor-pointer' onClick={()=>{setState('Login')}}>Log in</span>
        </div>
        }
       </div>
        <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt='' className='absolute top-5 right-5 cursor-pointer'></img>
    </form>
    </div>
  )
}

export default Login