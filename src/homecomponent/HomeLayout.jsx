import React from 'react'
import HomeHeader from './HomeHeader'
import { Outlet } from 'react-router-dom'
import HomeFooter from './HomeFooter'

const HomeLayout = () => {
  return (
    <div>
        <HomeHeader/>
        <Outlet/>
        <HomeFooter/>

    </div>
  )
}

export default HomeLayout