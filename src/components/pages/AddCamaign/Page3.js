import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../utils/AuthContext';
import { InfluencerCampaignContext } from '../../../utils/InfluencerCampaignContext';

function Page3() {

    const { instaTags, addInstaTag, removeInstaTag,
    xTags, addXTag, removeXTag,
    fbTags, addFbTag, removeFbTag,
    updatePreferedGender, updateMinAge, updateMaxAge, 
    updateInstaFollowersNeeded, updateXFollowersNeeded, updateFbFollowersNeeded,
    updatePage
    } = useContext(InfluencerCampaignContext);

    const [newInstaTag, setNewInstaTag] = useState('');

    const [newXTag, setNewXTag]= useState('');

    const [newFbTag, setNewFbTag] = useState('');

    const [preferedGender, setPreferedGender] = useState(null);
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(0);
    const [InstaFollowersNeeded, setInstaFollowersNeeded] = useState(null);
    const [xFollowersNeeded, setXFollowersNeeded] = useState(null);
    const [fbFollowersNeeded, setFbFollowersNeeded] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(maxAge > 0 && maxAge < minAge){
            toast.error('Maximum age cannot be less than minimum age', {
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

        updatePreferedGender(preferedGender);
        updateMinAge(minAge);
        updateMaxAge(maxAge);
        updateInstaFollowersNeeded(InstaFollowersNeeded);
        updateXFollowersNeeded(xFollowersNeeded);
        updateFbFollowersNeeded(fbFollowersNeeded);

        updatePage(3);
    }
  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <ToastContainer />

    <form class="w-5/6 lg:w-1/2 bg-slate-50 mx-auto mt-20 p-5 shadow-md rounded-lg mb-2">
        <div className='mb-5'>
            <h1 className='text-lg lg:text-2xl p-2 uppercase'>Social Media</h1>

            <hr />
        </div>

        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    SOCIAL MEDIA ACCOUNTS OR HASHTAGS TO BE USED:
        </label>

        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Instagram
                </label>
                <div className='flex'>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="@MaryJane or #Rocking" value={newInstaTag}
            onChange={(e) => setNewInstaTag(e.target.value)} />
                    <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r' onClick={(e)=> {e.preventDefault(); addInstaTag(newInstaTag); setNewInstaTag('')}}><AddIcon /></button>

                </div>

                <div className='mb-4 mt-1'>
                    {
                        instaTags.length > 0 && instaTags.map( (item, index) => (
                            <div className='bg-sky-700 mb-1 p-2 text-white w-3/4 flex justify-between' key={index}>
                                { item }

                                <button onClick={(e)=> { e.preventDefault(); removeInstaTag(index)}}>
                                    <ClearIcon />
                                </button>

                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    X (Fomerly Twitter)
                </label>
                <div className='flex'>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" 
                    value={newXTag} placeholder="@MaryJane or #Rocking" 
            onChange={(e) => setNewXTag(e.target.value)} />
                    <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r' onClick={(e)=> {e.preventDefault(); addXTag(newXTag); setNewXTag('')}}><AddIcon /></button>

                </div>
                <div className='mb-4 mt-1'>
                    {
                        xTags.length > 0 && xTags.map( (item, index) => (
                            <div className='bg-sky-700 mb-1 p-2 text-white w-3/4 flex justify-between' key={index}>
                                { item }

                                <button onClick={(e)=> { e.preventDefault(); removeXTag(index)}}>
                                    <ClearIcon />
                                </button>

                            </div>
                        ))
                    }
                </div>
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Facebook
                </label>
                <div className='flex'>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" 
                    value={newFbTag} placeholder="@MaryJane or #Rocking" 
            onChange={(e) => setNewFbTag(e.target.value)} />
                    <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r' onClick={(e)=> {e.preventDefault(); addFbTag(newFbTag); setNewFbTag('')}} ><AddIcon /></button>

                </div>
                <div className='mb-4 mt-1'>
                    {
                        fbTags.length > 0 && fbTags.map( (item, index) => (
                            <div className='bg-sky-700 mb-1 p-2 text-white w-3/4 flex justify-between' key={index}>
                                { item }

                                <button onClick={(e)=> { e.preventDefault(); removeFbTag(index)}}>
                                    <ClearIcon />
                                </button>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        <div class="flex flex-wrap gap-4 -mx-3 mb-6 ">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 ">
            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                Prefered Gender of Creators
            </label>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Prefered Gender of Creators
            </label>
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=> setPreferedGender(e.target.value)}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="N/A">Not Applicable</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            </div>
            
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Age of Creators
                </label>

                <div className='flex gap-4'>
                    <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Minimum Age
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" min={18} max={100} type="number" placeholder="43" onChange={e => setMinAge(e.target.value)}/>
                    </div>

                    <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Maximum Age
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" min={18} max={100}  type="number" placeholder="50" onChange={e => setMaxAge(e.target.value)} />
                    </div>

                </div>
            </div>

            

            
        </div>

        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Followers needed for creators:
        </label>

        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Instagram
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="31000" onChange={(e)=> setInstaFollowersNeeded(e.target.value)}/>
        </div>
            
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                X (Fomerly Twitter)
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12000" onChange={(e)=> setXFollowersNeeded(e.target.value)} />
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Facebook
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="1500" onChange={(e)=> setFbFollowersNeeded(e.target.value)} />
            </div>
        </div>

        <div className='flex justify-between mx-5'>
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

export default Page3
