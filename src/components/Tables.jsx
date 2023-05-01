import React from 'react'
import { useContactQuery, useDeleteContactMutation } from '../features/contentApi'
import {AiOutlineDelete} from 'react-icons/ai';
import {FiEdit2} from 'react-icons/fi'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader/Loader'

const Tables = () => {
    const token = localStorage.getItem('token');
    const {data} = useContactQuery({token})
    console.log(data?.success)
    const [deleteContact] = useDeleteContactMutation();
    const navigate = useNavigate()

    const removeContact = ({id,token}) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteContact({id,token})
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }

    return (
    <div>
      {!data?.success && <Loader /> }
      <div className="overflow-x-auto w-[30rem] sm:w-[70rem] p-10">
        <table className="table w-full shadow-lg">
          {/* head*/}
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
              {data?.contacts?.data?.map(contact => {
                  return(
                      <tr key={contact?.id}>
                          <td>{contact?.name}</td>
                          <td>{contact?.phone}</td> 
                          <td className=' w-20'>
                            <div className=" flex">
                              <button onClick={() => removeContact({id:contact?.id,token})} className=' mr-5 rounded-md shadow-md text-red-600 text-xl cursor-pointer border-red-300 px-4 py-2 border-2'> <AiOutlineDelete /> </button>
                              <button onClick={() => navigate(`/edit/${contact?.id}`) } className=' text-xl cursor-pointer rounded-md shadow-md px-4 py-2 border-2 border-stone-400 mr-5'> <FiEdit2 /> </button>
                            </div>
                          </td>
                      </tr>
                  )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tables
