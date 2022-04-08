import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GuestReservationCard from './GusetRservationCard';

function GuestRecentReservation() {
    const guestRecentReservationUrl = '/book/v1/reservation/user/1';

    const [guestRecentReservation, setGuestRecentReservation] = useState([]);
    const [recent, setRecent] = useState({});

    useEffect(() => {
        axios.get(guestRecentReservationUrl).then(res => {
            setGuestRecentReservation(res.data);
            setRecent(
                guestRecentReservation[guestRecentReservation.length - 1],
            );
            console.log(res.data);
            console.log(recent);
        });
    }, []);

    return (
            <div className="guest_recent_reservation">
            <h2>최근예약</h2>
                {guestRecentReservation.map(reservation => (
                    <GuestReservationCard
                        home={reservation.home}
                        room={reservation.room}
                        reservation={reservation}
                    />
                ))}
            </div>
    );
}

export default GuestRecentReservation;
