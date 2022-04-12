import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Face, Hotel, Star } from '@mui/icons-material';
import GuestReview from './GuestReview';
import GuestAccount from './GuestAccount';
import GuestReservation from './GuestReservation';

function GuestMyPageBody() {
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
                    aria-label="icon label tabs example"
                >
                    <Tab
                        icon={<Hotel style={{ fontSize: '60px' }} />}
                        style={{ fontSize: '20px', color: '#ffffff' }}
                        label="예약"
                    />
                    <Tab
                        icon={<Star style={{ fontSize: '60px' }} />}
                        style={{ fontSize: '20px', color: '#ffffff' }}
                        label="후기"
                    />
                    <Tab
                        icon={<Face style={{ fontSize: '60px' }} />}
                        style={{ fontSize: '20px', color: '#ffffff' }}
                        label="계정"
                    />
                </Tabs>
            </div>
            <div className={'container'}>
                {value === 0 && <GuestReservation />}
                {value === 1 && <GuestReview />}
                {value === 3 && <GuestAccount />}
            </div>
        </div>
    );
}

export default GuestMyPageBody;
