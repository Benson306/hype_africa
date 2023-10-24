import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../utils/AuthContext';

function Page2() {

    const [callToAction, setCallToAction] = useState(null);

    const [dos, setDos] = useState([]);
    const [newDo, setNewDo] = useState('');

    const [donts, setDonts] = useState([]);
    const [newDonts, setNewDonts] = useState('');

    const [location, setLocation] = useState(null);

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

    const handleSubmit = (e, type) => {
        e.preventDefault();
    
        if(callToAction == null){
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
    
    }

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <ToastContainer />

    <form class="w-5/6 lg:w-1/2 bg-slate-50 mx-auto mt-20 p-5 shadow-md rounded-lg mb-2">

        <div className='mb-5'>
            <h1 className='text-lg lg:text-2xl p-2 uppercase'>More Details</h1>
            <hr />
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

        <div class="w-full md:w-1/3 mb-6 ">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Location of creator
            </label>
            <div className='flex'>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Nairobi" onChange={(e)=> setLocation(e.target.value)} />

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

export default Page2
