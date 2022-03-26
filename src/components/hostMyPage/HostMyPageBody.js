import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import './HostMyPageBody.css';
import HostChatting from './HostChatting';
import HostHome from './HostHome';
import HostProfile from './HostProfile';
import HostReservation from './HostResrvation';

function HostMyPageBody() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="hostmypage__body">
            <div className="hostmypage__tabs">
                <Tabs className="tabs" value={value} onChange={handleChange}>
                    <Tab style={{ fontSize: '30px' }} label="예약" />
                    <Tab style={{ fontSize: '30px' }} label="숙소" />
                    <Tab style={{ fontSize: '30px' }} label="채팅" />
                    <Tab style={{ fontSize: '30px' }} label="계정" />
                </Tabs>
            </div>
            {value === 0 && <HostReservation />}
            {value === 1 && <HostHome />}
            {value === 2 && <HostChatting />}
            {value === 2 && <HostProfile />}
            <div className="myReservation__content"></div>
        </div>
    );
}

export default HostMyPageBody;
