import React, { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

function Sidebar() {
    const sidebarCampaignItems =[
        {
            label:'Active Campaigns',
            //icon: <ActiveCampaigns />,
            route: '/active_campaigns'
        },
        {
            label:'Expired Campaigns',
            //icon: <ExpiredCampaigns />,
            route: '/expired_campaigns'
        },
        {
            label:'Scheduled Campaigns',
            //icon: <ScheduledCampaigns />,
            route: '/scheduled_campaigns'
        },
        {
            label:'Completed Campaigns',
            //icon: <CompletedCampaigns />,
            route: '/completed_campaigns'
        },
        {
            label:'Drafts',
            //icon: <Drafts />,
            route: '/draft_campaigns'
        }

    ]

    const [isOpen, setIsOpen] = useState(false);

    const handleSidebar = () =>{
         
        setIsOpen(!isOpen);
    }

  return (
    <div className='min-h-screen bg-gradient-to-l from-slate-800 via-slate-800 to-slate-900' style={{ width: isOpen ? '320px': '50px', transition: 'width 0.5s ease'}} >
        { isOpen && <Link to={"/all_campaigns"} >
            <h1 className='text-white text-2xl text-center mt-5'>HypeAfrica</h1></Link> }

        <MenuIcon htmlColor="#0284c7" style={{float: 'right', marginRight: 12, marginTop: 50, marginBottom: 20}} onClick={handleSidebar}/>

        <div className="mt-28" style={{marginLeft: isOpen ? '30px' : '10px', marginRight:'10px'}}>

            <Link className="flex text-white py-2 align-middle gap-4 hover:text-blue-400" to={"/all_campaigns"}>
                    <div style={{display: isOpen ? 'block' : 'none'}}>CAMPAIGNS</div> 
            </Link>
            {
                sidebarCampaignItems.map(item=>(
                    <Link onClick={() => handleSidebar()} className="flex text-white py-2 mx-5 align-middle gap-4 hover:text-blue-200" to={item.route}>

                        {item.icon}
                    <div style={{display: isOpen ? 'block' : 'none'}}>{item.label}</div> 

                    </Link>
                ))
            }

            <Link className="flex text-white py-2 align-middle gap-4 hover:text-blue-400" to={"/all_campaigns"}>
                    <div style={{display: isOpen ? 'block' : 'none'}}>BRAND-FANS</div> 
            </Link>
            <Link className="flex text-white py-2 align-middle gap-4 hover:text-blue-400" to={"/all_campaigns"}>
                    <div style={{display: isOpen ? 'block' : 'none'}}>PAYMENTS</div> 
            </Link>
        </div>
    </div> 
  )
}

export default Sidebar
