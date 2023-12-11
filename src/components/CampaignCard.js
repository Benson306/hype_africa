import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from '../utils/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CampaignCard({ item }) {

    const { company_id, brand_id } = useContext(AuthContext);

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
                        <Link to={`/edit_influencer_campaign/${item._id}`} class="text-white bg--700 bg-sky-900 hover:bg-sky-800 rounded-lg text-sm px-2 py-1 text-center">Edit Campaign</Link>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default CampaignCard