import React from 'react'
import Loginheader from './Loginheader'
import { Outlet } from 'react-router-dom'
import Loginfooter from './Loginfooter'

const LoginLayout = () => {
  return (
    <div className='bg-primary '>
<Loginheader/>
<Outlet/>
<Loginfooter/>

    </div>
  )
}

export default LoginLayout