import {Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import GuestCheckInOut from './GuestCheckInOut';
import './GuestMyPageBody.css';
import GuestReview from './GuestReview';
import GuestReservation from './GuestReservation';

function GuestMyPageBody() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className='guestmypage__body'>
            <div className='guestmypage__tabs'>
                
                    <Tabs
                        className='tabs'
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab style={{fontSize : '30px'}} label="예약" />
                        <Tab style={{fontSize : '30px'}} label="체크인 & 체크 아웃" />
                        <Tab style={{fontSize : '30px'}} label="이용 후기" />
                    </Tabs>
            </div>
                    {value === 0 && <GuestReservation /> }
                    {value === 1 && <GuestCheckInOut /> }
                    {value === 2 && <GuestReview /> }
            <div className='myReservation__content'>
            </div>
        </div>
    );
}

export default GuestMyPageBody;