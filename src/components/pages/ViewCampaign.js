import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { AuthContext } from '../../utils/AuthContext';

function ViewCampaign() {
    const { url } = useParams();

    const { id } = useContext(AuthContext);
    const navigate =  useNavigate();

    const [data, setData] = useState([]);
    const [doSentences, setDoSentences] = useState([]);
    const [dontSentences, setDontSentences] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_campaign/${id}/${url}`)
        .then(response => response.json())
        .then(result => {
            setData(result);
            setDoSentences(result.dos.split(','));
            setDontSentences(result.donts.split(','));
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
                    

                <div className=' block lg:flex lg:gap-32 justify-center'>
                    <div>
                    <img src={`${process.env.REACT_APP_API_URL}/uploads/${data.cover}`} class="p-0 rounded-lg w-72 lg:w-96 flex mb-5"  alt="product image" />

                        <div className='text-gray-500 text-md'>Campaign Title</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.title}</div>

                        <div className='text-gray-500 text-md'>Campaign Objective</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.objective}</div>

                        <div className='text-gray-500 text-md'>Industry</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.industry}</div>

                        <div className='text-gray-500 text-md'>Call To action</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.call_to_action}</div>

                        <div className='text-gray-500 text-md'>Budget</div>
                        <div className='capitalize text-lg font-bold mb-2'>$ {data.budget}</div>

                        <div className='text-gray-500 text-md'>DO' s</div>
                        {   doSentences.map( sentence => (
                            <div className='capitalize text-lg font-bold mb-2'>{sentence}</div>
                        )) }

                        
                    </div>

                    <div>
                        <div className='text-gray-500 text-md'>DONT' s</div>
                        {   dontSentences.map( sentence => (
                            <div className='capitalize text-lg font-bold mb-2'>{sentence}</div>
                        )) }

                        <div className='text-gray-500 text-md'>Start Date</div>
                        <div className='capitalize text-lg font-bold font-mono mb-2'>{ data.startDate }</div>

                        <div className='text-gray-500 text-md'>Duration</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.numberOfDays} Days</div>

                        <div className='text-gray-500 text-md'>End Date</div>
                        <div className='capitalize text-lg font-bold mb-2 font-mono'>{data.endDate}</div>

                        <div className='text-gray-500 text-md'>Prefered Gender of Creators</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.gender}</div>

                        <div className='text-gray-500 text-md'>Prefered Location of Creators</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.location}</div>

                        <div className='text-gray-500 text-md'>Prefered Age of Creators</div>
                        <div className='capitalize text-lg font-bold mb-2'>{data.minAge} - { data.maxAge}</div>

                        <div className='text-gray-500 text-md'>No. of followers Required</div>
                        <div className='flex'>
                            <div className='capitalize text-lg font-bold font-mono ml-4'>Instagram: </div>
                            <div className='ml-2'>{data.instaFollowers}</div>
                        </div>

                        <div className='flex'>
                            <div className='capitalize text-lg font-bold font-mono ml-4'>Facebook: </div>
                            <div className='ml-2'>{data.fbFollowers}</div>
                        </div>

                        <div className='flex'>
                            <div className='capitalize text-lg font-bold font-mono ml-4'>X: </div>
                            <div className='ml-2'>{data.xFollowers}</div>
                        </div>

                        <div className='text-gray-500 text-md'>Accounts/Hashtags To be Tagged</div>
                        <div className='flex'>
                            <div className='capitalize text-lg font-bold font-mono ml-4'>Instagram: </div>
                            <div className='ml-2'>{data.instagramTags}</div>
                        </div>

                        <div className='flex'>
                            <div className='capitalize text-lg font-bold font-mono ml-4'>Facebook: </div>
                            <div className='ml-2'>{data.fbTags}</div>
                        </div>

                        <div className='flex'>
                            <div className='capitalize text-lg font-bold font-mono ml-4'>X: </div>
                            <div className='ml-2'>{data.xTags}</div>
                        </div>

                    </div>

                </div>

        </div>
    }
    <div className='block lg:flex justify-center gap-10 mt-10 lg:mt-6'>
        <Link to={`/edit_influencer_campaign/${id}/${url}`} className='bg-sky-500 p-2 lg:p-4  rounded-lg text-white text-center w-32 font-bold hover:bg-sky-900'>
                Edit
        </Link>
        <button onClick={()=> navigate("/all_campaigns")} className='border-2 border-red-500 ml-2 p-2 lg:p-4 w-32  rounded-lg hover:bg-red-500 hover:text-white for-bold'>
                Close
        </button>
    </div>
            
            </div>
        </div>
    </div>
  )
}

export default ViewCampaign
