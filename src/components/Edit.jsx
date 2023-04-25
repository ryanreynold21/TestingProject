import React, { useState } from 'react'
import {FiEdit2} from 'react-icons/fi'
import { useUpdateContactMutation } from '../features/contentApi'

const Edit = ({contact}) => {
  const token = localStorage.getItem("token");
  const [name,setName] = useState(contact?.name);
  const [phone,setPhone] = useState(contact?.phone);
  const [email,setEmail] = useState(contact?.email);
  const [address,setAddress] = useState(contact?.address);
  const [updateContact] = useUpdateContactMutation();

  const submitHandler = async(e) => {
    e.preventDefault();
    try{
        const pcontact = {name,phone,email,address}
        console.log(contact)
        const data = await updateContact({id:contact?.id,pcontact,token});
        console.log(data)
    }catch(error){
        console.log(error)
    }
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
}

  return (
    <div className=''>

<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form action="" onSubmit={submitHandler}>
      <div className=" mt-5">
        <label htmlFor="">Name</label>
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="asdf" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Phone</label>
        <input
        value={phone}
        onChange={e => setPhone(e.target.value)}
        type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="asdf@gmail.com" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Email</label>
        <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Address</label>
        <input
        value={address}
        onChange={e => setAddress(e.target.value)}       
        type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 w-full " placeholder="" required/>
      </div>
      <div className=" mt-5 modal-action">
        <label htmlFor=" my-modal-6">
        <button className=' bg-stone-800 text-white px-8 rounded-md py-2'>Save</button>
        </label>
      </div>
      </form>
  </div>
</div>
    </div>
  )
}

export default Edit
