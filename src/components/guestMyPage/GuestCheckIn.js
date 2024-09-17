import React, { useState, useEffect } from 'react';
import GuestCheckInCard from './GuestCheckInCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';

function GuestCheckIn() {
    const user = useSelector(selectUser);

    const checkInGuestUrl = '/book/v1/reservation/user/before_check_out/';
    const [checkInGuest, setCheckInGuest] = useState([]);

    useEffect(() => {
        axios.get(checkInGuestUrl+user.id).then(res => {
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
                    room={guest.room}
                />
            ))}
        </div>
    );
}

export default GuestCheckIn;