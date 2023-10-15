import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../utils/AuthContext';

function Drafts() {

  const { id } = useContext(AuthContext);
    const navigate =  useNavigate('navigate');

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_campaigns/${id}/draft`)
        .then(response => response.json())
        .then(result => {
          console.log(result)
            setData(result);
        })
        .catch(err => {
            console.log(err)
        })
    },[])

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <Navbar />
        <div className='p-4 ml-16'>
            <h1 className='text-sm mb-3 p-3 uppercase font-bold text-gray-700'>Drafts</h1>

            <div className='flex flex-wrap gap-4'>
            { 
                data.length > 0 && data.map( item => (
                            <Link to={`/view_campaign/${item._id}`}>
                            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img src={`${process.env.REACT_APP_API_URL}/uploads/${item.cover}`} class="p-0 rounded-t-lg  h-56"  alt="No image Uploaded"  />
                                
        
                                <div class="px-5 pb-5">
                                    <div className='flex justify-between items-center '>
                                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2 overflow-ellipsis">{item.title}</h5>
                                        <Link to={`/view_campaign/${item._id}`} className='mt-2 w-1/4'><VisibilityIcon /></Link>
                                    </div>
                                    
                                    <div className=" text-sm font-semibold mr-2 py-0.5 rounded text-sky-900 mb-1 mt-1 capitalize">
                                        {item.industry}
                                    </div>
                                    <i className=" text-sm font-semibold mr-2 py-0.5 rounded text-red-800 mb-1 mt-1 capitalize">
                                        {item.type} Campaign
                                    </i>
                                    <br />
                                    <div className="bg-sky-200 text-md font-semibold mr-2 px-1 py-0.5 rounded text-slate-900 mb-3 mt-2 inline-block capitalize font-mono">
                                        {item.status}
                                    </div>
                                    <div class="flex items-center justify-between align-middle">
                                        <span class="text-2xl font-bold text-sky-900 dark:text-white">$ {item.budget}</span>
                                        <Link to={`/edit_influencer_campaign/${id}/${item._id}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Campaign</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                      )
                    
                )
            }
            
            </div>           
            
        </div>
    </div>
  )
}

export default Drafts
