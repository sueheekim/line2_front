import { Button } from "@mui/material";
import React from "react";
function GuestRecentReservation({ GuestReservation }) {

    return (
        <div className="guest_recent_reservation">
            <h2>최근 예약</h2>
            <div className="guest_reservation_container">
                <div className="room_img">
                    <div className="shelter_name">
                        {GuestReservation.shelter_name}
                    </div>
                    <img src={`img/${GuestReservation.homeImg}`} alt="user.png" />
                </div>
                <div className="shelter_location">
                    {GuestReservation.homeName}
                </div>
                <div className="room_name">{GuestReservation.roomName}</div>
                <div className="checkin_date">{GuestReservation.checkInDate}</div>
                <div className="checkout_date">{GuestReservation.checkOutDate}</div>
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
            <div className="reservation_button">
                <Button variant="contained" color="error">예약 취소</Button>
                <Button variant="contained" color="success">호스트와 대화하기</Button>
                <Button variant="contained" color="error">날짜 변경</Button>
            </div>
        </div>
    );
}

export default GuestRecentReservation;
