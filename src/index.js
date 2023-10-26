import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './utils/AuthContext';
import { InfluencerCampaignProvider } from './utils/InfluencerCampaignContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <InfluencerCampaignProvider>
        <App />
      </InfluencerCampaignProvider>
    </AuthProvider>
  </React.StrictMode>
);


