import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Tab, Tabs } from '@mui/material';
import { Face, Hotel, Star } from '@mui/icons-material';
import GuestReview from './GuestReview';
import GuestAccount from './GuestAccount';
import GuestReservation from './GuestReservation';

function GuestMyPageBody() {
    const StyledTabs = styled(props => (
        <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
    ))({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 60,
            width: '100%',
            backgroundColor: 'white',
        },
    });

    const StyledTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => ({
        marginRight: theme.spacing(8),
    }));

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="mypage_body">
            <div className="mypage_tabs">
                <StyledTabs
                    value={value}
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: 'white',
                        },
                    }}
                    onChange={handleChange}
                    aria-label="icon label tabs example"
                >
                    <StyledTab
                        icon={<Hotel style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="예약"
                    />
                    <StyledTab
                        icon={<Star style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="후기"
                    />
                    <StyledTab
                        icon={<Face style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="계정"
                    />
                </StyledTabs>
            </div>
            <div className={'container'}>
                {value === 0 && <GuestReservation />}
                {value === 1 && <GuestReview />}
                {value === 2 && <GuestAccount />}
            </div>
        </div>
    );
}

export default GuestMyPageBody;
