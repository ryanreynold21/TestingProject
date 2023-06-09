import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import Menubar from '../Layout/Menubar'
import { useSingleContactQuery } from '../features/contentApi'
import Loader from '../components/Loader/Loader'

const Detail = () => {
    const {id} = useParams();
    const token = localStorage.getItem("token")
    const {data} = useSingleContactQuery({id,token})
    console.log(data)
    const [isPanding,setIsPanding] = useState(false)


    return (
        <div className=' bg-[#F8FAFB]'>
        {!data?.success && <Loader /> }
    <Navbar />
  <div className=" flex">
    <Menubar />
      <div className="card w-96 h-[600px] bg-base-100 shadow-xl m-20">
        <figure><img src="https://i.pinimg.com/564x/c6/82/40/c6824056ffb733ca09874439cf38acc7.jpg" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data?.contact?.name}</h2>
          <h2>{data?.contact?.phone}</h2>
          <div className="card-actions justify-end">
          <p>If a blahblash chews shoes whose shoes does he choose?</p>
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
  </div>
    </div>
  )
}

export default Detail
