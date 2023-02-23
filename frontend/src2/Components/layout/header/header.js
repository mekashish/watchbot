import React from 'react'
import "./header.css"
import { IconButton } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import Avatar from "@mui/material/Avatar"
import AvatarImg from '../../../assests/userImage/AvatarImg.jpg';
// import Img from '../../../assets/logo/logo1.jpg'
import Sidebar from '../sidebar/sidebar.js'


const header = () => {
    return (
        <>
          <div className="tf_header">
            <div className="tf_header_info">
                <Sidebar className="tf_sidebar-icon"/>
                {/* <img src={Img} id="header_img" alt="failed-to-fetch"/> */}
                <div className="tf_info">
                  WatchBot
                </div>
            </div>
            <div className="tf_header_search">
              <IconButton>
                <SearchIcon/>
              </IconButton>
                <input type="text" name="search" placeholder='search' />
            </div>  
            <div className="tf_header_right">
              <IconButton>
                <Avatar src={AvatarImg} alt="failed-to-fetch"/>
              </IconButton>
            </div>  

          </div>
        </>
    )
}

export default header
