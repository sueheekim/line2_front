import React, { useState, useEffect } from 'react';
import HostCheckInCard from './HostCheckInCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

function HostCheckIn() {
    const checkInHostUrl = '/book/v1/reservation/home/before_check_out/1';
    const [checkInHost, setCheckInHost] = useState([]);

    useEffect(() => {
        axios.get(checkInHostUrl).then(res => {
            setCheckInHost(res.data);
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
            {checkInHost.map(guest => (
                <HostCheckInCard
                    key={guest.id}
                    guest={guest.user}
                    home={guest.home}
                    reservation={guest}
                />
            ))}
        </Slider>
    );
}

export default HostCheckIn;
