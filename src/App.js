import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AllCampaigns from './components/pages/AllCampaigns';
import ActiveCampaigns from './components/pages/ActiveCampaigns';
import ScheduledCampaigns from './components/pages/ScheduledCampaigns';
import CompletedCampaigns from './components/pages/CompletedCampaigns';
import Drafts from './components/pages/Drafts';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import CompleteProfile from './components/pages/CompleteProfile';
import { useContext } from 'react';
import { AuthContext } from './utils/AuthContext';
import ViewProfile from './components/pages/ViewProfile';
import EditProfile from './components/pages/EditProfile';
import ChooseCampaign from './components/pages/ChooseCampaign';
import AddInfluencerCampaign from './components/pages/AddInfluencerCampaign';
import AddContentCampaign from './components/pages/AddContentCampaign';
import ViewCampaign from './components/pages/ViewCampaign';
import EditCampaign from './components/pages/EditCampaign';
import PageNotFound from './components/PageNotFound';
import ApprovalPending from './components/pages/ApprovalPending';
import FailedApproval from './components/pages/FailedApproval';
import MyBrands from './components/pages/MyBrands';
import CreatorGroups from './components/pages/CreatorGroups';
import AddBrand from './components/pages/AddBrand';

function App() {

  const { company_id } = useContext(AuthContext);

  return (
    <div className="App">
      
      <Router>

      <div className="flex">
            {
              company_id == null ?
              <Routes>
                <Route exact path='/' element={
                  <>
                    <Login />
                  </>
                }/>

                <Route path='/company_login' element={
                  <>
                    <Login />
                  </>
                }/>
                <Route path='/company_signup' element={
                  <>
                    <SignUp />
                  </>
                }/>
                <Route path='/*' element={
                  <>
                    <PageNotFound />
                  </>
                }/>

              </Routes>

              :

              <Routes>
                <Route exact path='/' element={
                  <>
                  <Sidebar />
                  <AllCampaigns />
                </>
                }/>

                <Route path='/company_login' element={
                  <>
                    <Login />
                  </>
                }/>
                <Route path='/company_signup' element={
                  <>
                    <SignUp />
                  </>
                }/>

                <Route path='/approval_pending' element={
                    <>
                      <ApprovalPending />
                    </>
                  }/>

                  <Route path='/rejected_application' element={
                    <>
                      <FailedApproval />
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

                  <Route path='/edit_influencer_campaign/:user_id/:campaign_id' element={
                    <>
                      <Sidebar />
                      <EditCampaign />
                    </>
                  }/>

                  <Route path='/view_campaign/:id' element={
                    <>
                      <Sidebar />
                      <ViewCampaign />
                    </>
                  }/>
                  <Route path='/active_campaigns' element={
                    <>
                      <Sidebar />
                      <ActiveCampaigns />
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

                  <Route path='/my_brands' element={
                    <>
                      <Sidebar />
                      <MyBrands />
                    </>
                  }/>

                  <Route path='/add_brand' element={
                    <>
                      <Sidebar />
                      <AddBrand />
                    </>
                  }/>

                  <Route path='/creator_groups' element={
                    <>
                      <Sidebar />
                      <CreatorGroups />
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
