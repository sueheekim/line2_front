import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Card,  CardContent } from '@mui/material';
import axios from 'axios';

function GuestCheckInCard({ guest, home, reservation }) {
    const imgUrl = '/home/v1/home_image_table/home/one/';
    const [homeImg, setHomeImg] = useState('');

    useEffect(() => {
        axios.get(imgUrl + home.id).then(res => {
            setHomeImg(res.data);
            console.log(res.data);
        });
    }, []);

    const formattedCheckInDate = format(new Date(reservation.checkIn), 'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut), 'yyyy-MM-dd');

    return (
        <div className="host_checkin_card">
            <Card sx={{ maxWidth: 345 }}>
                <div className="host_checkin_card_guest_name">
                    환영합니다. {guest.userName}님 체크인이 완료 되었습니다.
                </div>
                <div className="host_checkin_card_indate" style={{ fontSize: 'small' }}>
                    체크인 날짜 : {formattedCheckInDate}
                </div>
                <img src={`img/${homeImg}`} alt="home.png" />

                <CardContent>
                    <div className="host_checkin_card_home_name">{home.homeName}</div>
                    <div className="host_checkin_card_rome_name">{home.romeName}</div>
                    <div className="host_checkin_card_outdate" style={{ fontSize: 'small' }}>
                        체크 아웃 예정일 : {formattedCheckOutDate}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default GuestCheckInCard;
