import React from 'react'
import Navbar from '../components/Navbar'
import Menubar from '../components/Menubar'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  return (
        <div className=' bg-[#F8FAFB]'>
          <div className="card w-96 h-[600px] bg-base-100 shadow-xl m-20">
            <figure><img src="https://i.pinimg.com/564x/c6/82/40/c6824056ffb733ca09874439cf38acc7.jpg" alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">{user?.name}</h2>
              <h2>{user?.email}</h2>
              <div className="card-actions justify-end">
              <p>If a blahblash chews shoes whose shoes does he choose?</p>
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Profile
