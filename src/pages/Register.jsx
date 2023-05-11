import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../features/contentApi'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Register = () => {
    const navigate = useNavigate();
    const [register] = useRegisterMutation();

    const formik = useFormik({
      initialValues : {
        name:'',
        email:'',
        password:'',
        password_confirmation:''
      },
      // validationSchema : Yup.object({
      //   name : Yup.string().max("Name must be 20 charactor or less").required("Name is required"),
      //   password : Yup.string().max("weak").required("password is required"),
      // }),
      onSubmit : async (values) => {
        const {data} = await register(values);
        console.log(data)
        if(data?.success){
            navigate('/login')
        }
      } 
    })

    const submitHandler = async(e) => {
        e.preventDefault();
        try{
            const user = {name,email,password,password_confirmation}
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className=' flex rounded-md shadow-2xl h-screen'>

     <div className=" bg-sky-500 text-center p-10 hidden sm:block md:block lg:block">
        <div className=" mt-[200px]">
            <h1 className=' text-white text-[30px] mb-5'>MMS-Contact</h1>
            <p className=' text-[10px] text-gray-200'>Lorem as,cere dignissimos odio ut fugiat dolore ipsam ei id eligendi sequi!</p>
        </div>
     </div>

     <div className=" bg-white w-full p-10">
      <div className=" flex-col text-end sm:flow-row md:flex-row lg:flex lg:ml-[600px] items-center">
        <h1 className=' sm:block text-[15px] text-stone-500'>Already have an account ?</h1>
        <button onClick={() => navigate('/login')} className=' px-6 py-1 border border-black rounded-md ml-2'>Login</button>
      </div>

      <div className=" mt-20">
        <h1 className=' font-semibold text-[25px]'>Register to MMS-Contect</h1>
        <p className=' text-stone-500'>Lorem ipsum dolor, sit amet consectetur.</p>
      </div>

      <form action="" onSubmit={formik.handleSubmit}>
      <div className=" mt-5">
        <label htmlFor="">Name</label>
        <input
        name='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="asdf" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Email Address</label>
        <input
        name='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="asdf@gmail.com" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Password</label>
        <input
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Confirm your password</label>
        <input
        name='password_confirmation'
        value={formik.values.password_confirmation}
        onChange={formik.handleChange}       
        type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
      </div>
      <div className=" mt-5">
        <button type='submit' className=' bg-sky-600 text-white px-8 rounded-md py-2'>Sing up</button>
      </div>
      </form>
     </div>
     
    </div>
  )
}

export default Register
