import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../utils/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Drafts() {

  const { id } = useContext(AuthContext);
    const navigate =  useNavigate('navigate');

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_campaigns/${id}/draft`)
        .then(response => response.json())
        .then(result => {
            setData(result);
        })
        .catch(err => {
            console.log(err)
        })
    },[data])

    const handleDelete = (campaign_id) => {
      fetch(`${process.env.REACT_APP_API_URL}/del_campaign/${id}/${campaign_id}`,{
        method:'DELETE'
      })
      .then((res)=> res.json())
      .then((response)=>{
        if(response == 'success'){
          toast.success('Success!', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored"
          });

          setTimeout(() => {
              navigate('/draft_campaigns');
            }, 2000);
          }
      })
      .catch(err => {
        console.log(err)
      })
    }

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <Navbar />
        <div className='p-4 ml-16'>
          <ToastContainer />
            <h1 className='text-sm mb-3 p-3 uppercase font-bold text-gray-700 text-center'>Drafts</h1>

              <div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-3/4 flex lg:mx-auto">

                  

                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">                      
                        <tr>
                          <th scope="col" class="px-3 py-1 lg:px-6 lg:py-3">
                            Image
                          </th>
                          <th scope="col" class="px-3 py-1 lg:px-6 lg:py-3">
                              Campaign Title
                          </th>
                          <th scope="col" class="px-3 py-1 lg:px-6 lg:py-3">
                              Date Created
                          </th>
                          <th scope="col" class="px-3 py-1 lg:px-6 lg:py-3">
                              Edit
                          </th>
                          <th scope="col" class="px-3 py-1 lg:px-6 lg:py-3">
                              Delete
                          </th>
                      </tr>
                  </thead>
                  <tbody>

                  { 
                data.length > 0 && data.map( item => (
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="px-3 py-1 lg:px-6 lg:py-3">
                        <img src={`${process.env.REACT_APP_API_URL}/uploads/${item.cover}`} class="p-0 rounded-t-lg h-20 m-2"  alt="No image Uploaded"  />
                        </td>
                        <th scope="row" class="px-3 py-1 lg:px-6 lg:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">                              
                          {item.title}
                          </th>
                          <td scope="col" class="px-3 py-1 lg:px-6 lg:py-3">
                              {item.startDate}
                          </td>
                          <td scope="col" class="px-3 py-1 lg:px-6 lg:py-3">
                              <Link to={`/edit_influencer_campaign/${id}/${item._id}`} className='bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md p-4'>
                                Edit
                              </Link>
                          </td>
                          <td scope="col" class="px-3 py-1 lg:px-6 lg:py-3">
                          <button onClick={() => handleDelete(item._id)} className='bg-red-600 hover:bg-red-500 text-white rounded-lg shadow-md p-4'>Delete</button>
                          </td>
                      </tr>
                ))
                }
                     
                  </tbody>
              </table>
          </div>

                    {
                      data.length < 1 && <div className='p-8 text-sky-900 text-lg text-center'>
                        You Have No Drafts
                      </div>
                    }
        
            
        </div>
    </div>
  )
}

export default Drafts
