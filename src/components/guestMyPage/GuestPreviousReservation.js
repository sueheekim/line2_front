import React, { useState } from 'react';
import { Button } from '@mui/material';
import GuestReservationCancelModal from './GuestReservationCancelModal';
import axios from 'axios';

function GuestPreviousRservation({ GuestReservation }) {
    const cancelUrl = '/book/v1/reservation/cancel';

    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [cancelmessage, setCancelMessage] = useState('');

    const cancelOpenModal = () => {
        setCancelModalOpen(true);
    };
    const cancelCloseModal = () => {
        if (window.confirm('숙소 정보 변경을 적용하시겠습니까?')) {
            axios
                .put(cancelUrl, {
                    reservationId: GuestReservation.id,
                    message: cancelmessage,
                })
                .then(res => {
                    console.log(res);
                })
                .then(setCancelModalOpen(false));
        }
    };
    const cancelCancelModal = () => {
        setCancelModalOpen(false);
    };
    return (
        <>
            <h2>내가 예약한 숙소들</h2>
            <div className="guest_previous_reservation">
                <div className="guest_reservation_container">
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
                    <div className="checkin_date">
                        {GuestReservation.checkInDate}
                    </div>
                    <div className="checkout_date">
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
                <div className="reservation_button">
                    <Button
                        variant="contained"
                        color="error"
                        onClick={cancelOpenModal}
                    >
                        예약 취소
                    </Button>
                    <Button variant="contained" color="success">
                        호스트와 대화하기
                    </Button>
                    <Button variant="contained" color="error">
                        날짜 변경
                    </Button>
                </div>
                <div>
                    <GuestReservationCancelModal
                        open={cancelModalOpen}
                        close={cancelCloseModal}
                        cancel={cancelCancelModal}
                        setDenyMessage={setCancelMessage}
                        denymessage={cancelmessage}
                    />
                </div>
            </div>
        </>
    );
}

export default GuestPreviousRservation;
