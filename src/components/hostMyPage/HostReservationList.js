import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import HostProfile from './HostProfile';
import axios from 'axios';

function HostReservationList() {
    const reservationUrl = '/book/v1/reservation/user/before_check_in/2';
    const [reservation, setReservation] = useState([]);

    useEffect(() => {
        axios.get(reservationUrl).then(res => {
            setReservation(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <>
            <Card sx={{ maxWidth: 1000 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div className="guest_reservation_profile">
                            {reservation.map(reservation => (
                                <HostProfile
                                    guest={reservation.user}
                                    home={reservation.home}
                                    reservation={reservation}
                                    setReservation={setReservation}
                                />
                            ))}
                        </div>
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    ></Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default HostReservationList;
