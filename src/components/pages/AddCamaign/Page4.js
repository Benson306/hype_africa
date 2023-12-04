import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../utils/AuthContext';
import { InfluencerCampaignContext } from '../../../utils/InfluencerCampaignContext';
import ProgressBar from '../../ProgressBar';

function Page4() {

    const { updateBudget, updateStartDate, updateEndDate, updateNumOfDays, handleSubmit, updateAllParticipants, updateCreatorGroupsSelected, allParticipants } = useContext(InfluencerCampaignContext);
    const { brand_id } = useContext(AuthContext);

    const navigate  = useNavigate();

    // Define minimum and maximum values
    const minValue = 1000;
    const maxValue = 100000;

    const [rangeValue, setRangeValue] = useState(1000);

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

    const handleDraft = (e) => {
        e.preventDefault();

    }

    const [schedule, setSchedule] = useState(false);


    const handleSubmitForm = (e, type) => {
        e.preventDefault();

        const currentDate = new Date();

        const isSameDate = (
            startDate.getFullYear() === currentDate.getFullYear() &&
            startDate.getMonth() === currentDate.getMonth() &&
            startDate.getDate() === currentDate.getDate()
          );

        if(type == "schedule" && isSameDate){
            toast.error('You cannot schedule a campaign for today. Publish Instead', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            setSchedule(false);

            return;
        }

        updateBudget(rangeValue);
        updateStartDate(startDate);
        updateEndDate(endDate);
        updateNumOfDays(numOfDays);
        updateCreatorGroupsSelected(selectedGroups);

        handleSubmit(type);

        setTimeout(() => {
            navigate('/all_campaigns');
          }, 1000);
    }

    const [creators, setCreators] =  useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_all_creators`)
        .then(response => response.json())
        .then(response => {
            setCreators(response);
        })
        .catch(err => console.log(err))
    },[])

    const [showGroups, setShowGroups] = useState(false);

    const [groups, setGroups] = useState([]);

        useEffect(()=>{
            fetch(`${process.env.REACT_APP_API_URL}/creator_groups/${brand_id}`)
            .then(response => response.json())
            .then(response => {
                setGroups(response);
            })
            .catch(err => {
                console.log(err);
            })
        },[brand_id])

        const [selectedGroups, setSelectedGroups] = useState([]);

        const handleCheckboxToggle = (groupId) => {
            const updatedSelection = [...selectedGroups];
        
            const index = updatedSelection.indexOf(groupId);
            if (index > -1) {
              updatedSelection.splice(index, 1);
            } else {
              updatedSelection.push(groupId);
            }
        
            setSelectedGroups(updatedSelection);
          };

  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <ToastContainer />

    <form class="w-5/6 lg:w-1/2 bg-slate-50 mx-auto mt-20 p-5 shadow-md rounded-lg mb-2">
        <ProgressBar percent={80} />
        <div className='mb-5 mt-10'>
            <h1 className='text-lg lg:text-2xl p-2 uppercase'>Participants, Budget And Duration</h1>

            <hr />
        </div>

        <div className='mb-10'>
            <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Who would you like to invite into this campaign?</div>
            <div className='text-sm tracking-wide'>Would you like to publicly post your campaign to the Neza Creator Community or privately invite your Creator Groups to submit content?</div>
            
            <div className='flex gap-2 mt-4' onClick={() => {setShowGroups(false); updateAllParticipants(true); setSelectedGroups([])}}>
                <input type='radio' checked={allParticipants} id="all" name="participant" value="all" />
                <label for="all">Neza Creator Community</label>
            </div>
            <div className='flex gap-2' onClick={() => {updateAllParticipants(false); setShowGroups(true)}}>
                <input type='radio' name="participant" value="creator-group" id="creator-group"/>
                <label for="creator-group">My Creator Groups</label>
            </div>
            {
                showGroups && groups.length <1 && <div className='mt-2 ml-7 bg-gray-200 p-2 w-1/2 text-sm text-center'>You have not created any creator groups on this brand</div>
            }

            {
                showGroups && groups.length > 0 && 
                groups.map( group => {
                    let totalCost = 0;
                    group.selectedCreators.map( creator => {
                        let single = creators.filter( crt => crt._id == creator)
                        totalCost += Number(single[0].averageEarning)
                    })
                    return (
                        <div key={group._id} className='mt-2 ml-7 bg-gray-200 p-4 w-1/2 text-sm'>
                            <div className='font-bold'>
                                { group.groupName}
                            </div>
                            <div className='text-xs'>
                                {group.selectedCreators.length} members
                            </div>
                            <div className='flex gap-2 text-xs'>
                                <div>Total Cost Per Campaign :</div>
                                <div>Ksh.{totalCost}</div>
                            </div>
                            <input
                                type='checkbox'
                                onChange={(e) =>{ handleCheckboxToggle(group._id)} }
                            />
                        </div>
                    )
            }) 
            }
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
                step={100}
                onChange={handleRangeChange}
            />

            <p>Amount: Ksh<b> {rangeValue}</b></p>
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
        !schedule &&

        <div>

            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Start Date
            </label>

            <div className='flex gap-4'>
                <div>
                    {startDate.toISOString().split('T')[0]}
                </div>
                -
                <div className='font-bold'>
                    Today
                </div>
            </div>


            <button 
            className='border-2 border-blue-300 text-bold rounded p-2 mt-3 hover:bg-blue-600 text-black hover:text-white' 
            onClick={(e)=>{ e.preventDefault(); setSchedule(true)}}
            >
                SCHEDULE FOR LATER
            </button>



        </div>

    }
        
        
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
            onClick={(e)=> handleSubmitForm(e, "publish")}
            >
                PUBLISH NOW
            </button> }

            { schedule && <button 
            className='border-2 border-green-600 shadow-md text-bold rounded p-2 mt-10 hover:bg-green-800 bg-green-600 text-white' 
            onClick={(e)=>{ handleSubmitForm(e, "schedule")}}
            >
                SCHEDULE
            </button> }

            <button 
            className='border-2 border-red-700 text-bold rounded p-2 mt-10 bg-red-700 hover:bg-red-900 text-white' 
            onClick={(e)=> handleDraft(e)}
            >
                Save To Drafts
            </button>

        </div>

        
    </form>
      
    </div>
  )
}

export default Page4

