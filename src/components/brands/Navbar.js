import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { AuthContext } from '../../utils/AuthContext';

function Navbar() {

  const { id, addId } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const [data, setData] = useState({});

  const navigate = useNavigate();

  const handleShow = () =>{
    setShow(!show);
  }

  const handleLogout = () =>{
    handleShow();
    addId(null);
  }



  useEffect(()=>{
      fetch(`${process.env.REACT_APP_API_URL}/profile/${id}`)
      .then((response)=> response.json())
      .then(response => setData(response))
      .catch(err => console.log(err))
  },[])

  

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
            <AccountCircleIcon sx={{fontSize: 30}} onClick={()=>handleShow()}/>
        </div>

      </div>
      {
          show &&
      
        <div className="absolute right-0 z-10 mt-1 w-72 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mr-2 transition-all duration-500 ease-in-out bg-neutral-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <div className='flex justify-center align-middle gap-4 p-4'>
              <img src={`${process.env.REACT_APP_API_URL}/uploads/${data.brand_logo}`} className='shadow rounded-full max-w-full h-auto align-middle border-2 border-sky-900'  width={"50px"}/>

              <div className=''>
                <div className='font-sans text-xl capitalize'>{data.brand_name}</div>
                <div className='font-serif capitalize'>{data.companyName}</div>
              </div>


            </div>
            <button onClick={()=>{ handleShow(); navigate('/view_profile')}} className='flex justify-center bg-neutal-100 border-2 border-sky-900 hover:bg-sky-900 hover:text-white text-sm  p-2  mx-auto w-3/4 rounded-2xl'>View Profile</button>
            <button onClick={()=> handleLogout()} class="flex justify-center text-gray-700 w-full px-4 py-2 text-left text-sm hover:text-sky-900" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
          </div>
        </div>

      }
    </div>
  )
}

export default Navbar
