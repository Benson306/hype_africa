import React from 'react'
import Navbar from '../Navbar'
import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';

function CreatorGroups() {

    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const [creators, setCreators] =  useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_all_creators`)
        .then(response => response.json())
        .then(response => {
            setCreators(response);
        })
        .catch(err => console.log(err))
    },[])

    const [selectedOption, setSelectedOption] = useState(null);

    const options = creators.map((creator) => ({
        value: creator._id,
        label: (
            <div className='block'>
                <div className='font-bold'>{ creator.firstName } { creator.lastName}</div>
                <div className='capitalize'>{ creator.creatorType } - Ksh. { creator.averageEarning} </div>
                <div className='flex flex-wrap gap-2'>{ creator.industries.map( ind => ( <div className='p-2 bg-gray-300 rounded-md text-sm text-black'>{ind}</div>))}</div>
            </div> 
        ),
        }));

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <Navbar />

        <div className='p-4 ml-16'>
            Creator Groups
        

        <div className='ml-20 mt-5'>
            <button onClick={()=> openModal()} className='bg-blue-800 text-white p-3 rounded-lg'>+ New Creators Group </button>
        </div>

        <div class="relative overflow-x-auto mt-4 w-5/6 mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Group name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            No. of Members
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Total Cost Per Campaign
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>

        </div>


        {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-80">

          <div className="bg-white p-5 rounded-lg shadow-lg lg:w-1/2">
            <div className='flex justify-end mb-1 lg:mb-5'>
                <button
                    onClick={closeModal}
                    className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-full text-sm flex flex-end"
                >
                    X
                </button>
            </div>

            <div className='w-full'>
                <div className='mb-2 text-center'>Create Content/Influencer Creator Group</div>
                <hr />
                <form className='mt-5'>
                    <label>Group Name:</label>

                    <input type="text" className='mt-2 p-4 rounded border border-gray-400 w-full mb-5' placeholder='Group Name' />
                    <br />

                    <label>Select Members:</label>

                    { creators.length > 0 && 
                    
                    <Select className='mt-2' options={options} onChange={setSelectedOption} defaultValue={{value: creators[0]._id, label: (
                        <div className='block'>
                            <div className='font-bold'>{ creators[0].firstName } { creators[0].lastName}</div>
                            <div className='capitalize'>{ creators[0].creatorType } - Ksh. { creators[0].averageEarning} </div>
                            <div className='flex flex-wrap gap-2'>{ creators[0].industries.map( ind => ( <div className='p-2 bg-gray-300 rounded-md text-sm text-black'>{ind}</div>))}</div>
                        </div> 
                    )}}
                    /> }

                    <button className='bg-blue-700 hover:bg-blue-500 text-white p-3 mt-5 rounded-lg float-right'>Save Group</button>   
                </form>
            </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default CreatorGroups
