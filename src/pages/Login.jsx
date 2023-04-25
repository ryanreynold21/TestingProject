import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../features/contentApi'
import { addUser } from '../features/authSlice'

const Login = () => {
  const [email,setEmail] = useState('admin@gmail.com');
  const [password,setPassword] = useState('admin123');
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const loginHandler = async(e) => {
     e.preventDefault();
     try{
       const userData = {email,password};
       const {data} = await login(userData)
       console.log(data)
       dispatch(addUser({user:data?.user,token:data?.token}))
       if(data?.success){
         navigate('/')
       }
     }catch(error){
       console.log(error)
     }
   }
  return (
    <div className=' flex items-center justify-center h-screen'>
      <form action="" onSubmit={loginHandler}>
      <div className=" p-20 mt-[100px] rounded-md shadow-xl bg-white w-96">
          <h1 className=' text-xl font-bold text-stone-700'>Login</h1>
        <div className=" mt-5">
          <label htmlFor="">Email</label>
          <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="asdf" required/>
        </div>
        <div className=" mt-5">
          <label htmlFor="">password</label>
          <input
           value={password}
           onChange={e => setPassword(e.target.value)}
          type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
        </div>
        <div className=" mt-5">
        <button className=' bg-stone-800 text-white px-8 rounded-md py-2'>Login</button>
      </div>
      </div>
      </form>
    </div>
  )
}

export default Login
