import React from 'react'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
    <footer className='w-full flex shadow items-center justify-center flex-col gap-2 bg-secondary py-3'>

    <span className='text-white'>  	&copy; 2024 EDROH All rights reserved </span>

    <div className='flex items-center justify-center gap-2'>

    <Link className='text-[14px] hover:text-white duration-300 text-active ' to={"/"}> About </Link>
    <Link className='text-[14px] hover:text-white duration-300 text-active '  to={"/"}> Privacy Policy </Link>
    <Link className='text-[14px] hover:text-white duration-300 text-active '  to={"/"}> Licensing </Link>
    <Link className='text-[14px] hover:text-white duration-300 text-active '  to={"/"}> Contact </Link>
    </div>

    </footer>
  )
}

export default HomeFooter