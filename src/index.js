import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './utils/AuthContext';
import {  CreatorAuthProvider } from './utils/CreatorAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreatorAuthProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CreatorAuthProvider>
    
  </React.StrictMode>
);


