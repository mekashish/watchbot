import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {positions,transitions,Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 10000,
  position: positions.BOTTOM_CENTER,
  offset:"2vh",
  containerStyle:{
    justifyContent:"stretch",
    zIndex:10000,
    textTransform:"capitalize"
  }
};
ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}> 
    <App />
    </AlertProvider>,
  document.getElementById('root')
);

