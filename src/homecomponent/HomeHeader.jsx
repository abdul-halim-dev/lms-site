import React from 'react'
import { FaBell, FaUser } from 'react-icons/fa6'
import { IoBookOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <header className=' bg-primary w-full flex items-center shadow justify-between px-[20px] md:px-[30px] py-3'>
    <div className='flex items-center justify-center gap-10'>
        <Link className='text-xl font-semibold text-white' to="/" >EDROH </Link>
        <div className=' relative hidden sm:flex'>
            <input className=' shadow-md text-subsecondary text-lg font-medium rounded-full py-2 pl-8 px-4 bg-secondary border-none outline-[1px]  accent-black' type="search" name="search" id="search" placeholder='Search courses' />
            <span className='absolute top-[15px] left-2 text-lg text-subsecondary '> <IoBookOutline/> </span>
        </div>
        </div>   
        
        <div className='flex items-center justify-center gap-6'>
        <div className='shadow-md relative  cursor-pointer w-[28px] h-[28px] bg-white flex items-center justify-center text-primary  rounded-full '> <FaBell/>
        
        <span className='w-[8px] h-[8px] bg-indigo-500 -right-0 rounded-full absolute -top-0  '> </span>
         </div>

        <div className='flex items-center justify-center gap-2'>   
        <Link to={"/login"} className='px-4 py-1 font-semibold hover:bg-active hover:text-white duration-300 rounded-md text-subsecondary text-[14px] border-[1px] border-subsecondary '> Login </Link>
        <Link to={"/signup"} className='px-4 py-1 font-semibold bg-active text-white duration-300 rounded-md hover:bg-secondary text-[14px] border-[1px] border-subsecondary '> Signup </Link>

        </div>

        </div>
        


     </header>
  )
}

export default HomeHeader