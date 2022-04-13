import React, { useState, useEffect } from 'react';
import HostProfile from './HostProfile';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

function HostReservationList() {
    const reservationUrl = '/book/v1/reservation/home/before_check_in/1';
    const [reservation, setReservation] = useState([]);

    useEffect(() => {
        axios.get(reservationUrl).then(res => {
            setReservation(res.data);
            console.log(res.data);
        });
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesPerRow: 4,
        rows: 1,
    };

    return (
        <Slider {...settings}>
            {reservation.map(reservation => (
                <HostProfile
                    guest={reservation.user}
                    home={reservation.home}
                    reservation={reservation}
                    setReservation={setReservation}
                />
            ))}
        </Slider>
    );
}

export default HostReservationList;
