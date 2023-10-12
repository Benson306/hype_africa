import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
function AddInfluencerCampaign() {

    const [rangeValue, setRangeValue] = useState(0);

    // Define minimum and maximum values
  const minValue = 50;
  const maxValue = 2500;

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
  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <div className="fixed bg-gray-200 shadow-md p-2 w-full flex justify-between">
            <div className='align-middle p-1 ml-5 lg:ml-10'>
                <h1>HypeAfrica</h1>
            </div>
            <div className='gap-4 lg:gap-8 flex justify-end mr-5'>
                <Link to={""} className='hover:border-2 border-slate-900 hover:bg-transparent hover:text-sky-900 bg-sky-900 text-white p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
                    SAVE AS DRAFT
                </Link>

                <Link to={"/all_campaigns"} className='hover:bg-sky-900 hover:text-white text-sky-900 border-2 border-sky-900 border-solid p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
                    CLOSE
                </Link>
            </div>

        </div>

        <form class="w-5/6 lg:w-1/2 bg-slate-50 mx-auto mt-20 p-5 shadow-md rounded-lg mb-2">
        <div class=" -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Campaign Title
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
        </div>

        <div className="mb-6">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Campaign Cover
            </label>
        <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div> 
        </div>
        <div class="w-full mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Campaign Objective
            </label>
            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" ></textarea>
        </div>
        <div class="w-full mb-6 ">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Select Industry
            </label>

            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
            Call To Action - <i className='text-gray-500'>(Summarise the type of content you want submitted in regards to the campaign)</i>
            </label>
            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" ></textarea>
        </div>

        <div className='flex gap-4 mb-6'>
            <div class="w-5/6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    DO's
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div className='w-1/6 m-auto flex align-middle'>
                <button className='border-solid border-2 border-sky-900 p-1 rounded-lg mt-3 text-sm hover:bg-sky-900 hover:text-white'><AddIcon /></button>
            </div>
        </div>

        <div className='flex gap-4 mb-6'>
            <div class="w-5/6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    DONT's
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div className='w-1/6 m-auto flex align-middle'>
                <button className='border-solid border-2 border-sky-900 p-1 rounded-lg mt-3 text-sm hover:bg-sky-900 hover:text-white'><AddIcon /></button>
            </div>
        </div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    SOCIAL MEDIA ACCOUNTS OR HASHTAGS TO BE USED:
        </label>

        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Instagram
            </label>
            <div className='flex'>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="@MaryJane or #Rocking" />
                <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r'><AddIcon /></button>

            </div>
        </div>
            
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                X (Fomerly Twitter)
            </label>
            <div className='flex'>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="@MaryJane or #Rocking" />
                <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r'><AddIcon /></button>

            </div>
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Facebook
            </label>
            <div className='flex'>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="@MaryJane or #Rocking" />
                <button className='bg-gray-600 p-1 text-sm hover:bg-sky-900 text-white rounded-r'><AddIcon /></button>

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
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Not Applicable</option>
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
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" min={18} max={100} type="number" placeholder="43" />
                    </div>

                    <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Maximum Age
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" min={18} max={100}  type="number" placeholder="50" />
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
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="31000" />
        </div>
            
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                X (Fomerly Twitter)
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="12000" />
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Facebook
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="1500" />
            </div>
        </div>

        <div class="w-full md:w-1/3 mb-6 ">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Location of creator
            </label>
            <div className='flex'>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Nairobi" />

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

        <div className='flex gap-4'>
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

            <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Number of Days
                </label>
                <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                id="numOfDays"
                value={numOfDays}
                onChange={handleNumOfDaysChange}
                min="1"
                />
            </div>
        </div>


        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Ending Date
        </label>
        <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{endDate.toISOString().split('T')[0]}</div>

        <div className='flex justify-center'>
            <input type="submit" value="SUBMIT" className='border-2 border-slate-900 text-bold rounded p-2 mt-10 hover:bg-sky-900 hover:text-white '/>
        </div>


      <br /><br /><br />
        </form>
        <br /><br /> <br />

        @2023
        <br />

    </div>
  )
}

export default AddInfluencerCampaign
