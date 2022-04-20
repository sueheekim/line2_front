import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Tab, Tabs } from '@mui/material';
import HostReservationList from './HostReservationList';
import HostCheckIn from './HostCheckIn';
import HostCheckOut from './HostCheckOut';

function HostReservation() {
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
            backgroundColor: 'green',
        },
    });

    const StyledTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => ({
        marginRight: theme.spacing(6),
    }));

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="host_reservation_body">
            <StyledTabs className="tabs" value={value} onChange={handleChange}>
                <StyledTab
                    style={{
                        fontSize: '20px',
                        color: '#043a25',
                        fontWeight: 'bold',
                    }}
                    label="예약 신청 목록"
                />
                <StyledTab
                    style={{
                        fontSize: '20px',
                        color: '#043a25',
                        fontWeight: 'bold',
                    }}
                    label="입소 이용자 목록"
                />
                <StyledTab
                    style={{
                        fontSize: '20px',
                        color: '#043a25',
                        fontWeight: 'bold',
                    }}
                    label="퇴소 이용자 목록"
                />
            </StyledTabs>
            {value === 0 && <HostReservationList />}
            {value === 1 && <HostCheckIn />}
            {value === 2 && <HostCheckOut />}
        </div>
    );
}

export default HostReservation;
