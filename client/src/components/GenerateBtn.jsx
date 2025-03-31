import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

  const GenerateBtn = () => {
   const {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();

  const onclickHandler = () =>{
    if(user){
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  }


  return (
    <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, y: 0 }}
  className="flex justify-center w-full"
>
  <div
    onClick={onclickHandler}
    className="mt-9 gap-2 border flex items-center justify-center
      rounded-full px-5 py-2 bg-slate-950 text-white border-red-200 
      w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm 
      hover:scale-[1.022] transition-all duration-300 cursor-pointer"
  >
    <div className="flex items-center gap-x-1">
      <button className="text-center">Generate image</button>
      <img src={assets.star_group} className="w-4 h-4" />
    </div>
  </div>
</motion.div>

  
  );
}

export default GenerateBtn;
