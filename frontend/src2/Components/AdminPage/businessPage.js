import React from 'react'
import Header from '../layout/header/header'
import './businessPage.css'
import {BrowserRouter as Router,Route,Routes,Outlet} from "react-router-dom";


const businessPage = () => {
  return (
    <div>
      <Header/>
      <Outlet/>


    </div>
  )
}

export default businessPage