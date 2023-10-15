import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { AuthContext } from '../../../utils/AuthContext';

function ViewCampaign() {
    const { url } = useParams();

    const { id } = useContext(AuthContext);
    const navigate =  useNavigate();

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_campaign/${id}/${url}`)
        .then(response => response.json())
        .then(result => {
            setData(result);
        })
    },[])

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <Navbar />

        <div className='p-4 ml-16'>
            <div className='bg-white w-full md:w-3/4 m-auto rounded-lg shadow-md p-5 lg:p-10  mb-52 lg:mb-20'>

            <KeyboardBackspaceIcon onClick={()=> navigate("/all_campaigns")} />
    {
        data && 
        <div className='mt-5'>
            <div className='flex justify-end mb-3'>
                <div className='capitalize text-sm bg-lime-700 w-20 rounded-lg text-white p-2 '>{data.status}</div>
            </div>
            
                <div className=''>
                    <img src={`${process.env.REACT_APP_API_URL}/uploads/${data.cover}`} class="p-0 rounded-lg w-72 lg:w-96 flex mb-5"  alt="product image" />
                </div>

                <div className=' block lg:flex lg:gap-32 justify-center'>
                    <div>
                        <div className='text-gray-500 text-sm'>Campaign Title</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.title}</div>

                        <div className='text-gray-500 text-sm'>Campaign Objective</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.objective}</div>

                        <div className='text-gray-500 text-sm'>Call To action</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.call_to_action}</div>

                        <div className='text-gray-500 text-sm'>Industry</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.industry}</div>

                        <div className='text-gray-500 text-sm'>Budget</div>
                        <div className='capitalize text-lg font-bold mb-2'>$ {data.budget}</div>

                        <div className='text-gray-500 text-sm'>Start Date</div>
                        <div className='capitalize text-lg font-bold font-mono mb-2'>{data.startDate}</div>

                        <div className='text-gray-500 text-sm'>Duration</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.numberOfDays} Days</div>
                    </div>

                    <div>
                        <div className='text-gray-500 text-sm'>End Date</div>
                        <div className='capitalize text-lg font-bold mb-2 font-mono'>{data.endDate}</div>

                        <div className='text-gray-500 text-sm'>Prefered Location of Creators</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.location}</div>

                        <div className='text-gray-500 text-sm'>Prefered Age of Creators</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.minAge} - { data.maxAge}</div>

                        <div className='text-gray-500 text-sm'>Campaign Title</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.title}</div>

                        <div className='text-gray-500 text-sm'>No. of followers Required</div>
                        <div className='capitalize text-lg font-bold font-mono ml-4'>Instagram: {data.instaFollowers}</div>
                        <div className='capitalize text-lg font-bold font-mono ml-4'>Facebook: {data.fbFollowers}</div>
                        <div className='capitalize text-lg font-bold font-mono ml-4'>X: {data.xFollowers}</div>

                        {/* <div className='text-gray-500 text-sm'>Accounts/Hashtags To be Tagged</div>
                        <div className='capitalize text-lg font-bold font-mono ml-4'>Instagram: {data.instaFollowers}</div>
                        <div className='capitalize text-lg font-bold font-mono ml-4'>Facebook: {data.fbFollowers}</div>
                        <div className='capitalize text-lg font-bold font-mono ml-4'>X: {data.xFollowers}</div> */}

                        <div className='text-gray-500 text-sm'>Duration</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.numberOfDays} Days</div>
                    </div>

                </div>

        </div>
    }
    <div className='block lg:flex justify-center gap-10 mt-10 lg:mt-2'>
        <button className='bg-sky-500 p-2 lg:p-4  rounded-lg text-white w-32 font-bold hover:bg-sky-900'>
                Edit
        </button>
        <button className='border-2 border-red-500 ml-2 p-2 lg:p-4 w-32  rounded-lg hover:bg-red-500 hover:text-white for-bold'>
                Close
        </button>
    </div>
            
            </div>
        </div>
    </div>
  )
}

export default ViewCampaign
