import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../features/contentApi'
import { addUser } from '../features/authSlice'
import {RiEyeCloseLine,RiEyeLine} from 'react-icons/ri'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';


const Login = () => {
  const [eye,setEye] = useState("close");
  const [login] = useLoginMutation();
  const [isloading,setIsloading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues:{
      email:'admin@gmail.com',
      password:'admin123'
    },
    onSubmit: async(values) => {
      setIsloading(true)
      const {data} = await login(values)
      console.log(data)
      dispatch(addUser({user:data?.user,token:data?.token}))
      if(data?.success){
        navigate('/')
      }
    }
  })

  return (
    <div className=' flex-col sm:flex-row md:flex-row lg:flex items-center justify-evenly h-screen login'>
      <div className="lg:ml-10 pt-40 pl-4 sm:pl-0 sm:pt-0">
        <form action="" onSubmit={formik.handleSubmit}>
        <div className="p-12 rounded-md shadow-xl bg-white w-[330px]">
          <div className=" text-center">
            <h1 className=' text-xl font-bold text-stone-700'>Login</h1>
            <p className=' text-gray-600 text-sm mt-3'>Welcome to MMSIT</p>
          </div>
          <div className=" mt-5">
            <label htmlFor="">
             Email
            </label>
            <input
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="admin@gmail.com" required/>
          </div>
          <div className=" mt-5">
            <label htmlFor="">password</label>
            <div className=" flex items-center justify-center">
            <input
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            type={eye == "close" ? "password" : "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>

            { eye == "close" ? (
            <div onClick={() => setEye("open") } className=" ml-5 cursor-pointer">
             <RiEyeCloseLine />
            </div>
            ) : (
             <div onClick={() => setEye("close") } className=" ml-5 cursor-pointer">
              <RiEyeLine />
             </div>
            ) }
            </div>
          </div>
          {isloading ? (
            <div className=" mt-10">
              <button className=' bg-sky-300 text-white px-8 rounded-md py-2 w-full cursor-not-allowed' disabled>Loading</button>
            </div>
          ) : (
          <div className=" mt-10">
            <button className=' bg-sky-600 text-white px-8 rounded-md py-2 w-full'>Login</button>
          </div>
            )}
        <div className=" mt-10 text-center">
          <p>Doens't have account <a className=' text-blue-400' href={'/register'}>Register</a> </p>
        </div>
        </div>
        </form>
      </div>
      <div className=" hidden sm:hidden md:hidden lg:block  mb-5 font-semibold mr-32">
            <h1 className='text-[70px] text-sky-700'>Everything</h1>
            <h1 className='text-[70px] text-sky-600'>Property</h1>
            <h1 className='text-[70px] text-sky-500'>Manager</h1>
            <h1 className='text-[70px] text-sky-400'>Need</h1>
            <p className=' text-sm w-96 mt-10 text-end text-sky-700'>Lorem iem quaerat numquam assumendax placeat, sint deleniti minus voluptatem alias ipsum. Dicta.</p>
      </div>
    </div>
  )
}

export default Login
