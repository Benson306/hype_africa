import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../utils/AuthContext';
import Navbar from '../Navbar';

function AddBrand() {

    const [imageSrc, setImageSrc] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);

    const [brandName, setBrandName] = useState(null);

    const { company_id, logout } = useContext(AuthContext);

    const navigate = useNavigate();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImageSrc(file);
    setImageUrl(URL.createObjectURL(file))
    
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDelete = () => {
    setImageSrc(null);
  };

  const handleLogout = () =>{
    logout();
    navigate("/company_login")
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(brandName === null || imageSrc === null){
        toast.error('All Fields Must Be Filled', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        return;
    }


    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append('brandName', brandName);
    formData.append('image', imageSrc); 
    formData.append('company_id', company_id);


    fetch(`${process.env.REACT_APP_API_URL}/add_brand`,{
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(response =>{
        if(response.status == 'success'){
            toast.success('Success!', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });

                setTimeout(() => {
                    navigate('/my_brands');
                    }, 1000);
                
        }else{
            toast.error('Failed. Server Error!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    })
    .catch(err =>{
        toast.error('Failed. Server Error!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    })


   
  }

    return (
        <div className='w-full min-h-screen bg-neutral-300'>
            <Navbar />
            <ToastContainer />
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  my-10 lg:py-0 ">
                <div class="rounded-lg shadow dark:border md:mt-0  xl:p-0 bg-gray-800 border-gray-700 w-5/6 lg:w-1/2">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-lg font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Add a Brand
                        </h1>
                        <form class="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white">Brand Name</label>
                                <input type="email" name="email" id="email" class="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hype Africa" required="" 
                                onChange={(e)=> setBrandName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white">Brand Logo</label>

                                <div
                                    className="flex items-center justify-center w-full"
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    >
                                    {imageSrc ? (
                                        <div className="w-full h-64 relative">
                                        <img
                                            src={imageUrl}
                                            alt="Preview"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                        <button
                                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                                            onClick={handleDelete}
                                        >
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                            </svg>
                                        </button>
                                        </div>
                                    ) : (
                                        <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
                                        >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                            >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and
                                            drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) =>{ setImageSrc(e.target.files[0]); setImageUrl(URL.createObjectURL(e.target.files[0]) )}}
                                        />
                                        </label>
                                    )}
                                    </div>
                            </div>

    
                            <button className="w-full text-white bg-sky-700 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 focus:ring-primary-800 mt-5"
                            onClick={(e)=>handleSubmit(e)}
                            >
                                    Add Brand
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
}

export default AddBrand
