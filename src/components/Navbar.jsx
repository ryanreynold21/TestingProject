import React, { useState } from 'react'
import { removeUser } from '../features/authSlice'
import { useLogoutMutation } from '../features/contentApi'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [panding,setPending] = useState(false)
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation(token);

    const logoutHadler = async () => {
        setPending(true)
        const {data} = await logout(token);
        if(data?.success){
          navigate('/login')
          dispatch(removeUser())
        }
      }
    return (
    <div>
        <div className=" flex justify-between bg-stone-200 w-screen">
      <div className=" p-5 text-xl">MMS-Contect</div>
        <div className=" flex items-center justify-center">
        <h1 className=' p-5'>{user?.name}</h1>
          {panding ? (
            <div className=" mr-10">
              <button className=' px-4 py-2 border border-black bg-stone-400 cursor-not-allowed rounded-md shadow-md' disabled>Loading</button>
            </div>
          ) : (
            <div className=" mr-10">
              <button onClick={logoutHadler} className=' hidden sm:block px-4 py-2 border border-black rounded-md shadow-md'>Logout</button>
            </div>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
          <div className="block sm:hidden text-2xl mr-10 border border-black p-2 rounded-md shadow-md">
           <AiOutlineMenu />
          </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink to={'/'}>
                      <li className=' text-sm'>
                          <h1>Dashboard</h1>
                      </li>
                  </NavLink>
                  <NavLink to={'/create'}>
                      <li className=' text-sm'>
                          <h1>Create contact</h1>
                      </li>
                  </NavLink>
                  <NavLink to={'/profile'}>
                      <li className=' text-sm'>
                          <h1>Profile</h1>
                      </li>
                  </NavLink>
                  <li onClick={logoutHadler} className=' text-sm'>
                      <h1>Logout</h1>
                  </li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
