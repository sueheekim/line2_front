import React, { useState, useEffect } from 'react';
import GuestCheckInCard from './GuestCheckInCard';
import axios from 'axios';

function GuestCheckIn() {
    const checkInGuestUrl = '/book/v1/reservation/home/before_check_out/1';
    const [checkInGuest, setCheckInGuest] = useState([]);

    useEffect(() => {
        axios.get(checkInGuestUrl).then(res => {
            setCheckInGuest(res.data);
        });
    }, []);
    return (
        <div className="guest_checkInTab">
            {checkInGuest.map(guest => (
                <GuestCheckInCard
                    key={guest.id}
                    guest={guest.user}
                    home={guest.home}
                    reservation={guest}
                />
            ))}
        </div>
    );
}

export default GuestCheckIn;