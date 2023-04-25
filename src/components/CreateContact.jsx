import React, { useState } from 'react'
import { useCreateContactMutation } from '../features/contentApi'
import { useNavigate } from 'react-router-dom'

const CreateContact = () => {
    const token = localStorage.getItem('token')
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [createContact] = useCreateContactMutation();
    const navigate = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault();
        try{
            const contact = {name,phone,email,address}
            console.log(contact)
            const data = await createContact({token,contact});
        }catch(error){
            console.log(error)
        }
        setName('');
        setPhone('');
        setEmail('');
        setAddress('');
    }

  return (
    <div className=' mt-10 ml-10'>
<label htmlFor="my-modal-6" className=" bg-white text-black px-4 py-2 rounded-md shadow-md">Create New Contact</label>
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box relative">
  <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
   <h3 className=' font-bold text-xl text-center'>Create your own Contact</h3>
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
        <button className=' bg-stone-800 text-white px-8 rounded-md py-2'>Create</button>
        </label>
      </div>
      </form>
  </div>
</div>
    </div>
  )
}

export default CreateContact
