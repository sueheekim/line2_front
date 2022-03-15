import React, { useState } from 'react';
import './Navbar.css';
import searchIcon from '../../images/search.png';
import pin from '../../images/pin.png';
import checkIn from '../../images/check-in.png';
import checkOut from '../../images/check-out.png';
import user from '../../images/user.png';
import GenderChoice from './GenderChoice';
import Calendar from './Calendar';

function Navbar() {
    
    const [gender, setGender] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    
    return (  
        <div className='navbar__menu'>
            <div className='navbar__container'>
                <div className='navbar__tabs'>
                    <img src={pin} alt='pin.png'/>
                </div>
                <div className='navbar__tabs'>
                    <img src={checkIn} alt='check-in.png' onClick={()=>setShowSearch(!showSearch)} />
                    {showSearch && <Calendar />}
                </div>
                <div className='navbar__tabs'>
                    <img src={checkOut} alt='check-out.png' />
                </div>
                <div className='navbar__tabs'>
                    <img src={user} alt='user.png' onClick={()=>
                    setGender(!gender)} className="navbar__gender" />
                    {gender && <GenderChoice />}
                </div>
                <div className='navbar__tabs'>
                    <img src={searchIcon} alt='seach.jpg' />
                </div>
            </div>
        </div>
    );
}

export default Navbar
