import React, { useContext } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
 
import { listItem } from './Data'
import { FaLock, FaPlay } from 'react-icons/fa6'
import { UseContext } from '../component/UseContext'
import Modal from './Modal'
 
 
  

const Singlepage = () => {

const {isOpen, setisOpen} =useContext(UseContext)


  return (
    <div className='w-full flex  gap-1 p-5  '>

    <div className='w-[49%] bg-slate-500'>
    video section 
    </div>
    <div className='w-[49%] bg-primary  '>
    <div className='w-full flex items-center justify-center py-5'>
        <h1 className='text-white text-[25px] font-bold capitalize '> This is the total course modules</h1>
    </div>


    <Accordion type="single" collapsible className="  ">

{listItem.map((item)=>(
    <AccordionItem value={item.id}>
    
    <AccordionTrigger onClick={()=>setisOpen(!isOpen)} className="bg-subsecondary px-2 text-lg font-semibold relative "> {item.title}  
    <button  className='absolute right-8'> {item.isFree ==="free" ? <FaPlay/> : <FaLock/>}  </button>
    {isOpen  ? <Modal/> :""}
    </AccordionTrigger>
   
   <AccordionContent className="bg-white text-black px-2 text-lg font-medium ">
      {item.description}
   </AccordionContent>

 
</AccordionItem>
))}
  
</Accordion>


    </div>


    </div>
  )
}

export default Singlepage