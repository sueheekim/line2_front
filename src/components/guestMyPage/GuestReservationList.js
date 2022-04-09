import React, { useEffect, useState } from 'react';
import GuestReservationCard from './GusetRservationCard';
import axios from 'axios';

function GuestReservationList() {
    const guestReservationUrl = '/book/v1/reservation/user/1';

    const [guestRecentReservation, setGuestRecentReservation] = useState([]);
    const [recent, setRecent] = useState({});

    useEffect(() => {
        axios.get(guestReservationUrl).then(res => {
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
            <h2>최근에 예약한 숙소</h2>
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

export default GuestReservationList;
