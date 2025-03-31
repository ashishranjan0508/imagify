import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import CreditButton from './CreditButton';
import UserButton from './UserButton';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Navbar = () => {
    const {user} = useContext(AppContext)
    const {setShowLogin} = useContext(AppContext);
    // console.log("Hola")
    // console.log(user);
    // console.log("Hola")
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between py-4'>
            <Link to={'/'}>
                <img src={assets.logo} alt='' className='w-28 sm:w-32 md:w-36 lg:w-40' />
            </Link>
            
            {user ?
                <div className='flex items-center gap-4 sm:gap-4 md:gap-6 lg:gap-8'>                    
                     <CreditButton label={"Credit left: 10"}></CreditButton>                     
                     <UserButton></UserButton>
                </div>
                :
                <div className='flex items-center gap-4 sm:gap-4 md:gap-6 lg:gap-8'>
                    <p onClick={() => { navigate('/buy') }} className='cursor-pointer'>Pricing</p>
                    <button className='className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                    focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-0.5 me-2 mb-2 mt-3"'
                    onClick={()=>{setShowLogin(true)}} >Login</button>
                </div>
            }
        </div>
    )
}
