import React, { useState } from "react";
import { Tab, Tabs } from '@mui/material';
import GuestRecentReservation from "./GuestRecentReservation";
import GuestPreviousRservation from "./GuestPreviousRservation";

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
                    label="최근예약"
                />
                <Tab
                    style={{
                        fontSize: '20px',
                        color: '#043a25',
                        fontWeight: 'bold',
                    }}
                    label="지난예약"
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
            {value === 0 && <GuestRecentReservation />}
            {value === 1 && <GuestPreviousRservation />}
        </div>
    );
}

export default GuestReservation;