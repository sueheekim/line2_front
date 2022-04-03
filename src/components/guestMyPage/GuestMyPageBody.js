import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import './GuestMyPageBody.css';
import GuestReservation from './GuestReservation';
import GuestReview from './GuestReview';

function GuestMyPageBody() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="guestmypage__body">
            <div className="guestmypage__tabs">
                <Tabs className="tabs" value={value} onChange={handleChange}>
                    <Tab
                        style={{ fontSize: '30px', color: '#ffffff' }}
                        label="예약"
                    />
                    <Tab
                        style={{ fontSize: '30px', color: '#ffffff' }}
                        label="후기"
                    />
                    <Tab
                        style={{ fontSize: '30px', color: '#ffffff' }}
                        label="채팅"
                    />
                    <Tab
                        style={{ fontSize: '30px', color: '#ffffff' }}
                        label="계정"
                    />
                </Tabs>
            </div>
            <div className={'container'}>
                {value === 0 && <GuestReservation />}
                {value === 1 && <GuestReview />}
            </div>
        </div>
    );
}

export default GuestMyPageBody;
