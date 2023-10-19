import React from 'react'
import { Link } from 'react-router-dom'

function AddContentCampaign() {
  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <div className="fixed bg-gray-200 shadow-md p-2 w-full flex justify-between">
            <div className='align-middle p-1 ml-5 lg:ml-10'>
                <h1>HypeAfrica</h1>
            </div>
            <div className='gap-4 lg:gap-8 flex justify-end mr-5'>
                <Link to={""} className='hover:border-2 border-slate-900 hover:bg-transparent hover:text-sky-900 bg-sky-900 text-white p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
                    SAVE AS DRAFT
                </Link>

                <Link to={"/all_campaigns"} className='hover:bg-sky-900 hover:text-white text-sky-900 border-2 border-sky-900 border-solid p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
                    CLOSE
                </Link>
            </div>

        </div>

        <div className='mt-20'>
            Create Content Campaign

        </div>
    </div>
  )
}

export default AddContentCampaign
