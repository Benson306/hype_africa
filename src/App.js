import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Sidebar from './components/brands/Sidebar';
import AllCampaigns from './components/brands/pages/AllCampaigns';
import ActiveCampaigns from './components/brands/pages/ActiveCampaigns';
import ExpiredCampaigns from './components/brands/pages/ExpiredCampaigns';
import ScheduledCampaigns from './components/brands/pages/ScheduledCampaigns';
import CompletedCampaigns from './components/brands/pages/CompletedCampaigns';
import Drafts from './components/brands/pages/Drafts';
import Login from './components/brands/pages/Login';
import SignUp from './components/brands/pages/SignUp';
import CompleteProfile from './components/brands/pages/CompleteProfile';
import { useContext } from 'react';
import { AuthContext } from './utils/AuthContext';
import ViewProfile from './components/brands/pages/ViewProfile';
import EditProfile from './components/brands/pages/EditProfile';
import ChooseCampaign from './components/brands/pages/ChooseCampaign';
import AddInfluencerCampaign from './components/brands/pages/AddInfluencerCampaign';
import AddContentCampaign from './components/brands/pages/AddContentCampaign';

function App() {

  const { id } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>

        <div className="flex">

            {
              id == null ?
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
                <Route path='/*' element={
                  <>
                    <Login />
                  </>
                }/>

              </Routes>

              :

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
                <Route path='/view_profile' element={
                    <>
                      <Sidebar />
                      <ViewProfile />
                    </>
                  }/>
                  <Route path='/edit_profile' element={
                    <>
                      <Sidebar />
                      <EditProfile />
                    </>
                  }/>
                <Route path='/complete_profile' element={
                    <>
                      <CompleteProfile />
                    </>
                  }/>
                  <Route path='/choose_campaign' element={
                    <>
                      <ChooseCampaign />
                    </>
                  }/>
                <Route path='/create_influencer_campaign' element={
                    <>
                      <AddInfluencerCampaign />
                    </>
                  }/>
                  <Route path='/create_content_campaign' element={
                    <>
                      <AddContentCampaign />
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
            }
          
        </div>

      </Router>
    </div>
  );
}

export default App;
