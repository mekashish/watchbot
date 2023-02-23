import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {positions,transitions,Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";


ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}> 
    <App />
    </AlertProvider>,
  document.getElementById('root')
);

