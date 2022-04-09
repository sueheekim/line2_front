import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import GuestCheckIn from './GuestCheckIn';
import GuestReservationList from './GuestReservationList';

function GuestReservation() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="host_reservation_body">
            <Tabs className="tabs" value={value} onChange={handleChange}>
                <Tab
                    style={{
                        fontSize: '20px',
                        color: '#043a25',
                        fontWeight: 'bold',
                    }}
                    label="예약목록"
                />
                <Tab
                    style={{
                        fontSize: '20px',
                        color: '#043a25',
                        fontWeight: 'bold',
                    }}
                    label="체크인"
                />
            </Tabs>
            {value === 0 && <GuestReservationList />}
            {value === 1 && <GuestCheckIn />}
        </div>
    );
}

export default GuestReservation;
