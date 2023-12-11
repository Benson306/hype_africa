import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CampaignCard from '../CampaignCard';

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
                            <CampaignCard item={item} />
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
