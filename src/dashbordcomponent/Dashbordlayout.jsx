import { Outlet } from "react-router-dom"
 
import DashbordHeader from "./DashbordHeader"
import Aside from "./Aside"

 

const Dashbordlayout = () => {
  return (
    <div className="w-full flex relative items-start bg-secondary justify-center ">
    <div className="w-[15%]   bg-slate-900">
    <Aside/>
</div>

  <div className="w-[85%] px-6 ">
  <DashbordHeader/>
  <Outlet/>

  </div>
   
    </div>
     

  )
}

export default Dashbordlayout