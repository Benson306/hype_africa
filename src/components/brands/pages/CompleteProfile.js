import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CompleteProfile() {

    const [imageSrc, setImageSrc] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);

    const [brandName, setBrandName] = useState(null);

    const [about, setAbout] = useState(null);

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


  const handleSubmit = (e) =>{
    e.preventDefault();

    if(brandName === null || imageSrc === null || about === null){
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
        return;
    }


    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append('brandName', brandName);
    formData.append('about', about);
    formData.append('image', imageSrc); 


    fetch(`${process.env.REACT_APP_API_URL}/complete_profile`,{
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(response =>{
        if(response.status == 'success'){
            toast.success('Success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });

                setTimeout(() => {
                    navigate('/all_campaigns');
                  }, 2000);
        }else{
            toast.error('Failed. Server Error!', {
                position: "top-right",
                autoClose: 5000,
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
            autoClose: 5000,
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
            <ToastContainer />
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  my-10 lg:py-0 ">
                <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                    Hype Africa    
                </div>
                <div class="rounded-lg shadow dark:border md:mt-0  xl:p-0 bg-gray-800 border-gray-700 w-5/6 lg:w-1/2">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Complete Your Profile
                        </h1>
                        <form class="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white">Brand Name</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hype Africa" required="" 
                                onChange={(e)=> setBrandName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white">Brand Logo</label>
                                {/* <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+254 707357072" required="" /> */}

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
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white">About Your Brand</label>
                                <textarea type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Description about your brand" required="" 
                                onChange={(e)=>setAbout(e.target.value)}
                                ></textarea>
                            </div>

                            {/* <h1 class="text-lg font-bold leading-tight tracking-tight md:text-xl text-white">
                                Card Details To Process Payment:
                            </h1>

                            <label class="relative w-full flex flex-col">
                                <span class="block mb-2 text-sm font-medium text-white">Card number</span>
                                <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_number" placeholder="0000 0000 0000" />
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </label>

                            <div className='flex gap-4'>

                                <label class="relative flex-1 flex flex-col">
                                    <span class="block mb-2 text-sm font-medium text-white">Expiry date</span>
                                    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="expire_date" placeholder="MM/YY" />
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </label>

                                <label class="relative flex-1 flex flex-col">
                                    <span class="text-white flex items-center gap-3 mb-2 text-sm" >
                                    CVC/CVV
                                    <span class="relative group">
                                        <span class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> 3 Digits at the back of your Card</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    </span>
                                    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_cvc" placeholder="&bull;&bull;&bull;" />
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </label>
                                
                            </div> */}
    
                            <button className="w-full text-white bg-sky-700 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 focus:ring-primary-800 mt-5"
                            onClick={(e)=>handleSubmit(e)}
                            >
                                    Complete Profile
                            </button>
                            <p class="text-sm  text-gray-100">
                                Go to Home? <Link to="/" className="font-medium hover:underline text-sky-500"> Homepage</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
}

export default CompleteProfile
