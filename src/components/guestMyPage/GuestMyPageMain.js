import React from 'react';
import GuestMyPageBody from './GuestMyPageBody';
import GuestMyPageHeader from './GuestMyPageHeader';
import './GuestMyPageMain.css';

function GuestMyPageMain() {
    return (  
        <div className='guestmypage'>
            <GuestMyPageHeader />
            <GuestMyPageBody />
        </div>
    );
}

export default GuestMyPageMain;