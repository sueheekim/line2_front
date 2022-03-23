import React from "react";
import { Button } from "react-bootstrap";

function GuestPreviousRservation({ reservation }) {
    return ( 
        <>
        <h3>내가 예약한 숙소들</h3>
        <div className="guestPreviousReservation">
            <div className="reservation__container">
                <div className="room_img">
                    <div className="shelter_name">
                        {reservation.shelter_name}
                    </div>
                    <img src={`img/${reservation.homeImg}`} alt="행복 쉼터" />
                </div>
                <div className="shelter_location">
                    {reservation.shelter_location}
                </div>
                <div className="room_name">{reservation.roomName}</div>
                <div className="checkIn_date">{reservation.checkInDate}</div>
                <div className="checkOut_date">{reservation.checkOutDate}</div>
            </div>
            <div className="reservation_info">
                <div className="reservation_id">
                    예약번호 : {reservation.id}
                </div>
                <div className="reservation_date">
                    예약 상세 정보 : {reservation.id}
                </div>
                <div className="reservation_username">
                    예약자 : {reservation.userName}
                </div>
            </div>
            <div className="reservation__button">
                <Button variant="primary">예약 취소</Button>
                <Button variant="warning">호스트와 대화하기</Button>
                <Button variant="danger">날짜 변경</Button>
            </div>
        </div>
        </>
     );
}

export default GuestPreviousRservation;