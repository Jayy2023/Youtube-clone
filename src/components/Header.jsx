import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from  '@mui/icons-material/Search';
import VideoCallIcon from  '@mui/icons-material/VideoCall';
import AppsIcon from  '@mui/icons-material/Apps';
import NotificationsIcon from  '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

export default function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <MenuIcon className='menu' />
            <img className='header__logo' 
             src="images/icon-youtube.png" 
             alt="" 
             />
             </div>

             <div className="header__input">
             <input placeholder='Search' type="text"/>
             <SearchIcon className='header__inputButton' />
             </div>

             <div className="header__icons">
             <VideoCallIcon className='header__icon' />
             <AppsIcon className='header__icon' />
             <NotificationsIcon className='header__icon' />
             <Avatar 
             src='images/jordanTesla.jpg'
             />
             </div>
    </div>
  )
}
