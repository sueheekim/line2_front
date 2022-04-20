import React, { useEffect, useState } from 'react';
import GuestReservationCard from './GusetRservationCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers/index';


function GuestReservationList() {
    const user = useSelector(selectUser);
    const guestReservationUrl = `/book/v1/reservation/user/before_check_in/`;

    const [guestRecentReservation, setGuestRecentReservation] = useState([]);
    const [recent, setRecent] = useState({});

    useEffect(() => {
        axios.get(guestReservationUrl+user.id).then(res => {
            setGuestRecentReservation(res.data);
            setRecent(
                guestRecentReservation[guestRecentReservation.length - 1],
            );
        });
    }, []);

    return (
            <div className="guest_recent_reservation">
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
