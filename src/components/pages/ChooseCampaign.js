import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ChooseCampaign() {

    const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen '>

        <div className="fixed bg-gray-200 shadow-md p-2 w-full flex justify-between">
            <div className='align-middle p-1 ml-5 lg:ml-10'>
                <h1>Neza</h1>
            </div>
            <div className='gap-4 lg:gap-8 flex justify-end mr-2'>
                <Link to={"/all_campaigns"} className='hover:border border-slate-900 hover:bg-transparent hover:text-sky-900 bg-sky-900 text-white p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
                    Back To Dashbaord
                </Link>
            </div>

        </div>

        <div className='mt-44 lg:mt-12 m-auto p-8'>
            <img src={require('../../images/campaign.jpg')} className='w-3/4 lg:w-1/2 flex m-auto mb-5 rounded-lg' />
            <div className='flex justify-center text-center mb-5 font-extrabold text-xl font-serif tracking-wide'>
                What Type Of Campaign Would You Like To Create?
            </div>
            <div className='flex gap-4 lg:gap-10 align-middle justify-center'>
            <button onClick={()=> navigate('/create_influencer_campaign')} tooltip="fdfdsfds" className='bg-sky-900 hover:bg-white hover:border border-sky-900 hover:text-sky-900 rounded-xl text-white p-2 lg:p-4 text-sm lg:text-md'>
        Create Influencer Campaign
            </button>

            <button onClick={()=> navigate('/create_content_campaign')} className='border border-sky-900 hover:bg-sky-900 hover:text-white rounded-xl p-2 lg:p-4 text-sm lg:text-md'>
        Create Content Campaign
            </button>
        </div>
        </div>
      
    </div>
  )
}

export default ChooseCampaign
