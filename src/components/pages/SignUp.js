import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [countryCode, setCountryCode] = useState("+254");
    const [companyName, setCompanyName] = useState(null);
    const  [country, setCountry] = useState("kenya");
    const [city, setCity] = useState(null);
    const [password, setPassword] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

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


    const handleSubmit = (e)=>{
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const passwordPattern = /^(?=.*\d).{6,}$/;

        const phonePattern = /^\d{9}$/;
        
        if(email === null || countryCode === null || phoneNumber === null || companyName === null || country === null || city === null || password === null || imageSrc === null){
            toast.error('All Fields Must Be Filled', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return
        }

        if(!emailPattern.test(email)){
            toast.error('Email must be in the correct format', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return;
        }

        if(!phonePattern.test(phoneNumber)){
            toast.error('Phone Number must be exactly 9 digits long', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return;
        }

        if(!passwordPattern.test(password)){
            toast.error('Password must be at least 6 characters long with 1 digit in it', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return;
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('companyName', companyName);
        formData.append('countryCode', countryCode);
        formData.append('country', country);
        formData.append('city', city);
        formData.append('password', password);
        formData.append('image', imageSrc);

        fetch(`${process.env.REACT_APP_API_URL}/company_signup`,{
            method:'POST',
            body: formData
        })
        .then(response => response.json())
        .then((response)=>{

            if(response === "success"){
                toast.success('Success!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                    });

                    setTimeout(() => {
                        navigate('/company_login');
                      }, 2000);
            }else if(response === "Failed"){
                toast.error('Failed. Server Error!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }else{
                toast.error('Email Has Been Used!', {
                    position: "top-right",
                    autoClose: 3000,
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
                autoClose: 3000,
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
        <div class="flex flex-col items-center justify-center px-0 py-8 mx-auto  my-10 lg:py-0 mb-44">
            <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                Hype Africa    
            </div>
            <div class="rounded-lg shadow dark:border md:mt-0  xl:p-0 bg-gray-800 border-gray-700 w-5/6 lg:w-1/2">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Create Account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Your email <i className='text-red-500 text-xl'>*</i></label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-white">Your Phone Number <i className='text-red-500 text-xl'>*</i><i className='font-mono text-red-400'>(Phone Number should be 9 characters long without a 0 (Zero) at the start)</i></label>
                            <div className='flex'>
                            <select class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded- rounded-tl-lg rounded-bl-lg focus:ring-primary-600 focus:border-primary-600 block w-2/6 lg:w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setCountryCode(e.target.value)}>
                                <option value="+254">+254</option>
                                <option value="+255">+255</option>
                                <option value="+256">+256</option>
                            </select>
                            <input type="text" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-tr-lg rounded-br-lg focus:ring-primary-600 w-4/6 lg:w-5/6 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="707357072" required="" 
                            onChange={(e)=> setPhoneNumber(e.target.value)}
                            />
                                
                            </div>
                        </div>
                        <div>
                            <label for="companyName" class="block mb-2 text-sm font-medium text-white">Company Name <i className='text-red-500 text-xl'>*</i></label>
                            <input type="companyName" name="companyName" id="companyName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hype Africa" required="" 
                            onChange={(e)=> setCompanyName(e.target.value)}
                            />
                        </div>

                        <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white">Company Logo</label>

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

                        <div>
                            <label for="country" class="block mb-2 text-sm font-medium text-white">Country <i className='text-red-500 text-xl'>*</i></label>
                            <select type="country" name="country" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hype Africa" required="" 
                            onChange={(e)=> setCountry(e.target.value)}>
                                <option value="kenya">Kenya</option>
                                <option value="tanzania">Tanzania</option>
                                <option value="uganda">Uganda</option>
                            </select>
                        </div>
                        <div>
                            <label for="city" class="block mb-2 text-sm font-medium text-white">City <i className='text-red-500 text-xl'>*</i></label>
                            <input type="city" name="city" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nairobi" required="" 
                            onChange={(e)=> setCity(e.target.value)}/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-white">Password <i className='text-red-500 text-xl'>*</i> <i className='font-mono text-red-400'>(Password Should be atleast 6 characters long and contain at least 1 number)</i></label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>

                        <button onClick={(e)=>handleSubmit(e)} className="w-full text-white bg-sky-700 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 focus:ring-primary-800 mt-5">
                            Proceed
                        </button>
                        <p class="text-sm  text-gray-100">
                            I have an account? <Link to="/company_login" className="font-medium hover:underline text-sky-500"> Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp
