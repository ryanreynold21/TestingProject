import React from 'react'
import { NavLink } from 'react-router-dom'

const Menubar = () => {
  return (
    <div className=' w-[300px] bg-[#0E2238] h-[1000px] hidden sm:block'>
        <div className="">
            <h1 className=' text-2xl text-white font-bold text-center m-10'>MMS-Contact</h1>
        </div>
        <div className=" text-[#7C8A97]">
            <ul className='flex-col flex gap-6 items-center'>
                <NavLink to={'/'}>
                    <li className=' text-xl'>
                        <h1>Dashboard</h1>
                    </li>
                </NavLink>
                <NavLink to={'/create'}>
                    <li className=' text-xl'>
                        <h1>Create contact</h1>
                    </li>
                </NavLink>
                <NavLink to={'/profile'}>
                    <li className=' text-xl'>
                        <h1>Profile</h1>
                    </li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Menubar
