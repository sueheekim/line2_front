import { Button } from "@mui/material";
import React,{useState} from "react";
import {format} from 'date-fns';
import GuestChangeDateModal from "./GuestChangeDateModal";
import axios from "axios";
function GuestRecentReservation({ home, room, reservation}) {
    const [modalOpen, setModalOpen] = useState(false);

    const formattedCheckInDate = format(new Date(reservation.checkIn),'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut),'yyyy-MM-dd');

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }
    const cancelModal = () => {
        setModalOpen(false)
    }

    return (
        <div className="guest_recent_reservation">
            <h2>최근 예약</h2>
            <div className="guest_reservation_container">
                <div className="room_img">
                    <div className="shelter_name">
                        {home.homeName}
                    </div>
                    <img src={`img/${home.homeImg}`} alt="user.png" />
                </div>
                <div className="shelter_location">
                    {home.homeName}
                </div>
                <div className="room_name">{room.roomName}</div>
                <div className="checkin_date">{formattedCheckInDate}</div>
                <div className="checkout_date">{formattedCheckOutDate}</div>
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
            <div className="reservation_button">
                <Button variant="contained" color="error">예약 취소</Button>
                <Button variant="contained" color="success">호스트와 대화하기</Button>
                <Button variant="contained" color="error" onClick={openModal}>날짜 변경</Button>
            </div>
            <div>
                <GuestChangeDateModal  open={modalOpen} close={closeModal} cancel={cancelModal} reservation={reservation}/>
            </div>
        </div>
    );
}

export default GuestRecentReservation;
