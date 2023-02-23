import React from 'react'
import Header from '../layout/header/header';
import { Outlet } from 'react-router-dom';
import './businessPage.css'

const businessPage = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default businessPage