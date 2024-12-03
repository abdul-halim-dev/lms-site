 import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Route from './pages/Route'
import './App.css'
 
 const App = () => {
   return (
    <RouterProvider router={Route} />
   )
 }
 
 export default App