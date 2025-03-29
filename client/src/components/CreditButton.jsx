import React from 'react';
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';


const CreditButton = ({label}) => {
  const navigate = useNavigate();
  return (
    <div> 
    <button
      onClick= { () => { navigate('/buy') }}
      type="button"
      className="w-full text-gray-600 text-xs sm:text-sm md:text-md bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-4
      focus:ring-gray-300 font-medium rounded-full text-md px-5 py-1 me-2 mb-2 mt-3 flex items-center justify-center gap-2
      transition-transform duration-700 transform hover:scale-110">
      <img src={assets.credit_star} alt='' className='w-5 h-5' />
      {label}
    </button>
    </div>

  );
};

export default CreditButton;
