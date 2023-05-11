import React, { useEffect, useState } from 'react'
import Tables from '../components/Tables'
// import Pagination from '../components/Pagination'

const Dashboard = () => {
  const token = localStorage.getItem("token");
  return (
    <div className=' bg-[#F8FAFB]'>
        <Tables />
    </div>
  )
}

export default Dashboard;
