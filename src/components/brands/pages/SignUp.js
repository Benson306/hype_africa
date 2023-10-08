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

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const passwordPattern = /^(?=.*\d).{6,}$/;

        const phonePattern = /^\d{9}$/;
        
        if(email === null || countryCode === null || phoneNumber === null || companyName === null || country === null || city === null || password === null ){
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
            return
        }

        if(!emailPattern.test(email)){
            toast.error('Email must be in the correct format', {
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

        if(!phonePattern.test(phoneNumber)){
            toast.error('Phone Number must be exactly 9 digits long', {
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

        if(!passwordPattern.test(password)){
            toast.error('Password must be at least 6 characters long with 1 digit in it', {
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


        fetch(`${process.env.REACT_APP_API_URL}/brand_signup`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                phoneNumber,
                companyName,
                countryCode,
                country,
                city,
                password
            })
        })
        .then(response => response.json())
        .then((response)=>{

            if(response === "success"){
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
                        navigate('/complete_profile');
                      }, 2000);
            }else if(response === "Failed"){
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
            }else{
                toast.error('Email Has Been Used!', {
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
                            I have an account? <Link to="/brand_login" className="font-medium hover:underline text-sky-500"> Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp
