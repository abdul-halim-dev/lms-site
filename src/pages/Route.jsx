import React, { useContext } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import SearchBook from './SearchBook'
import LoginLayout from '../Logincomponent/LoginLayout'
import CourseDetails from './CourseDetails'
import { UseContext } from '../component/UseContext'
import HomeLayout from '../homecomponent/HomeLayout'
import CourseCheckout from '../Logincomponent/CourseCheckout'
import AvailableCourse from '../Logincomponent/AvailableCourse'
import Dashbordlayout from '../dashbordcomponent/Dashbordlayout'
import Dashbord from '../dashbord/Dashbord'
import Billing from '../dashbordcomponent/Billing'
import Profile from '../dashbordcomponent/Profile'
import Course from '../dashbordcomponent/Course'
import Setting from '../dashbordcomponent/Setting'
import Singlepage from './Singlepage'


const LoginProtect = ({children})=>{
    const {input} =useContext(UseContext)

    if(!input){
        return <Navigate to={"/"} replace />
    }
    return children
}





 const Route = createBrowserRouter([



    {
        path:"/",
        element:<HomeLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            

        ]
    },
  
    {
        path:"/",
        element: <LoginProtect> <LoginLayout/> </LoginProtect>,
        children:[
           
            {
                path:"/courseDetails",
                element:<CourseDetails/>
            },
            {
                path:"/searchBook",
                element:<SearchBook/>
            },
            {
                path:"/courseCheckout",
                element:<CourseCheckout/>
            },
            {
                path:"/availableCourse",
                element:<AvailableCourse/>
            }
        ],
        
    },

    {
        path:"/",
        element:<Dashbordlayout/>,
        children:[
            {
                path:"/dashbord",
                element:<Dashbord/>
            },
            {
                path:"/dashbord/billing",
                element:<Billing/>
            },
            {
                path:"/dashbord/profile",
                element:<Profile/>
            },
            {
                path:"/dashbord/course",
                element:<Course/>
            },
            {
                path:"/dashbord/setting",
                element:<Setting/>
            }


        ]
    }
,
{
path:"/singlepage",
element:<Singlepage/>
}




 ])

export default Route