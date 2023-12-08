import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllCampaigns() {

    const { company_id, brand_id } = useContext(AuthContext);
    const navigate =  useNavigate('navigate');

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_campaigns/${brand_id}/all`)
        .then(response => response.json())
        .then(result => {
            setData(result);
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const handleDelete = (campaign_id) => {
        fetch(`${process.env.REACT_APP_API_URL}/del_campaign/${company_id}/${campaign_id}`,{
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
            <h1 className='text-sm mb-3 p-3 uppercase font-bold text-gray-700'>All Campaigns (Except Drafts)</h1>

            <div className='block lg:flex flex-wrap gap-4'>
            { 
                data.length > 0 && data.map( item => {
                    if(item.status == "complete" || item.status == "scheduled" || item.status == "publish"){
                        return (
                            <Link className='w-full lg:w-1/4' to={`/view_campaign/${item._id}`}>
                            <div class="border border-gray-200 rounded-lg shadow bg-slate-800">
                                <img src={`${process.env.REACT_APP_API_URL}/uploads/${item.cover}`} class="p-0 rounded-t-lg h-32 w-full"  alt="No image Uploaded"  />
                            
                                <div class="px-5 pb-3">
                                    <div className='flex justify-between items-center gap-4'>
                                        <h5 class="text-md font-semibold tracking-tight text-white mt-2">{item.title}</h5>
                                        <Link to={"#"} onClick={()=> handleDelete(item._id)} className='mt-2 z-1 rounded-full p-2'>
                                            <DeleteIcon style={{color: '#cc0000'}} size={20} />
                                        </Link>
                                    </div>
                                    
                                    <div className="text-xs font-semibold rounded text-sky-500 mb-1 capitalize">
                                        {item.industry}
                                    </div>
                                    <i className="text-xs font-semibold rounded text-white mb-1 capitalize">
                                        {item.type} Campaign
                                    </i>
                                    <br />
                                    <div className="bg-sky-200 text-xs font-semibold mr-2 px-1 py-0.5 rounded-lg text-slate-900 mb-1 inline-block capitalize font-mono">
                                        {item.status}
                                    </div>
                                    <div class="flex items-center justify-between align-middle">
                                        <span class="text-md font-bold text-white">$ {item.budget}</span>
                                        <Link to={`/edit_influencer_campaign/${item._id}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Campaign</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        )
                    }
                } )
            }
            
            </div>           

        </div>

    </div>
  )
}

export default AllCampaigns;
