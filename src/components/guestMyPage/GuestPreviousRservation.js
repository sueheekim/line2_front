import React, { useState, useEffect } from 'react';
import GuestReservationCard from './GusetRservationCard';
import axios from 'axios';

function GuestPreviousRservation() {
    const guestReservationUrl = '/book/v1/reservation/user/1';
    const [previous, setPrevious] = useState([]);

    useEffect(() => {
        axios.get(guestReservationUrl).then(res => {
            setPrevious(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="guest_previous_reservation">
            <h2>내가 예약한 숙소들</h2>
            {previous.map(reservation => (
                <GuestReservationCard
                    home={reservation.home}
                    room={reservation.room}
                    reservation={reservation}
                    setPrevious={setPrevious}
                />
            ))}
        </div>
    );
}

export default GuestPreviousRservation;
