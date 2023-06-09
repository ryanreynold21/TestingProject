import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Menubar from './Menubar'

const RootLayout = ({children}) => {
  return (
    <div className=''>
      <div className="">
        <Navbar />
      </div>
      <div className=" flex">
        <Menubar />
        {children} 
      </div>
    </div>
  )
}

export default RootLayout
