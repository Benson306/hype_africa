import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../utils/AuthContext';
import { InfluencerCampaignContext } from '../../../utils/InfluencerCampaignContext';

function Page1() {
    const [title, setTitle] = useState(null);
    const [objective, setObjective] = useState(null);
    const [industry, setIndustry] = useState(null);

    const [imageSrc, setImageSrc] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);

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

    const { updatePage, updateTitle, updateImageSrc, updateObjective, updateIndustry, updateImageUrl } = useContext(InfluencerCampaignContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title == null || imageSrc == null || objective == null ||
            industry == null || industry.length < 1 ){
                toast.error('All required Fields Must be filled', {
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

            updateTitle(title);
            updateImageSrc(imageSrc);
            updateImageUrl(imageUrl);
            updateObjective(objective);
            updateIndustry(industry);



            updatePage(1);
   
    }


  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <ToastContainer />

      <form class="w-5/6 lg:w-1/2 bg-slate-50 mx-auto mt-20 p-5 shadow-md rounded-lg mb-2">
        <div className='mb-5'>
            <h1 className='text-lg lg:text-2xl p-2 uppercase '>Campaign Info</h1>
            <hr />
        </div>
        <div class=" -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Campaign Title<i className='text-red-500 text-xl'>*</i>
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Social Media Marketing" onChange={(e)=>setTitle(e.target.value)} />
            </div>
        </div>

        <div className="mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Campaign Cover<i className='text-red-500 text-xl'>*</i>
            </label>
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

        <div class="w-full mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Campaign Objective<i className='text-red-500 text-xl'>*</i>
            </label>
            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="To increase product Awareness" onChange={(e)=>setObjective(e.target.value)}></textarea>
        </div>

        <div class="w-full mb-6 ">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Select Industry<i className='text-red-500 text-xl'>*</i>
            </label>

            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={e => setIndustry(e.target.value)}>
                <option value=""></option>
                <option value="Arts and Entertainment">Arts and Entertainment</option>
                <option value="Books and Literature">Books and Literature</option>
                <option value="Health">Health</option>
                <option value="Computers Electronics and Technology">Computers Electronics and Technology</option>
                <option value="Finance">Finance</option>
                <option value="Food and Drink">Food and Drink</option>
                <option value="Travel and Tourism">Travel and Tourism</option>
                <option value="Pets and Animals">Pets and Animals</option>
                <option value="Sports">Sports</option>
                <option value="Home and Garden">Home and Garden</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            
        </div>

        <div className='flex justify-between mx-2 lg:mx-5'>
            <button className='p-4 bg-red-600 hover:bg-red-400 text-white rounded-lg'>
                Save As Draft
            </button>

            <button onClick={(e)=> handleSubmit(e)} className='p-4 bg-blue-600 hover:bg-blue-400 text-white rounded-lg lg:w-20'>
                Next
            </button>
        </div>

        
    </form>
    </div>
  )
}

export default Page1
