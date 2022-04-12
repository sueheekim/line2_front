import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { EventNote, FaceRetouchingNatural, Home } from '@mui/icons-material';
import HostChatting from './HostChatting';
import HostHome from './HostHome';
import HostReservation from './HostResrvation';

function HostMyPageBody() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="mypage_body">
            <div className="mypage_tabs">
            <Tabs
            
                    value={value}
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: 'white',
                        },
                    }}
                    onChange={handleChange}
                >
                    <Tab
                    icon={<EventNote style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="예약"
                    />
                    <Tab
                    icon={<Home style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="숙소"
                    />
                    <Tab
                    icon={<FaceRetouchingNatural style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="계정"
                    />
                </Tabs>
            </div>
            <div className={'container'}>
                {value === 0 && <HostReservation />}
                {value === 1 && <HostHome />}
                {value === 2 && <HostChatting />}
            </div>
        </div>
    );
}

export default HostMyPageBody;
