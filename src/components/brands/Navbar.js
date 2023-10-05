import React from 'react'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <div>
      <div className="bg-gray-200 shadow-md p-2 w-full gap-4 lg:gap-8 flex justify-end">
        <Link to={"/create_campaign"} className='bg-sky-900 text-white p-1 lg:p-2 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
          <AddIcon sx={{fontSize: 20}} />
          Create Campaign
        </Link>
        <div className='align-midddle mt-1 mr-5'>
            <AccountCircleIcon sx={{fontSize: 30}}/>
        </div>

      </div>
    </div>
  )
}

export default Navbar
