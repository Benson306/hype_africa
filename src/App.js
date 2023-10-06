import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/brands/Sidebar';
import AllCampaigns from './components/brands/pages/AllCampaigns';
import ActiveCampaigns from './components/brands/pages/ActiveCampaigns';
import ExpiredCampaigns from './components/brands/pages/ExpiredCampaigns';
import ScheduledCampaigns from './components/brands/pages/ScheduledCampaigns';
import CompletedCampaigns from './components/brands/pages/CompletedCampaigns';
import Drafts from './components/brands/pages/Drafts';
import AddCampaign from './components/brands/pages/AddCampaign';
import Login from './components/brands/pages/Login';
import SignUp from './components/brands/pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div className="flex">
          <Routes>
          <Route path='/brand_login' element={
              <>
                <Login />
              </>
            }/>
            <Route path='/brand_signup' element={
              <>
                <SignUp />
              </>
            }/>
          <Route path='/create_campaign' element={
              <>
                <AddCampaign />
              </>
            }/>
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
