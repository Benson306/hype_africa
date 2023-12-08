import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { AuthContext } from '../../utils/AuthContext';

function ViewCampaign() {
    const { id } = useParams();

    const { brand_id, company_id } = useContext(AuthContext);
    const navigate =  useNavigate();

    const [data, setData] = useState([]);
    const [doSentences, setDoSentences] = useState([]);
    const [dontSentences, setDontSentences] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_campaign/${id}`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setData(result);
            setDoSentences(result.dos.split(','));
            setDontSentences(result.donts.split(','));
        })
        .catch(err => {
            console.log(err);
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
                <div className='text-xs capitalize bg-green-700 rounded-xl text-white p-2'>{data.status}</div>
            </div>
                    

                <div className=' block lg:flex lg:gap-32 justify-center'>
                    <div>
                    <img src={`${process.env.REACT_APP_API_URL}/uploads/${data.cover}`} class="p-0 rounded-lg w-72 lg:w-96 flex mb-5"  alt="product image" />

                        <div className='text-gray-500 text-sm'>Campaign Title</div>
                        <div className='text-xs capitalize   font-bold mb-2'>{data.title}</div>

                        <div className='text-gray-500 text-sm'>Campaign Objective</div>
                        <div className='text-xs capitalize   font-bold mb-2'>{data.objective}</div>

                        <div className='text-gray-500 text-sm'>Industry</div>
                        <div className='text-xs capitalize   font-bold mb-2'>{data.industry}</div>

                        <div className='text-gray-500 text-sm'>Call To action</div>
                        <div className='text-xs capitalize   font-bold mb-2'>{data.call_to_action}</div>

                        <div className='text-gray-500 text-sm'>Budget</div>
                        <div className='text-xs capitalize   font-bold mb-2'>$ {data.budget}</div>

                        <div className='text-gray-500 text-sm'>DO' s</div>
                        {   doSentences.map( sentence => (
                            <div className='text-xs capitalize   font-bold mb-2'>{sentence}</div>
                        )) }

                        
                    </div>

                    <div>
                        <div className='text-gray-500 text-sm'>DONT' s</div>
                        {   dontSentences.map( sentence => (
                            <div className='text-xs capitalize   font-bold mb-2'>{sentence}</div>
                        )) }

                        <div className='text-gray-500 text-sm'>Start Date</div>
                        <div className='text-xs capitalize   font-bold font-mono mb-2'>{ data.startDate }</div>

                        <div className='text-gray-500 text-sm'>Duration</div>
                        <div className='text-xs capitalize   font-bold mb-2'>{data.numberOfDays} Days</div>

                        <div className='text-gray-500 text-sm'>End Date</div>
                        <div className='text-xs capitalize   font-bold mb-2 font-mono'>{data.endDate}</div>

                        <div className='text-gray-500 text-sm'>Prefered Gender of Creators</div>
                        <div className='text-xs capitalize   font-bold mb-2'>{data.gender}</div>

                        <div className='text-gray-500 text-sm'>Prefered Location of Creators</div>
                        <div className='text-xs capitalize   font-bold mb-2'>{data.location}</div>

                        <div className='text-gray-500 text-sm'>Prefered Age of Creators</div>
                        <div className='text-xs capitalize   font-bold mb-2'>{data.minAge} - { data.maxAge}</div>

                        <div className='text-gray-500 text-sm'>No. of followers Required</div>
                        <div className='flex items-center'>
                            <div className='text-xs capitalize   font-bold font-mono ml-4'>Instagram: </div>
                            <div className='ml-2 text-xs'>{data.instaFollowers}</div>
                        </div>

                        <div className='flex items-center'>
                            <div className='text-xs capitalize   font-bold font-mono ml-4'>Facebook: </div>
                            <div className='ml-2 text-xs'>{data.fbFollowers}</div>
                        </div>

                        <div className='flex items-center'>
                            <div className='text-xs capitalize   font-bold font-mono ml-4'>X: </div>
                            <div className='ml-2 text-xs'>{data.xFollowers}</div>
                        </div>

                        <div className='text-gray-500 text-sm'>Accounts/Hashtags To be Tagged</div>
                        <div className='flex items-center'>
                            <div className='text-xs capitalize font-bold font-mono ml-4'>Instagram: </div>
                            <div className='ml-2 text-xs'>{data.instagramTags}</div>
                        </div>

                        <div className='flex items-center'>
                            <div className='text-xs capitalize font-bold font-mono ml-4'>Facebook: </div>
                            <div className='ml-2 text-xs'>{data.fbTags}</div>
                        </div>

                        <div className='flex items-center'>
                            <div className='text-xs capitalize font-bold font-mono ml-4'>X: </div>
                            <div className='ml-2 text-xs'>{data.xTags}</div>
                        </div>

                    </div>

                </div>

        </div>
    }
    <div className='block lg:flex justify-center gap-10 mt-10 lg:mt-6 text-sm'>
        <Link to={`/edit_influencer_campaign/${company_id}/${id}`} className='bg-sky-900 p-2  rounded-lg text-white text-center w-32 font-bold hover:bg-sky-800'>
                Edit
        </Link>
        <button onClick={()=> navigate("/all_campaigns")} className='border border-red-500 ml-2 text-xs p-2 w-32  rounded-lg hover:bg-red-500 hover:text-white for-bold'>
                Close
        </button>
    </div>
            
            </div>
        </div>
    </div>
  )
}

export default ViewCampaign
