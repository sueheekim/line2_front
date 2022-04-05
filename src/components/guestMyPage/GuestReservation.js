import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GuestRecentReservation from './GuestRecentReservation';
import GuestPreviousRservation from './GuestPreviousReservation';

function GuestReservation() {
    const guestRecentReservationUrl = '/book/v1/reservation/user/1';
    const guestPreviousReservationUrl = '/book/v1/reservation/user/1';

    const [guestRecentReservation, setGuestRecentReservation] = useState([]);
    const [guestPreviousReservation, setguestPreviousReservation] = useState([]);

    useEffect(() => {
        axios.get(guestRecentReservationUrl).then(res => {
            setGuestRecentReservation(res.data);
            console.log(res.data);
        });
    }, []);
    useEffect(() => {
        axios.get(guestPreviousReservationUrl).then(res => {
            setguestPreviousReservation(res.data);
            console.log(res.data);
        });
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
