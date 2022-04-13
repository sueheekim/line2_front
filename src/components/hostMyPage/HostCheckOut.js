import React, { useState, useEffect } from 'react';
import HostCheckOutCard from './HostCheckOutCard';
import axios from 'axios';

function HostCheckOut() {
    const checkOutHostUrl = '/book/v1/reservation/home/after_check_out/1';
    const [checkInHost, setCheckInHost] = useState([]);

    useEffect(() => {
        axios.get(checkOutHostUrl).then(res => {
            setCheckInHost(res.data);
        });
    }, []);
 
    return (
        <div>
            {checkInHost.map(guest => (
                <HostCheckOutCard
                    key={guest.id}
                    guest={guest.user}
                    room={guest.room}
                    reservation={guest}
                />
            ))}
            </div>
    );
}

export default HostCheckOut;
