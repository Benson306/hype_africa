import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../utils/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

function EditProfile() {

    const [data, setData] = useState(null);

    const { id } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [countryCode, setCountryCode] = useState("+254");
    const [companyName, setCompanyName] = useState(null);
    const [country, setCountry] = useState("kenya");
    const [city, setCity] = useState(null);
    const [brandName, setBrandName] = useState(null);
    const [about, setAbout] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);

    const [initialImageUrl, setInitialImageUrl] = useState(null);

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
    

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/profile/${id}`)
        .then((response)=> response.json())
        .then(response => {
            setData(response)
            setEmail(response.email);
            setPhoneNumber(response.phoneNumber)
            setCountryCode(response.countryCode)
            setCompanyName(response.companyName)
            setCountry(response.country)
            setCity(response.city)
            setBrandName(response.brand_name)
            setAbout(response.about)
            setImageSrc(response.brand_logo)
            setImageUrl(`${process.env.REACT_APP_API_URL}/uploads/${response.brand_logo}`)
            setInitialImageUrl(`${process.env.REACT_APP_API_URL}/uploads/${response.brand_logo}`)
        } )
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

    const handleSubmit = (e) =>{
        e.preventDefault();

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const phonePattern = /^\d{9}$/;
        
        if(email === null || countryCode === null || phoneNumber === null || companyName === null || country === null || city === null  ){
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

        if(initialImageUrl === imageUrl){
            let updatedData = {
                user_id: id,
                email,
                phoneNumber,
                country,
                countryCode,
                companyName,
                city,
                about,
                brand_name: brandName
            }

            fetch(`${process.env.REACT_APP_API_URL}/profileWithoutImage/${id}`,{
                method: 'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(updatedData)
            })
            .then((response)=> response.json())
            .then(response => {
                if(response === 'success'){
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
                            navigate('/view_profile');
                          }, 2000);
                }
            })
            .catch((err)=>{
                toast.error('Server Error. Try Again', {
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

        }else{
            const formData = new FormData();
            formData.append('email', email)
            formData.append('phoneNumber', phoneNumber)
            formData.append('countryCode', countryCode);
            formData.append('country', country);
            formData.append('companyName', companyName);
            formData.append('city', city)
            formData.append('brand_name', brandName);
            formData.append('about', about);
            formData.append('image', imageSrc); 
            formData.append('user_id', id);

            fetch(`${process.env.REACT_APP_API_URL}/profileWithImage/${id}`,{
                method: 'PUT',
                body:formData
            })
            .then((response)=> response.json())
            .then(response => {
                if(response === 'success'){
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
                            navigate('/view_profile');
                          }, 2000);
                }
            })
            .catch((err)=>{
                toast.error('Server Error. Try Again', {
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

    }


  return (
     <div className='w-full min-h-screen bg-neutral-300'>
        <ToastContainer />
        <Navbar />
        <div className='p-2 ml-12 mb-48 lg:ml-0 flex justify-center'>

            <div> 
                <h1 className='flex justify-center text-sm mb-3 p-3 uppercase font-bold text-gray-700'>Edit Profile</h1>

                {data && <form class="w-full shadow-lg rounded-lg p-10 bg-white space-y-4 md:space-y-6" action="#">
                {/* <img src={`${process.env.REACT_APP_API_URL}/uploads/${data.brand_logo}`} className='shadow rounded-lg mx-auto  max-w-full h-auto  align-middle border-1 border-sky-900 mb-10 '  width={"200px"}/> */}

                        <div>
                                <label for="logo" class="block mb-1 text-sm font-medium text-sky-900">Brand Logo</label>

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
                            <label for="email" class="block mb-2 text-sm font-medium text-sky-900">Your email <i className='text-red-500 text-xl'>*</i></label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-sky-900">Your Phone Number <i className='text-red-500 text-xl'>*</i><i className='font-mono text-red-400'>(Phone Number should be 9 characters long without a 0 (Zero) at the start)</i></label>
                            <div className='flex'>
                            <select class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded- rounded-tl-lg rounded-bl-lg focus:ring-primary-600 focus:border-primary-600 block w-2/6 lg:w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setCountryCode(e.target.value)}>
                                <option value={countryCode}>{countryCode}</option>
                                <option value="+254">+254</option>
                                <option value="+255">+255</option>
                                <option value="+256">+256</option>
                            </select>
                            <input type="text" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-tr-lg rounded-br-lg focus:ring-primary-600 w-4/6 lg:w-5/6 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="707357072" required="" 
                            value={phoneNumber}
                            onChange={(e)=> setPhoneNumber(e.target.value)}
                            />
                                
                            </div>
                        </div>

                        <div>
                            <label for="companyName" class="block mb-2 text-sm font-medium text-sky-900">Company Name <i className='text-red-500 text-xl'>*</i></label>
                            <input type="companyName" name="companyName" id="companyName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hype Africa" required="" 
                            value={companyName}
                            onChange={(e)=> setCompanyName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label for="brandName" class="block mb-2 text-sm font-medium text-sky-900">Your Brand Name <i className='text-red-500 text-xl'>*</i></label>
                            <input type="brandName" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""
                            value={brandName}
                            onChange={(e)=> setBrandName(e.target.value)}
                            />
                        </div>
                        <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-sky-900">About Your Brand</label>
                                <textarea type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                value={about}
                                onChange={(e)=>setAbout(e.target.value)}
                                ></textarea>
                        </div>
                        <div>
                            <label for="country" class="block mb-2 text-sm font-medium text-sky-900">Country <i className='text-red-500 text-xl'>*</i></label>
                            <select type="country" name="country" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hype Africa" required="" 
                            onChange={(e)=> setCountry(e.target.value)}>
                                <option value={country}>{country}</option>
                                <option value="kenya">Kenya</option>
                                <option value="tanzania">Tanzania</option>
                                <option value="uganda">Uganda</option>
                            </select>
                        </div>
                        <div>
                            <label for="city" class="block mb-2 text-sm font-medium text-sky-900">City <i className='text-red-500 text-xl'>*</i></label>
                            <input type="city" name="city" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nairobi" required="" 
                            value={city}
                            onChange={(e)=> setCity(e.target.value)}/>
                        </div>

                        
                        <div className='flex gap-4'>
                        <button onClick={(e)=>handleSubmit(e)}  className="w-full text-white bg-sky-700 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 focus:ring-primary-800 mt-5">
                            Save
                        </button>
                        <button onClick={(e)=> navigate("/view_profile")}  className="w-full text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 focus:ring-primary-800 mt-5">
                            Cancel
                        </button>

                        </div>
                        
                        </form> }

                

            </div>

                

          </div>
    </div>
  )
}

export default EditProfile
