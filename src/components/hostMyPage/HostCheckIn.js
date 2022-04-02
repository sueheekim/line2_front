import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HostCheckInCard from './HostCheckInCard';
import './HostCheckIn.css';

function HostCheckIn() {
    const checkInHostUrl = '/book/v1/user/1';
    const [checkInHost, setCheckInHost] = useState([]);

    useEffect(() => {
        axios.get(checkInHostUrl).then(res => {
            setCheckInHost(res.data);
        });
    }, []);
    return (
        <div className="hostCheckInPage">
            {checkInHost.map(guest => (
                <HostCheckInCard key={guest.id} guest={guest}/>
            ))}
        </div>
    );
}

export default HostCheckIn;
