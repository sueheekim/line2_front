import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GuestCheckOutCard from './GuestCheckOutCard';

function GuestCheckOut() {
    const checkOutGuestsUrl = '/book/v1/reservation/accept_check_out/1';
    const [checkOutGuest, setCheckOutGuest] = useState([]);

    useEffect(() => {
        axios.get(checkOutGuestsUrl).then(res => {
            setCheckOutGuest(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <>
            <div className="guestCheckOutPage">
                {checkOutGuest.map(reservation => (
                    <GuestCheckOutCard
                        key={reservation.id}
                        reservation={reservation}
                    />
                ))}
            </div>
        </>
    );
}

export default GuestCheckOut;
