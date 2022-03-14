import { Button } from '@mui/material';
import React from 'react';
import './GuestViewReservation.css';

function GuestViewReservation({reservation}) {
    return (
        <div className='guestViewReservation'>
            <h3>최근 예약 목록</h3>
            <div className='reservation__container'>
                <div className='room_img'>
                    <img src={`img/${reservation.homeImg}`} alt='user.png'/>
                </div>
                <div className='room_location'>
                    {reservation.shelter_location}
                </div>
                <div className='room_name'>
                    {reservation.roomName}
                </div>
                <div className='checkIn_date'>
                    {reservation.checkInDate}
                </div>
                <div className='checkOut_date'>
                    {reservation.checkOutDate}
                </div>
            </div>
            <div className='reservation_info'>
                <div className='reservation_id'>
                    예약번호 : {reservation.id}
                </div>
                <div className='reservation_date'>
                    예약 상세 정보 : {reservation.id}
                </div>
                <div className='reservation_username'>
                    예약자 : {reservation.userName}
                </div>
            </div>
            <div className='reservation__button'>
                <Button variant='contained'>예약 취소</Button>
                <Button variant='contained'>호스트와 대화하기</Button>
                <Button variant='contained'>날짜 변경</Button>
            </div>
        </div>  
    );
}

export default GuestViewReservation;