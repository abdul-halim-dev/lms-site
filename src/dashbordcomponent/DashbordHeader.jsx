 
import {  FaUser } from 'react-icons/fa6'
import { IoBookOutline } from 'react-icons/io5'
import { CiDark } from "react-icons/ci";

 
 const DashbordHeader = () => {
   return (
    <header className='w-full bg-secondary  shadow flex items-center justify-between  py-3'>
        <div className='flex items-center justify-center'>
            <div className=' relative hidden sm:flex'>
                <input className=' shadow-md text-subsecondary text-lg font-medium rounded-full py-2 pl-8 px-4 bg-primary border-none outline-[1px]  accent-black' type="search" name="search" id="search" placeholder='Search courses' />
                <span className='absolute top-[15px] left-2 text-lg text-subsecondary '> <IoBookOutline/> </span>
            </div>
            </div>   
            
            <div className='flex items-center justify-center gap-6'>
            <div className='shadow-md relative  cursor-pointer flex items-center justify-center text-subsecondary text-2xl  rounded-full '> <CiDark/>
            
              </div>

            <div className='flex items-center justify-center gap-2'>   
                <span className='text-sm text-subsecondary sm:flex hidden '> Majestic glue</span>
                <span className='bg-active cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center text-xl shadow-lg '><FaUser/> </span>
            </div>

            </div>
            


         </header>
   )
 }
 
 export default DashbordHeader