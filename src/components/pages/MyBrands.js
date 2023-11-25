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

      useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/all_brands/${company_id}`)
        .then(response => response.json())
        .then(response => {
          setBrands(response);
        })
        .catch(err => {
          console.log(err);
        })
      })

      const handleDelete = (brand_id) => {
        fetch(`${process.env.REACT_APP_API_URL}/del_brand/${company_id}/${brand_id}`,{
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
  

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <Navbar />
        <ToastContainer />
        <div className='p-4 ml-16'>

        <h1 className='text-sm mb-3 p-3 uppercase font-bold text-gray-700'>My Brands</h1>

        <div className='flex gap-4 flex-wrap'>

        { brands.map( brand => (  
        
        <Link onClick={(e)=>{ openModal(brand.brand_name, brand.brand_logo) } } class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={`${process.env.REACT_APP_API_URL}/uploads/${brand.brand_logo}`} class="p-0 rounded-t-lg h-52 m-auto "  alt="No image Uploaded"  />
          

          <div class="bg-neutral-400">
              <div className='flex justify-between brands-center gap-4 mt-3 px-5 pb-2'>
                  <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">{brand.brand_name}</h5>
                  <Link to={"#"} onClick={()=> handleDelete(brand._id)} className='mt-2 z-1 bg-sky-100 rounded-full p-2'>
                      <DeleteIcon style={{color: 'red'}} />
                  </Link>
              </div>

              <div className="px-5 pb-2 text-md font-semibold mr-2 py-0.5 rounded text-sky-900 capitalize flex gap-2">
                  No of Campaigns: <div className='text-black'>21</div>
              </div>

              <div class="flex brands-center justify-between align-middle mt-2 px-5 pb-5">
                  <Link to={`/edit_influencer_campaign/${company_id}/${brand._id}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Brand</Link>
              </div>
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
                    className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-full text-sm flex flex-end"
                >
                    X
                </button>
            </div>

            <div className='w-full'>

              <img src={`${process.env.REACT_APP_API_URL}/uploads/${brandLogo}`} class="p-2 rounded-t-lg h-52 m-auto border border-gray-300"  alt="No image Uploaded"  />
              <div className='text-2xl mb-2 text-center mt-2 font-bold'>{brandName}</div>
              <hr />

              <div className='mt-5 underline'>Campaigns</div>

              
            </div>
        </div>
        </div>
      )}


      </div>

        
    </div>
  )
}

export default MyBrands
