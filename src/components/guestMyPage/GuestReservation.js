import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GuestReservation.css';
import GuestAlarmHome from './GuestAlarmHome';
import GuestRecentReservation from './GuestRecentReservation';
import GuestPreviousRservation from './GuestPreviousReservation';

function GuestReservation() {
    const guestReservationUrl = '/book/v1/reservation/user/1';
    const guestPreviousReservationUrl = '/book/v1/reservation/user/1';

    const [userReservation, setUserReservation] = useState([]);
    const [userPreviousReservation, setUserPreviousReservation] = useState([]);

    useEffect(() => {
        axios.get(guestReservationUrl).then(res => {
            setUserReservation(res.data);
            console.log(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get(guestPreviousReservationUrl).then(res => {
            setUserPreviousReservation(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <>
            <div className="guestReservation">
                {userReservation.map(reservation => (
                    <GuestRecentReservation
                        key={reservation.id}
                        reservation={reservation}
                    />
                ))}
            </div>

            <div className="guestAlarm__home">
                <GuestAlarmHome />
            </div>
            <div className="guestReservation">
                {userPreviousReservation.map(reservation => (
                    <GuestPreviousRservation
                        key={reservation.id}
                        reservation={reservation}
                    />
                ))}
            </div>
        </>
    );
}

export default GuestReservation;
