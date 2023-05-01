import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../features/contentApi'

const Register = () => {
  const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password_confirmation,setPasswordComfirmation] = useState('');
    const navigate = useNavigate();
    const [register] = useRegisterMutation();


    const submitHandler = async(e) => {
        e.preventDefault();
        try{
            const user = {name,email,password,password_confirmation}
            const {data} = await register(user);
            console.log(data)
            if(data?.success){
                navigate('/login')
            }
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

      <form action="" onSubmit={submitHandler}>
      <div className=" mt-5">
        <label htmlFor="">Name</label>
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="asdf" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Email Address</label>
        <input
         value={email}
         onChange={e => setEmail(e.target.value)}
        type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="asdf@gmail.com" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Password</label>
        <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
      </div>
      <div className=" mt-5">
        <label htmlFor="">Confirm your password</label>
        <input
        value={password_confirmation}
        onChange={e => setPasswordComfirmation(e.target.value)}       
        type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
      </div>
      <div className=" mt-5">
        <button className=' bg-sky-600 text-white px-8 rounded-md py-2'>Sing up</button>
      </div>
      </form>
     </div>
     
    </div>
  )
}

export default Register
