import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { AuthContext } from '../../../utils/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function ViewProfile() {
    const [data, setData] = useState(null);

    const { id } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/profile/${id}`)
        .then((response)=> response.json())
        .then(response => setData(response))
        .catch(err =>{
            toast.error('All Fields Must Be Filled', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    },[])
  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <ToastContainer />
        <Navbar />
        <div className='p-2 ml-12 mb-48 lg:ml-0 flex justify-center'>

            <div> 
                <h1 className='flex justify-center text-sm mb-3 p-3 uppercase font-bold text-gray-700'>My Profile</h1>

                { data && <div className='w-full shadow-lg rounded-lg p-10 bg-white'>

                <img src={`${process.env.REACT_APP_API_URL}/uploads/${data.brand_logo}`} className='shadow rounded-lg mx-auto  max-w-full h-auto  align-middle border-1 border-sky-900 mb-10 '  width={"200px"}/>

                    <div className='block lg:flex gap-52 mb-5'> 

                        <div className='mx-auto'>
                            <span className='font-bold mb-2'>Email</span>
                            <p className='mb-4 text-xl'>{data.email}</p>

                            <span className='font-bold mb-2'>Phone Number</span>
                            <p className='capitalize mb-4 text-xl'>{data.countryCode} {data.phoneNumber}</p>

                            <span className='font-bold mb-2'>Country</span>
                            <p className='mb-4 capitalize text-xl'>{data.country}</p>

                            

                        </div>

                        <div className='mx-auto'>
                            <span className='font-bold mb-2'>Brand Name</span>
                            <p className='capitalize mb-4 text-xl'>{data.brand_name}</p>

                            <span className='font-bold mb-2'>Company Name</span>
                            <p className='capitalize mb-4 text-xl'>{data.companyName}</p>

                            <span className='font-bold mb-2'>City</span>
                            <p className='capitalize mb-4 text-xl'>{data.city}</p>
                        </div>

                    </div>
                    <hr></hr>

                    <div className='flex justify-center mt-4'>
                        <div>
                            <span className='font-bold'>About The Brand</span>
                            <p className='capitalize mb-4 text-lg text-center'>{data.about}</p>
                        </div>
                    </div>


                    <div className='flex justify-center mt-4'>
                        <button onClick={()=>{navigate("/edit_profile")}} className='w-full bg-sky-700 p-2 lg:p-4 rounded-xl text-white hover:bg-sky-500 flex justify-center items-center gap-4'> 
                        <EditIcon /> Edit Profile</button>
                    </div>

                </div> }

            </div>

                

          </div>
    </div>
  )
}

export default ViewProfile
