import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Tables from '../components/Tables'
import Menubar from '../components/Menubar'
// import Pagination from '../components/Pagination'

const Dashboard = () => {
  const token = localStorage.getItem("token");
  return (
    <div className=' bg-[#F8FAFB]'>
        <Navbar />
      <div className=" flex">
        <Menubar />
         <Tables />
        {/* <Pagination /> */}
      </div>
    </div>
  )
}

export default Dashboard;
