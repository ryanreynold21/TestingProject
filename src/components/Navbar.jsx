import React from 'react'
import { removeUser } from '../features/authSlice'
import { useLogoutMutation } from '../features/contentApi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation(token);

    const logoutHadler = async () => {
        const {data} = await logout(token);
        if(data?.success){
          navigate('/login')
          dispatch(removeUser())
        }
      }
    return (
    <div>
        <div className=" flex justify-between bg-stone-200">
      <div className=" p-5 text-xl">MMS-Contect</div>
      <div className=" flex items-center justify-center">
      <h1 className=' p-5'>{user?.name}</h1>
      <div className=" mr-10">
         <button onClick={logoutHadler} className=' px-4 py-2 border border-black rounded-md shadow-md'>Logout</button>
      </div>
      </div>
        </div>
    </div>
  )
}

export default Navbar
