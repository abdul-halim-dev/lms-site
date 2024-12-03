import React from 'react'
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
import { SiClerk } from "react-icons/si";



const Signup = () => {



const formHandle = (e)=>{
e.preventDefault()
}



  return (
    <div className='bg-primary w-full p-[20px] sm:px-0 py-10 flex items-center justify-center '>
        
       <div className=' w-full sm:w-[500px] flex items-center justify-center flex-col gap-6 py-6 p-2 sm:p-6 bg-secondary rounded-xl shadow-lg '>

        <div className='w-full flex items-center justify-center flex-col gap-2'>
            <h3 className='text-white text-lg font-semibold   '> Create your account </h3>
            <p className=' text-subsecondary text-sm font-semibold '>Welcome! Please Fill in the Details to get started </p>
        </div>
         <div className=' w-full flex items-center justify-center gap-2'>

             <a className='w-[48%]  border-[1px] flex items-center justify-center gap-4 py-2 text-subsecondary font-semibold duration-200 transition-all hover:bg-primary hover:box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05) rounded-xl border-subsecondary' href="#"> 
               <span className='  rounded-full text-[14px] sm:text-2xl'> <FaGithub/> </span> Github
            </a>
          
             <a className='w-[48%]  border-[1px] flex items-center justify-center gap-4 py-2 text-subsecondary font-semibold duration-200 transition-all hover:bg-primary hover:box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05) rounded-xl border-subsecondary' href="#"> 
               <span className='  rounded-full text-[14px] sm:text-2xl'> <FaGoogle/> </span> Github
            </a>
        </div>

        <div className='w-full flex items-center justify-between '>
        <span className='w-[45%] bg-subsecondary h-[1px] '></span>
        <span className='text-white text-[14px] sm:text-lg'> or </span>
        <span className='w-[45%] bg-subsecondary h-[1px] '></span>

        </div>

        <form className='w-full flex items-center justify-center flex-col gap-4 sm:gap-6' onSubmit={formHandle}>
            <div className='w-full flex items-center justify-center gap-2  '>
            <div className='w-[50%] flex items-start justify-center flex-col gap-3'>
            <label className='text-white text-[14px] sm:text-lg  font-semibold ' htmlFor="firstname">First Name</label>
            <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium' type="text" name="firstname" id="firstname" />
        </div>

        <div className='w-[50%]  flex items-start justify-center flex-col gap-3'>
            <label className='text-white text-[14px] sm:text-lg  font-semibold ' htmlFor="lastname"> Last Name </label>
            <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium' type="text" name="lastname" id="lastname" />
        </div>    
             </div>

        <div className='w-full flex items-start justify-center flex-col gap-3' >
            <label className='text-white text-[14px] sm:text-lg  font-semibold ' htmlFor="email"> Email Address </label>
            <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium ' type="email" name="email" id="email" />
        </div>

        <div className='w-full flex items-start justify-center flex-col gap-3' >
            <label className='text-white text-[14px] sm:text-lg  font-semibold ' htmlFor="password"> Password </label>
            <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium' type="password" name="password" id="password" />
        </div>


    <button type='submit' className='w-full bg-active hover:bg-white hover:text-active duration-200 transition-all py-2 flex items-center justify-center gap-1 rounded-lg text-[16px] sm:text-xl  font-semibold text-white '> Continue <IoMdArrowDropright/> </button>

        </form>

        <div className='w-full flex items-center justify-center gap-1 border-b-[1px] border-subsecondary pb-[20px] '>
            <span className='text-subsecondary text-[14px] sm:text-lg  font-semibold'> Already have an account ?</span>
            <Link className='text-active text-[14px] sm:text-lg  font-semibold ' to="/login">  Sign in </Link>
        </div>

        <div className='w-full flex items-center justify-center gap-1 flex-col'>
            <Link  className='flex items-center justify-center text-[14px] sm:text-lg  font-semibold text-subsecondary' to={"/"}> Secured by  &nbsp; <SiClerk/>clerk  </Link>
            <Link className='text-[#f06916] text-[16px] sm:text-xl font-semibold  ' to={"/"}> Development Mode </Link>

        </div>
       </div>
        
        
        
        
    </div>
  )
}

export default Signup