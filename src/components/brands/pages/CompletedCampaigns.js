import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { AuthContext } from '../../../utils/AuthContext';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

function CompletedCampaigns() {

  const { id } = useContext(AuthContext);

    const [data, setData] = useState([]);

    useEffect(()=>{
      
        fetch(`${process.env.REACT_APP_API_URL}/get_campaigns/${id}/complete`)
        .then(response => response.json())
        .then(result => {
            setData(result);
        })

    },[])

    return (
      <div className='w-full min-h-screen bg-neutral-300'>
          <Navbar />
  
          <div className='p-4 ml-16'>
              <h1 className='text-sm mb-3 p-3 uppercase font-bold text-gray-700'>Completed Campaigns</h1>
  
              <div className='flex flex-wrap'>
              { 
                  data.length > 0 && data.map( item => (
                      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img src={`${process.env.REACT_APP_API_URL}/uploads/${item.cover}`} class="p-0 rounded-t-lg"  alt="No image Uploaded" />
                      </a>
                      <div class="px-5 pb-5">
                          <div className='flex justify-between items-center'>
                              <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">{item.title}</h5>
                              <Link to={"#"} className='mt-2'><VisibilityIcon /></Link>
                          </div>
                          
                          <div className=" text-sm font-semibold mr-2 py-0.5 rounded text-blue-800 mb-1 mt-2">{item.industry}</div>
                          <div className="bg-sky-200 text-md font-semibold mr-2 px-1 py-0.5 rounded text-slate-900 mb-3 mt-1 font-serif inline-block">{item.status}</div>
                          <div class="flex items-center justify-between">
                              <span class="text-2xl font-bold text-gray-900 dark:text-white">${item.budget}</span>
                              <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Campaign</a>
                          </div>
                      </div>
                  </div>
                  ) ) 
              }
              </div>           
  
  
  
          </div>
      </div>
    )
}

export default CompletedCampaigns
