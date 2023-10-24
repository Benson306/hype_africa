import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../utils/AuthContext';
import Page1 from './AddCamaign/Page1';
import Page2 from './AddCamaign/Page2';
import Page3 from './AddCamaign/Page3';
import Page4 from './AddCamaign/Page4';

function AddInfluencerCampaign() {

    const { id } = useContext(AuthContext);

    const [rangeValue, setRangeValue] = useState(1);

    const navigate = useNavigate();

    // Define minimum and maximum values
    const minValue = 1;
    const maxValue = 250;

    // Event handler for the range input change
    const handleRangeChange = (event) => {
        const newValue = event.target.value;
        setRangeValue(newValue);
    };

    // Initialize state for start date and number of days
    const [startDate, setStartDate] = useState(new Date());
    const [numOfDays, setNumOfDays] = useState(1);
    const [endDate, setEndDate] = useState(new Date());

    // Calculate the ending date based on the start date and number of days
    useEffect(() => {
        const calculatedEndDate = new Date(startDate);
        calculatedEndDate.setDate(startDate.getDate() + numOfDays - 1);
        setEndDate(calculatedEndDate);
    }, [startDate, numOfDays]);

    // Event handler for changing the start date
    const handleStartDateChange = (event) => {
        const selectedStartDate = new Date(event.target.value);
        if (selectedStartDate >= new Date()) {
        setStartDate(selectedStartDate);
        }
    };

    // Event handler for changing the number of days
    const handleNumOfDaysChange = (event) => {
        const selectedNumOfDays = parseInt(event.target.value, 10);
        setNumOfDays(selectedNumOfDays);
    };

    const increment = () => {
        setNumOfDays(numOfDays + 1);
    };

    const decrement = () => {
        if (numOfDays > 1) {
        setNumOfDays(numOfDays - 1);
        }
    };


    const [title, setTitle] = useState(null);
    const [objective, setObjective] = useState(null);
    const [industry, setIndustry] = useState(null);
    const [callToAction, setCallToAction] = useState(null);

    const [dos, setDos] = useState([]);
    const [newDo, setNewDo] = useState('');

    const [donts, setDonts] = useState([]);
    const [newDonts, setNewDonts] = useState('');

    const [instaTags, setInstaTags] = useState([]);
    const [newInstaTags, setNewInstaTags] = useState('');

    const [xTags, setXTags]= useState([]);
    const [newXTags, setNewXTags]= useState('');

    const [fbTags, setFbTags] = useState([]);
    const [newFbTags, setNewFbTags] = useState('');

    const [preferedGender, setPreferedGender] = useState(null);
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(0);
    const [InstaFollowersNeeded, setInstaFollowersNeeded] = useState(null);
    const [xFollowersNeeded, setXFollowersNeeded] = useState(null);
    const [fbFollowersNeeded, setFbFollowersNeeded] = useState(null);
    const [location, setLocation] = useState(null);



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

    const handleAddDo = () => {
        if (newDo.trim() !== '') {
            // Create a new array with the added item
            const updatedDos = [...dos, newDo];
            // Update the state
            setDos(updatedDos);
            // Clear the input field
            setNewDo('');
        }
    };

    const handleDeleteDo = (index) => {
        // Create a new array without the item to be deleted
        const updatedDos = dos.filter((_, i) => i !== index);
        // Update the state
        setDos(updatedDos);
    };

    const handleAddDont = () => {
        if (newDonts.trim() !== '') {
            // Create a new array with the added item
            const updatedDonts = [...donts, newDonts];
            // Update the state
            setDonts(updatedDonts);
            // Clear the input field
            setNewDonts('');
        }
    };

    const handleDeleteDont = (index) => {
        // Create a new array without the item to be deleted
        const updatedDonts = donts.filter((_, i) => i !== index);
        // Update the state
        setDonts(updatedDonts);
    };

    const handleAddInstaTag = () => {
        if (newInstaTags.trim() !== '') {
            // Create a new array with the added item
            const updatedInstaTags = [...instaTags, newInstaTags];
            // Update the state
            setInstaTags(updatedInstaTags);
            // Clear the input field
            setNewInstaTags('');
        }
    };

    const handleDeleteInstaTags = (index) => {
        // Create a new array without the item to be deleted
        const updatedInstaTags = instaTags.filter((_, i) => i !== index);
        // Update the state
        setInstaTags(updatedInstaTags);
    };

    const handleAddXTag = () => {
        if (newXTags.trim() !== '') {
            // Create a new array with the added item
            const updatedXTags = [...xTags, newXTags];
            // Update the state
            setXTags(updatedXTags);
            // Clear the input field
            setNewXTags('');
        }
    };

    const handleDeleteXTags = (index) => {
        // Create a new array without the item to be deleted
        const updatedXTags = xTags.filter((_, i) => i !== index);
        // Update the state
        setXTags(updatedXTags);
    };

    const handleAddFbTag = () => {
        if (newFbTags.trim() !== '') {
            // Create a new array with the added item
            const updatedFbTags = [...fbTags, newFbTags];
            // Update the state
            setFbTags(updatedFbTags);
            // Clear the input field
            setNewFbTags('');
        }
    };

    const handleDeleteFbTags = (index) => {
        // Create a new array without the item to be deleted
        const updatedFbTags = fbTags.filter((_, i) => i !== index);
        // Update the state
        setFbTags(updatedFbTags);
    };

    const handleSubmit = (e, type) => {
        e.preventDefault();

        if(title == null || imageSrc == null || objective == null ||
            industry == null || callToAction == null || industry.length < 1 ){
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

            if(dos.length < 1 || donts.length < 1){
                toast.error('You Should Have At least 1 Do and 1 Dont', {
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

            const formData = new FormData();
            formData.append('id', id);
            formData.append('title', title);
            formData.append('cover', imageSrc);
            formData.append('objective', objective);
            formData.append('industry', industry);
            formData.append('call_to_action', callToAction);
            formData.append('dos', dos);
            formData.append('donts', donts);
            formData.append('instagramTags', instaTags);
            formData.append('xTags', xTags);
            formData.append('fbTags', fbTags);
            formData.append('gender', preferedGender);
            formData.append('minAge', minAge);
            formData.append('maxAge', maxAge);
            formData.append('instaFollowers', InstaFollowersNeeded);
            formData.append('xFollowers',xFollowersNeeded);
            formData.append('fbFollowers', fbFollowersNeeded);
            formData.append('location', location);
            formData.append('budget', rangeValue);
            formData.append('startDate', startDate)
            formData.append('endDate', endDate);
            formData.append('numberOfDays', numOfDays);

            fetch(`${process.env.REACT_APP_API_URL}/add_influencer_campaign`,{
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then((response)=>{
                if(response == 'success'){
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
                }
            })
            .catch(err => console.log(err))

   
    }


    const handleDraft = (e) => {
        e.preventDefault();

        if(title == null){
            toast.error('Give the campaign a title to be able to save as a Draft', {
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

        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        formData.append('cover', imageSrc);
        formData.append('objective', objective);
        formData.append('industry', industry);
        formData.append('call_to_action', callToAction);
        formData.append('dos', dos);
        formData.append('donts', donts);
        formData.append('instagramTags', instaTags);
        formData.append('xTags', xTags);
        formData.append('fbTags', fbTags);
        formData.append('gender', preferedGender);
        formData.append('minAge', minAge);
        formData.append('maxAge', maxAge);
        formData.append('instaFollowers', InstaFollowersNeeded);
        formData.append('xFollowers',xFollowersNeeded);
        formData.append('fbFollowers', fbFollowersNeeded);
        formData.append('location', location);
        formData.append('budget', rangeValue);
        formData.append('startDate', startDate)
        formData.append('endDate', endDate);
        formData.append('numberOfDays', numOfDays);

        

        if(imageSrc == null){

            const formDataObject = {};

            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });
            
            fetch(`${process.env.REACT_APP_API_URL}/add_influencer_draft_without_image`,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formDataObject)
            })
            .then(response => response.json())
            .then((response)=>{
                if(response == 'success'){
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
                }
            })
            .catch(err => console.log(err))

        }else{


            fetch(`${process.env.REACT_APP_API_URL}/add_influencer_draft_with_image`,{
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then((response)=>{
                if(response == 'success'){
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
                }
            })
            .catch(err => console.log(err))

        }

    }

    const [schedule, setSchedule] = useState(false);

  return (
    <div className='w-full min-h-screen bg-neutral-300'>

        <div className="fixed bg-gray-200 shadow-md p-2 w-full flex justify-between">
                <div className='align-middle p-1 ml-5 lg:ml-10'>
                    <h1>HypeAfrica</h1>
                </div>
                <div className='gap-4 lg:gap-8 flex justify-end mr-5'>
                    <Link to={"/all_campaigns"} className='bg-red-600 hover:bg-transparent text-white hover:text-red-700 border-2 border-red-600 border-solid p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
                            CLOSE
                    </Link>
                </div>

        </div>
        <Page1 />
        <Page2 />
        <Page4 />
        
            <Page4 />
    
    {/* <div className='w-full min-h-screen bg-neutral-300'>
      <div className="fixed bg-gray-200 shadow-md p-2 w-full flex justify-between">
            <div className='align-middle p-1 ml-5 lg:ml-10'>
                <h1>HypeAfrica</h1>
            </div>
            <div className='gap-4 lg:gap-8 flex justify-end mr-5'>
                <Link to={"/all_campaigns"} className='bg-red-600 hover:bg-transparent text-white hover:text-red-700 border-2 border-red-600 border-solid p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
                    CLOSE
                </Link>
            </div>

    </div>

    <ToastContainer />

    <form class="w-5/6 lg:w-1/2 bg-slate-50 mx-auto mt-20 p-5 shadow-md rounded-lg mb-2">
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

        <div class="w-full mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Call To Action<i className='text-red-500 text-xl'>*</i> - <i className='text-gray-500'>(Summarise the type of content you want submitted in regards to the campaign)</i>
            </label>
            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="SUMMARISE THE TYPE OF CONTENT YOU WANT SUBMITTED IN REGARDS TO THE CAMPAIGN"
            onChange={(e)=> setCallToAction(e.target.value)} ></textarea>
        </div>

        <div className='flex gap-4 mb-2'>
            <div class="w-5/6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    DO's<i className='text-red-500 text-xl'>*</i>
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Post Early" value={newDo}
            onChange={(e) => setNewDo(e.target.value)} />
            </div>
            <div className='w-1/6 m-auto flex align-middle'>
                <button className='border-solid border-2 border-sky-900 p-1 rounded-lg mt-3 text-sm hover:bg-sky-900 hover:text-white' onClick={(e)=> {e.preventDefault(); handleAddDo()}}><AddIcon /></button>
            </div>
        </div>

        <div className='mb-4'>
            {
                dos.length > 0 && dos.map( (item, index) => (
                    <div className='bg-sky-700 mb-1 p-2 text-white w-1/2 flex justify-between' key={index}>
                        { item }

                        <button onClick={(e)=> { e.preventDefault(); handleDeleteDo(index)}}>
                            <ClearIcon />
                        </button>

                    </div>
                ))
            }
        </div>

        <div className='flex gap-4 mb-2'>
            <div class="w-5/6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    DONT's<i className='text-red-500 text-xl'>*</i>
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Post Early" value={newDonts}
            onChange={(e) => setNewDonts(e.target.value)} />
            </div>
            <div className='w-1/6 m-auto flex align-middle'>
                <button className='border-solid border-2 border-sky-900 p-1 rounded-lg mt-3 text-sm hover:bg-sky-900 hover:text-white' onClick={(e)=> {e.preventDefault(); handleAddDont()}}><AddIcon /></button>
            </div>
        </div>

        <div className='mb-4'>
            {
                donts.length > 0 && donts.map( (item, index) => (
                    <div className='bg-sky-700 mb-1 p-2 text-white w-1/2 flex justify-between' key={index}>
                        { item }

                        <button onClick={(e)=> { e.preventDefault(); handleDeleteDont(index)}}>
                            <ClearIcon />
                        </button>

                    </div>
                ))
            }
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
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="@MaryJane or #Rocking" value={newInstaTags}
            onChange={(e) => setNewInstaTags(e.target.value)} />
                    <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r' onClick={(e)=> {e.preventDefault(); handleAddInstaTag()}}><AddIcon /></button>

                </div>

                <div className='mb-4 mt-1'>
                    {
                        instaTags.length > 0 && instaTags.map( (item, index) => (
                            <div className='bg-sky-700 mb-1 p-2 text-white w-1/2 flex justify-between' key={index}>
                                { item }

                                <button onClick={(e)=> { e.preventDefault(); handleDeleteInstaTags(index)}}>
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
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="@MaryJane or #Rocking" value={newXTags}
            onChange={(e) => setNewXTags(e.target.value)} />
                    <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r' onClick={(e)=> {e.preventDefault(); handleAddXTag()}}><AddIcon /></button>

                </div>
                <div className='mb-4 mt-1'>
                    {
                        xTags.length > 0 && xTags.map( (item, index) => (
                            <div className='bg-sky-700 mb-1 p-2 text-white w-1/2 flex justify-between' key={index}>
                                { item }

                                <button onClick={(e)=> { e.preventDefault(); handleDeleteXTags(index)}}>
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
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="@MaryJane or #Rocking" value={newFbTags}
            onChange={(e) => setNewFbTags(e.target.value)} />
                    <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r' onClick={(e)=> {e.preventDefault(); handleAddFbTag()}} ><AddIcon /></button>

                </div>
                <div className='mb-4 mt-1'>
                    {
                        fbTags.length > 0 && fbTags.map( (item, index) => (
                            <div className='bg-sky-700 mb-1 p-2 text-white w-1/2 flex justify-between' key={index}>
                                { item }

                                <button onClick={(e)=> { e.preventDefault(); handleDeleteFbTags(index)}}>
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
                    <option value="other">Other</option>
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

        <div class="w-full md:w-1/3 mb-6 ">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Location of creator
            </label>
            <div className='flex'>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Nairobi" onChange={(e)=> setLocation(e.target.value)} />

            </div>
        </div>

        

        <div class="w-full md:w-1/3 mb-6 ">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Estimated Budget ($):
            </label>
            <input
                type="range"
                class="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                id="customRange1" 
                value={rangeValue}
                min={minValue}
                max={maxValue}
                onChange={handleRangeChange}
            />

            <p>Amount: $<b> {rangeValue}</b></p>
        </div>

        <div class="w-3/4 lg::w-1/4 mb-6 ">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Number of Days
            </label>

            <div className="flex">
                <button 
                className='bg-sky-900 w-8 p-1 flex justify-center text-center text-white' 
                onClick={(e) => { e.preventDefault() ;decrement() }}
                style={{alignItems: 'center'}}
                >-</button>
                <input
                className="appearance-none block w-2/6 bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500cflex text-center"
                type="number"
                id="numOfDays"
                onChange={handleNumOfDaysChange}
                value={numOfDays}
                readOnly
                />
                <button 
                className='bg-sky-900 w-8 p-1 flex justify-center text-center text-white' 
                onClick={(e) => { e.preventDefault() ;increment() }}
                style={{alignItems: 'center'}}
                >+</button>
                
            </div>
        </div>
        
        {
            schedule && 
        
        <div>

            <div class="w-full md:w-1/3 mb-6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Start Date
                </label>
                <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
                id="startDate"
                value={startDate.toISOString().split('T')[0]}
                onChange={handleStartDateChange}
                min={new Date().toISOString().split('T')[0]}
                />

            </div>


            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Ending Date
            </label>

            <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {endDate.toISOString().split('T')[0]}
            </div>

        </div>

        }
        

        <div className='flex justify-center gap-4 lg:gap-10 flex-wrap'>

            {!schedule && <button 
            className='border-2 border-slate-600 hover:border-slate-600 text-bold rounded p-2 mt-10 bg-sky-900 hover:bg-lime-600 text-white' 
            onClick={(e)=> handleSubmit(e, "publish")}
            >
                PUBLISH NOW
            </button> }

            { !schedule && <button 
            className='border-2 border-blue-300 text-bold rounded p-2 mt-10 hover:bg-blue-400 bg-blue-500 text-white' 
            onClick={(e)=>{ e.preventDefault(); setSchedule(true)}}
            >
                SCHEDULE
            </button> }

            { schedule && <button 
            className='border-2 border-lime-600 shadow-md text-bold rounded p-2 mt-10 hover:bg-lime-800 bg-lime-600 text-white' 
            onClick={(e)=>{ handleSubmit(e, "schedule")}}
            >
                SCHEDULE
            </button> }

            <button 
            className='border-2 border-red-700 text-bold rounded p-2 lg:mt-10 bg-red-700 hover:bg-red-900 text-white' 
            onClick={(e)=> handleDraft(e)}
            >
                Save To Drafts
            </button>

        </div>


      <br /><br /><br />
        </form>
        <br /><br /> <br />
        <br />

    </div> */}
    </div>
  )
}

export default AddInfluencerCampaign
