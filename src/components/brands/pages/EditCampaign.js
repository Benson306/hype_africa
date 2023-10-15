import React from 'react'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'

function EditCampaign() {
    const { campaign_id, user_id } = useParams();

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <Navbar />
        <div className='p-4 ml-16'>
            
            <h1 className='text-sm mb-3 p-3 uppercase font-bold text-gray-700'>Edit Campaign</h1>

        </div>
    </div>
  )
}

export default EditCampaign
