import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import Weatherr from "./Weatherr";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
   <Weatherr defaultCity="Kenya"/>
    <App />
    
  </React.StrictMode>
);

