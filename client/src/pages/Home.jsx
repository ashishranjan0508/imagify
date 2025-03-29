import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'
import Footer from '../components/Footer'




export const Home = () => {
  return (
    <div>
       <Header></Header>
       <Steps></Steps>
       <Description></Description>
       <Testimonials></Testimonials>
       <div className='flex-col flex items-center text-slate-800 text-3xl'>
       See the magic. Try now</div> 
       <GenerateBtn></GenerateBtn>
       

    </div>
   
  )
}
