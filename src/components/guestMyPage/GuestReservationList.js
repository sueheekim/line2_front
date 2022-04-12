import React, { useEffect, useState } from 'react';
import GuestReservationCard from './GusetRservationCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers/index';





function GuestReservationList() {
    const user = useSelector(selectUser);
    console.log(selectUser);
    
    const guestReservationUrl = `/book/v1/reservation/user/${user.id}`;
    console.log(user);

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
