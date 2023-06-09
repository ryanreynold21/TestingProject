import React, { useState } from 'react'
import { removeUser } from '../features/authSlice'
import { useLogoutMutation } from '../features/contentApi'
import { useDispatch } from 'react-redux'
import { BsGear, BsSearch } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiUserPlus } from "react-icons/fi";


const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [panding,setPending] = useState(false)
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showProfile, setShowProfile] = useState(false);
    const [logout] = useLogoutMutation();

    const logoutHadler = async () => {
        setPending(true)
        const {data} = await logout(token);
        console.log(data)
        if(data?.success){
          navigate('/login')
          dispatch(removeUser())
        }
      }
    return (
      <div className=" flex w-full justify-between items-center gap-4 text-sm md:text-base  px-5 py-2  fixed top-0 z-10 bg-white">
      <div className="flex items-center justify-center gap-2 md:gap-5 my-5">
        <button className="menu text-2xl">
          <FcMenu />
        </button>
        <div className="hidden md:flex">
          <img
            src="https://www.gstatic.com/images/branding/product/2x/contacts_2022_48dp.png"
            alt=""
            className=" w-[30px] h-[30px]"
          />
        </div>
        <p className=" hidden md:block text-xl font-semibold text-slate-500">
          Contacts
        </p>
      </div>
      <div className=" bg-slate-50 rounded active:shadow-lg flex items-center justify-center shadow-slate-700 md:px-3 px-2 py-1">
        <button className="text-slate-700 text-md md:text-2xl">
          <BsSearch />
        </button>
        <input
          type="text"
          name="search"
          className=" outline-none px-1 md:px-3 md:py-1 py-0 md:w-[400px] text-slate-800 w-full bg-slate-50 "
          placeholder=" search"
        />
      </div>
      <div className="flex items-center justify-center md:gap-5">
        <button className=" hidden md:block ">
          <BsGear />
        </button>
        <button
          className=" border-2 border-blue-500 rounded-full"
          onClick={() => setShowProfile(!showProfile)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="..."
            className=" md:w-[30px]  md:h-[30px] w-[20px]  h-[20px]"
          />
        </button>

      </div>
    </div>
  )
}

export default Navbar
