import React from 'react'
import Navbar from '../Navbar'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

function AllCampaigns() {
  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <Navbar />
      <div className='p-4 ml-16'>

            
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img src={require('../../../../src/images/electronics.jpg')} class="p-0 rounded-t-lg"  alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <div className='flex justify-between items-center'>
            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">Watch Ads Campaign</h5>
            <Link to={"#"} className='mt-2'><VisibilityIcon /></Link>
        </div>
        
        <div className=" text-xs font-semibold mr-2 py-0.5 rounded text-blue-800 mb-3 mt-2">Computers, Electronics & Technology</div>
        <div className="bg-sky-200 text-md font-semibold mr-2 px-1 py-0.5 rounded text-slate-900 mb-3 mt-1 font-serif inline-block">Active</div>
        <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-gray-900 dark:text-white">$300</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Campaign</a>
        </div>
    </div>
</div>


        </div>
    </div>
  )
}

export default AllCampaigns
