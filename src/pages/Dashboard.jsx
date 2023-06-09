import React, { useEffect, useState } from 'react'
import Tables from '../components/Tables'
import RootLayout from '../Layout/RootLayout'
// import Pagination from '../components/Pagination'

const Dashboard = () => {
  const token = localStorage.getItem("token");
  return (
    <RootLayout>
      <div className=' bg-[#F8FAFB] mt-20'>
          <Tables />
      </div>
    </RootLayout>
  )
}

export default Dashboard;
