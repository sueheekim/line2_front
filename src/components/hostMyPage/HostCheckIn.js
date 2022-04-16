import React, { useState, useEffect } from 'react';
import HostCheckInCard from './HostCheckInCard';
import axios from 'axios';

function HostCheckIn() {
    const checkInHostUrl = '/book/v1/reservation/home/before_check_out/1';
    const [checkInHost, setCheckInHost] = useState([]);

    useEffect(() => {
        axios.get(checkInHostUrl).then(res => {
            setCheckInHost(res.data);
        });
    }, [checkInHost]);



    return (
        <div>
            {checkInHost.map(guest => (
                <HostCheckInCard
                    key={guest.id}
                    guest={guest.user}
                    home={guest.home}
                    reservation={guest}
                />
            ))}
        </div>
    );
}

export default HostCheckIn;
