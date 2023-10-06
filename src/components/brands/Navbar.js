import React from 'react'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function Navbar() {
  return (
    <div className='w-full bg-neutral-300'>
      <div className="bg-gray-200 shadow-md p-2 w-full gap-4 lg:gap-8 flex justify-end">
        
        <Link to={"/create_campaign"} className='bg-sky-900 text-white p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
          <AddIcon sx={{fontSize: 20}} />
          Create Campaign
        </Link>
        <div className='mt-1'>
          <CircleNotificationsIcon sx={{fontSize: 30}} />
        </div>
        
        <div className='align-midddle mt-1 mr-5'>
            <AccountCircleIcon sx={{fontSize: 30}}/>
        </div>

      </div>
    </div>
  )
}

export default Navbar
