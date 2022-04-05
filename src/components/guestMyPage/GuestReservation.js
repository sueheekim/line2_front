import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GuestReservation.css';
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
            <div className="guestRecentReservation">
                <GuestRecentReservation home={recent.home} room={recent.room} reservation={recent}/>
            </div>

            <div className="guestPreviousReservation">
                <GuestPreviousRservation GuestReservation={GuestReservation} />
            </div>
        </>
    );
}

export default GuestReservation;
