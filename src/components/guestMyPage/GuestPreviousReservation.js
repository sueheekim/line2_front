import React from 'react';
import { Button } from '@mui/material';

function GuestPreviousRservation({ GuestReservation }) {
    return (
        <>
            <h3>내가 예약한 숙소들</h3>
            <div className="guestPreviousReservation">
                <div className="reservation__container">
                    <div className="room_img">
                        <div className="shelter_name">
                            {GuestReservation.shelter_name}
                        </div>
                        <img
                            src={`img/${GuestReservation.homeImg}`}
                            alt="행복 쉼터"
                        />
                    </div>
                    <div className="shelter_location">
                        {GuestReservation.shelter_location}
                    </div>
                    <div className="room_name">{GuestReservation.roomName}</div>
                    <div className="checkIn_date">
                        {GuestReservation.checkInDate}
                    </div>
                    <div className="checkOut_date">
                        {GuestReservation.checkOutDate}
                    </div>
                </div>
                <div className="reservation_info">
                    <div className="reservation_id">
                        예약번호 : {GuestReservation.id}
                    </div>
                    <div className="reservation_date">
                        예약 상세 정보 : {GuestReservation.id}
                    </div>
                    <div className="reservation_username">
                        예약자 : {GuestReservation.userName}
                    </div>
                </div>
                <div className="reservation__button">
                    <Button variant="contained" color="error">
                        예약 취소
                    </Button>
                    <Button variant="contained" color="success">
                        호스트와 대화하기
                    </Button>
                    <Button variant="contained" color="error">
                        날짜 변경
                    </Button>
                </div>
            </div>
        </>
    );
}

export default GuestPreviousRservation;
