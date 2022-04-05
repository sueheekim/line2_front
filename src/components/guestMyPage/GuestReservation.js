import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GuestRecentReservation from './GuestRecentReservation';
import GuestPreviousRservation from './GuestPreviousReservation';

function GuestReservation() {
    const guestReservationUrl = '/book/v1/reservation/user/1';

    const [guestRecentReservation, setGuestRecentReservation] = useState([]);
    const [recent, setRecent] = useState({});

    useEffect(() => {
        axios.get(guestReservationUrl).then(res => {
            setGuestRecentReservation(res.data)
            setRecent(guestRecentReservation[guestRecentReservation.length-1])
            console.log(res.data)
            console.log(recent)
        })
    }, []);

    return (
        <>
            <div className="guest_recent_reservation">
                <GuestRecentReservation GuestReservation={GuestReservation} />
            </div>

            <div className="guest_previous_reservation">
                <GuestPreviousRservation GuestReservation={GuestReservation} />
            </div>
        </>
    );
}

export default GuestReservation;
