import React from 'react'
import Navbar from '../components/Navbar'
import Tables from '../components/Tables'
import CreateContact from '../components/CreateContact'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <CreateContact />
      <Tables />
    </div>
  )
}

export default Dashboard
