import React from 'react';
import './Navbar.css';
import searchIcon from '../images/search.png';
import pin from '../images/pin.png';
import checkIn from '../images/check-in.png';
import checkOut from '../images/check-out.png';
import { Avatar } from '@mui/material';

function Navbar() {
    return (  
        <div className='navbar__menu'>
            <div className='navbar__container'>
                <div className='navbar__tabs'>
                    <img src={pin} alt='pin.png'/>
                </div>
                <div className='navbar__tabs'>
                    <img src={checkIn} alt='check-in.png' />
                </div>
                <div className='navbar__tabs'>
                    <img src={checkOut} alt='check-out.png' />
                </div>
                <div className='navbar__tabs'>
                    <Avatar />
                </div>
                <div className='navbar__tabs'>
                    <img src={searchIcon} alt='seach.jpg' />
                </div>
            </div>
        </div>
    );
}

export default Navbar
