import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/brands/Navbar';
import { Switch } from '@mui/material';
import Home from './components/brands/pages/Home';
import Sidebar from './components/brands/Sidebar';
import AllCampaigns from './components/brands/pages/AllCampaigns';
import ActiveCampaigns from './components/brands/pages/ActiveCampaigns';
import ExpiredCampaigns from './components/brands/pages/ExpiredCampaigns';
import ScheduledCampaigns from './components/brands/pages/ScheduledCampaigns';
import CompletedCampaigns from './components/brands/pages/CompletedCampaigns';
import Drafts from './components/brands/pages/Drafts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div className="flex">
          <Routes>
            <Route path='/all_campaigns' element={
              <>
                <Sidebar />
                <AllCampaigns />
              </>
            }/>

            <Route path='/active_campaigns' element={
              <>
                <Sidebar />
                <ActiveCampaigns />
              </>
            }/>

            <Route path='/expired_campaigns' element={
              <>
                <Sidebar />
                <ExpiredCampaigns />
              </>
            }/>

            <Route path='/scheduled_campaigns' element={
              <>
                <Sidebar />
                <ScheduledCampaigns />
              </>
            }/>

            <Route path='/completed_campaigns' element={
              <>
                <Sidebar />
                <CompletedCampaigns />
              </>
            }/>

            <Route path='/draft_campaigns' element={
              <>
                <Sidebar />
                <Drafts />
              </>
            }/>

          </Routes>
          
        </div>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
