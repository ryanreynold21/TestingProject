import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import Menubar from '../Layout/Menubar'
import { useUpdateContactMutation } from '../features/contentApi'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {id} = useParams();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [address,setAddress] = useState();
    const [updateContact] = useUpdateContactMutation();

  
    const submitHandler = async(e) => {
      e.preventDefault();
      try{
          const contact = {name,phone,email,address}
          const data = await updateContact({id,contact,token});
      }catch(error){
          console.log(error)
      }
      setName('');
      setPhone('');
      setEmail('');
      setAddress('');
      navigate('/')
  }
  return (
    <div className=''>
        <div className=" flex">
          <div className=" mt-20 p-10 ml-20 border rounded-md border-stone-300 bg-stone-100 w-[600px] shadow-xl h-screen">
            <form action="" onSubmit={submitHandler}>
            <div className=" mt-5">
              <label htmlFor="">Name</label>
              <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
            </div>
            <div className=" mt-5">
              <label htmlFor="">Phone</label>
              <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              type="text" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
            </div>
            <div className=" mt-5">
              <label htmlFor="">Email</label>
              <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
            </div>
            <div className=" mt-5">
              <label htmlFor="">Address</label>
              <input
              value={address}
              onChange={e => setAddress(e.target.value)}       
              type="text" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 w-full " placeholder="" required/>
            </div>
            <div className=" mt-5 modal-action">
              <label htmlFor=" my-modal-6">
              <button className=' bg-[#0C3549] text-white px-8 rounded-md py-2'>Update</button>
              </label>
            </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Edit
