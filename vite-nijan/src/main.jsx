import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import Client from './Client.jsx';
import Admin from './Admin.jsx';
import SignIn from './component/secure/SignIn.jsx';
import HomeClient from './component/client/HomeClient.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
        <App />
  // </React.StrictMode>,
)
