import React from 'react'
import Navbar from '../Navbar'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../../utils/AuthContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyBrands() {

      const { company_id } =  useContext(AuthContext);

      const [brands, setBrands] = useState([]);
      const [campaigns, setCamapigns] = useState([]);

      useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/all_brands/${company_id}`)
        .then(response => response.json())
        .then(response => {
      
            fetch(`${process.env.REACT_APP_API_URL}/get_all_campaigns`)
            .then(newResponse => newResponse.json())
            .then(newResponse => {
              setBrands(response);
              setCamapigns(newResponse);
            })
            .catch(err => {
              console.log(err);
            })
        .catch(err => {
          console.log(err);
        })
      })
    })

      const handleDelete = (brand_id) => {
        fetch(`${process.env.REACT_APP_API_URL}/brand/${brand_id}`,{
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

    const [modalOpen, setModalOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
    const openModal = (name, logo) => {
      setBrandName(name);
      setBrandLogo(logo);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const [brandName, setBrandName] =  useState(null);
    const [brandLogo, setBrandLogo] = useState(null);
    const [selectedCampaigns, setSelectedCampaign] = useState([]);
  

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <Navbar />
        <ToastContainer />
        <div className='p-4 ml-16'>

        <h1 className='text-sm mb-3 p-3 uppercase font-bold text-gray-700'>My Brands</h1>

        <div className='w-5/6 mt-5 flex justify-start lg:justify-end mx-auto mb-5'>
            <Link to={"/add_brand"} className='bg-blue-800 text-white p-2 text-sm rounded-lg'>+ Add Brand </Link>
        </div>

        <div className='flex gap-4 flex-wrap'>

        { brands.map( brand => (  
        
        <Link onClick={(e)=>{
          let brandCampaigns = campaigns.filter(campaign => campaign.brand_id == brand._id)
          setSelectedCampaign(brandCampaigns);
          openModal(brand.brand_name, brand.brand_logo);
         } } class="w-full lg:w-1/4 border border-gray-200 rounded-lg shadow bg-slate-800">
          <img src={`${process.env.REACT_APP_API_URL}/uploads/${brand.brand_logo}`} class="p-0 rounded-t-lg h-32 w-full m-auto "  alt="No image Uploaded"  />
          
              <div className='flex justify-between items-center gap-4 mt-3 px-5'>
                  <h5 class="text-md font-semibold tracking-tight text-white">{brand.brand_name}</h5>
                  <Link to={"#"} onClick={()=> handleDelete(brand._id)} className=' z-100 rounded-full p-2'>
                      <DeleteIcon style={{color: '#cc0000'}} />
                  </Link>
              </div>

              <div className="px-5 text-md font-semibold mr-2 rounded text-sky-500 capitalize flex items-center gap-2 text-sm">
                  No of Campaigns: <div className='text-white'>{
                      campaigns.filter(campaign => campaign.brand_id == brand._id).length
                  }</div>
              </div>

              <div class="flex brands-center justify-between align-middle mt-3 ml-5 my-5 text-xs">
                  <Link to={`/edit_influencer_campaign/${company_id}/${brand._id}`} class="text-white bg-blue-700 hover:bg-blue-800  rounded-lg p-2 text-center ">Edit Brand</Link>
              </div>
        </Link> ))
      }

      </div>


      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-80">

          <div className="bg-white p-5 rounded-lg shadow-lg lg:w-1/4">
            <div className='flex justify-end mb-1 lg:mb-5'>
                <button
                    onClick={closeModal}
                    className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-full text-xs flex flex-end"
                >
                    X
                </button>
            </div>

            <div className='w-full'>

              <img src={`${process.env.REACT_APP_API_URL}/uploads/${brandLogo}`} class="p-2 rounded-t-lg h-52 m-auto border border-gray-300"  alt="No image Uploaded"  />
              <div className='text-md mb-2 text-center mt-2 font-bold'>{brandName}</div>
              <hr />

              <div className='mt-5 text-xs mb-2 text-sky-500 block'>Campaigns</div>

              {
                selectedCampaigns.length >0  ? selectedCampaigns.map(select => (
                  <div className='text-black hover:text-sky-400'>
                    <Link to={`/view_campaign/${select._id}`} className='text-xs'>
                        { select.title }
                    </Link>
                </div>
                )) : <div className='text-black text-xs'>You have no campaigns on this brand</div>
              }

              
            </div>
        </div>
        </div>
      )}


      </div>

        
    </div>
  )
}

export default MyBrands
