 import React from 'react'
import { FaBell, FaUser } from 'react-icons/fa6'
import { IoBookOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
 
 const Loginheader = () => {
   return (
    <header className='w-full bg-primary shadow flex items-center justify-between px-[20px] md:px-[30px] py-3'>
        <div className='flex items-center justify-center gap-10'>
            <Link className='text-xl font-semibold text-white' to="/searchBook" >EDROH </Link>
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
                <span className='text-sm text-subsecondary sm:flex hidden '> Majestic glue</span>
                <span className='bg-active cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center text-xl shadow-lg '><FaUser/> </span>
            </div>

            </div>
            


         </header>
   )
 }
 
 export default Loginheader