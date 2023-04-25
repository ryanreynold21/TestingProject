import React from 'react'
import { useContactQuery, useDeleteContactMutation } from '../features/contentApi'
import {AiOutlineDelete} from 'react-icons/ai';
import {FiEdit2} from 'react-icons/fi'
import Swal from 'sweetalert2'
import Edit from './Edit'

const Tables = () => {
    const token = localStorage.getItem('token');
    const {data} = useContactQuery({token})
    const [deleteContact] = useDeleteContactMutation();

    const removeContact = ({id,token}) => {
      console.log(id)
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
      <div className="overflow-x-auto p-10">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th></th>
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
                        <label htmlFor="my-modal-3" className="">
                          <button className=' pointer-events-none text-xl cursor-pointer rounded-md shadow-md px-4 py-2 border-2 border-stone-400 mr-5'> <FiEdit2 /> </button>
                    <Edit contact={contact} />
                         </label>
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
