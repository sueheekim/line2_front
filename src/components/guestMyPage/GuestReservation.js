import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GuestReservation.css';
import GuestAlarmHome from './GuestAlarmHome';
import GuestRecentReservation from './GuestRecentReservation';
import GuestPreviousRservation from './GuestPreviousReservation';

function GuestReservation() {

    const guestRecentReservationUrl = '/book/v1/reservation/user/1';

    const [guestRecentReservation, setGuestRecentReservation] = useState([]);

    useEffect(() => {
        axios.get(guestRecentReservationUrl).then(res => {
            setGuestRecentReservation(res.data);
            console.log(res.data);
        });
    }, []);
    return (
        <>
            <div className="guestReservation">
                    <GuestRecentReservation GuestReservation ={GuestReservation} />
            </div>

           
        </>
    );
}

export default GuestReservation;
