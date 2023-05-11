import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Menubar from '../components/Menubar'
import { useCreateContactMutation } from '../features/contentApi'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

const Create = () => {
  const token = localStorage.getItem('token')
  // const [name,setName] = useState('');
  // const [phone,setPhone] = useState('');
  // const [email,setEmail] = useState('');
  // const [address,setAddress] = useState('');
  const [createContact] = useCreateContactMutation();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      address:''
    },
    onSubmit: async(values) => {
      console.log(values)
      const data = await createContact({token,values})
      console.log(data)
      // if(data?.success){
      //   navigate('/')
      // }
    }
  })

  const submitHandler = async(e) => {
      e.preventDefault();
      try{
          const contact = {phone,email,address}
          console.log(contact)
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
            <form action="" onSubmit={formik.handleSubmit}>
            <div className=" mt-5">
              <label htmlFor="">Name</label>
              <input
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              type="text" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
            </div>
            <div className=" mt-5">
              <label htmlFor="">Phone</label>
              <input
              name='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              type="number" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
            </div>
            <div className=" mt-5">
              <label htmlFor="">Email</label>
              <input
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
            </div>
            <div className=" mt-5">
              <label htmlFor="">Address</label>
              <input
              name='address'
              value={formik.values.address}
              onChange={formik.handleChange}     
              type="text" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 w-full " placeholder="" required/>
            </div>
            <div className=" mt-5 modal-action">
              <label htmlFor=" my-modal-6">
              <button type='submit' className=' bg-[#0C3549] text-white px-8 rounded-md py-2'>Create</button>
              </label>
            </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Create
