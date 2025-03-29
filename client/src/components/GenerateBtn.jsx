import React from 'react';
import { assets } from '../assets/assets';

const GenerateBtn = () => {
  return (
    <div className="flex justify-center w-full">
      <div className='mt-9 gap-2 border flex items-center justify-center
            rounded-full px-5 py-2 bg-slate-950 text-white border-red-200 
            w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm 
            hover:scale-[1.022] transition-all duration-300'>
        <button onClick={() => {}}>Generate image</button>
        <img src={assets.star_group} className='w-4 h-4' />
      </div>
    </div>
  );
}

export default GenerateBtn;
