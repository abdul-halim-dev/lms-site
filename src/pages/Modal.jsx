import { useLockBodyScroll } from "@uidotdev/usehooks"
import { useState } from "react"
import { Link } from "react-router-dom";


const Modal = () => {

  const [close, setclose] = useState(true)
  useLockBodyScroll();

  const modalClose =()=>{
    setclose(!close)
  }
    
  return (
    <div className='w-full h-screen bg-slate-500/30 back fixed top-0 left-0 z-10  '>
    
    <button onClick={modalClose}>close</button>

    <Link to={'/signup'}> sign up </Link>
    
    </div>
  )
}

export default Modal