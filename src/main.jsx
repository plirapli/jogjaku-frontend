import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { ProfileProvider } from './context/ProfileProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <ProfileProvider>
      <App />
    </ProfileProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
