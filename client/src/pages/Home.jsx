import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'




export const Home = () => {
  return (
    <div>
       <Header></Header>
       <Steps></Steps>
       <Description></Description>
       <Testimonials></Testimonials>
       <motion.div
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
       >
       <div className='flex-col flex items-center text-slate-800 text-3xl'>
       See the magic. Try now</div> 
       <GenerateBtn></GenerateBtn>
       </motion.div>
       
    </div>
   
  )
}
