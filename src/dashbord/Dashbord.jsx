import { FaBook, FaGear, FaUser } from "react-icons/fa6"
import {  Link, useNavigate } from "react-router-dom"
import { RiBilliardsLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { PiBookOpenLight } from "react-icons/pi";
import { useState } from "react";




const Dashbord = () => {

  const [activeLink, setActiveLink] = useState();
  const navigate = useNavigate();

  const active = (path) => {
    setActiveLink(path); // Update the active link state
    navigate(path); // Navigate to the selected route
  };



const linkStyle =`flex gap-6 items-center text-[14px] hover:text-white duration-200 text-subsecondary font-semibold py-3 px-4 justify-start hover:bg-secondary w-full`
  return (
  
    
    <div className="w-full h-screen bg-primary text-white flex flex-col items-center justify-start ">

    <div className=" w-full flex items-center justify-between p-4 ">
    <div className=" flex items-center justify-center gap-2">
        <span> <FaBook/> </span>
    <Link className='text-xl font-semibold text-white' to="/dashbord" >EDROH </Link>
    </div>
    <span>
    <PiBookOpenLight/>
    </span>
    
    </div>

   <div className="w-full   flex items-center justify-center flex-col ">
   <div className="w-full flex items-center justify-center ">
    <div  onClick={() => active("/dashbord/course")}   
      className={`${activeLink === "/dashbord/course" ? 'active-link ' : ''} ${linkStyle}`}  >  <PiBookOpenLight/> Course </div>
    </div>

    <div className="w-full flex items-center justify-center ">
    <div
    onClick={() => active("/dashbord/billing")}
     className={`${activeLink === "/dashbord/billing" ? 'active-link ' : ''}  ${linkStyle}`}  >  <RiBilliardsLine/> Billing </div>
    </div>

    <div className="w-full flex items-center justify-center ">
    <div 
    onClick={() => active("/dashbord/profile")}
    className={`${activeLink === "/dashbord/profile" ? 'active-link ' : ''} ${linkStyle} `} >  <FaUser/> Profile </div>
    </div>

    <div className="w-full flex items-center justify-center ">
    <div  
    onClick={() => active("/dashbord/setting")}
    className={`${activeLink === "/dashbord/setting" ? 'active-link ' : ''} ${linkStyle}`}  >  <FaGear/> setting </div>
    </div>

   </div>
 


   <div className="w-[190px] flex items-center justify-center absolute left-0 bottom-0 ">
    <div  onClick={() => active("/dashbord")}   
      className="text-active flex gap-2 items-center text-[14px] font-semibold py-3 px-4 justify-start w-full"  >  <IoLogOutOutline className="text-lg"/> Course </div>
    </div>

 
    </div>
    
   
    
 
  )
}

export default Dashbord