import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Tab, Tabs } from '@mui/material';
import { EventNote, FaceRetouchingNatural, Home } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import HostHome from './HostHome';
import HostReservation from './HostResrvation';
import { Chat } from '../chat/Chat';

function HostMyPageBody() {
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
                >
                    <StyledTab
                        icon={<EventNote style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="예약"
                    />
                    <StyledTab
                        icon={<Home style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="숙소"
                    />
                    <StyledTab
                        icon={<ChatIcon style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="채팅"
                    />
                    <StyledTab
                        icon={<FaceRetouchingNatural style={{ fontSize: '50px' }} />}
                        style={{ fontSize: '25px', color: '#ffffff' }}
                        label="계정"
                    />
                </StyledTabs>
            </div>
            <div className={'container'}>
                {value === 0 && <HostReservation />}
                {value === 1 && <HostHome />}
                {value === 2 && <Chat />}
            </div>
        </div>
    );
}

export default HostMyPageBody;
