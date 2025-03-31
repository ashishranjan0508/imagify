import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import {AppContext} from '../context/AppContext'

export const BuyCredit = () => {

  const {user} = useContext(AppContext);
  return (
    <div>
     <div className="flex flex-col items-center">
       <p className="bg-white border border-lime-200
       rounded-full px-4 py-1 text-gray-600 text-xs mt-16">
        OUR PLANS
       </p>
       <p className="mt-7 mb-10 text-3xl text-gray-800">Choose the plans</p>
     </div>
  
    <div>

      <div
        className="flex flex-wrap md:flex-nowrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-14"
      >
        {plans.map((items, index) => (
          <div
            key={index}
            className="bg-gray-200 py-6 border border-gray-300 shadow-md rounded-md 
            min-w-[250px] max-w-[300px] flex flex-col items-center hover:scale-105  transition-all duration-500"
          >
            <img src={assets.logo_icon} alt="" className="w-12 h-12 mb-2" />
            <h1 className="pt-2 pb-1 font-medium">{items.id}</h1>
            <h1 className="text-gray-600 text-sm text-center">{items.desc}</h1>

            <div className="pt-10 flex items-baseline gap-2">
              <h1 className="text-5xl text-gray-600 whitespace-nowrap">
                $ {items.price}
              </h1>
              <h1 className="text-sm text-gray-500 whitespace-nowrap">
                / {items.credits} credits
              </h1>
            </div>
            <button className="relative px-10 py-2 mt-10 text-gray-200 rounded-lg
                  bg-black border border-transparent transition-all 
                  before:absolute before:inset-0 before:-z-10 before:rounded-md
                  before:bg-gradient-to-r before:from-green-500 before:via-green-500 before:to-green-500
                  before:blur-md before:opacity-75 hover:before:opacity-100">
                  {user ? 'Purchase' : 'Get started'}
            </button>

          </div>
        ))}
      </div>
    </div>
  </div>
  

  )
}
