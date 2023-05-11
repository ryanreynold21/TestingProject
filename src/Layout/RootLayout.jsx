import React from 'react'
import Menubar from '../components/Menubar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className=''>
      <div className="">
        <Navbar />
      </div>
      <div className=" flex">
        <Menubar />
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
