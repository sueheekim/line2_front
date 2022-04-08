import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { format } from 'date-fns';
import GuestChangeDateModal from './GuestChangeDateModal';
import GuestReservationCancelModal from './GuestReservationCancelModal';
import axios from 'axios';

function GuestReservationCard({ home, room, reservation }) {
    const imgUrl = '/home/v1/home_image_table/home/one/';
    const [modalOpen, setModalOpen] = useState(false);
    const [homeImg, setHomeImg] = useState('');

    useEffect(() => {
        axios.get(imgUrl + home.id).then(res => {
            setHomeImg(res.data);
            console.log(res.data);
        });
    }, []);

    const formattedCheckInDate = format(
        new Date(reservation.checkIn),
        'yyyy-MM-dd',
    );
    const formattedCheckOutDate = format(
        new Date(reservation.checkOut),
        'yyyy-MM-dd',
    );

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const cancelModal = () => {
        setModalOpen(false);
    };

    const cancelUrl = '/book/v1/reservation/cancel';

    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [cancelmessage, setCancelMessage] = useState('');

    const cancelOpenModal = () => {
        setCancelModalOpen(true);
    };
    const cancelCloseModal = () => {
        axios
            .put(cancelUrl, {
                reservationId: reservation.id,
                message: cancelmessage,
            })
            .then(res => {
                console.log(res);
            })
            .then(setCancelModalOpen(false));
    };
    const cancelCancelModal = () => {
        setCancelModalOpen(false);
    };

    return (
        <div className="guestReservationCard">
            <div className="guest_reservation_container">
                <div className="room_img">
                    <div className="shelter_name">{home.homeName}</div>
                    <img src={`img/${homeImg}`} alt="home.png" />
                </div>
                <div className="shelter_location">{home.homeName}</div>
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
                <Button variant="contained" color="error" onClick={openModal}>
                    날짜 변경
                </Button>
            </div>
            <div>
                <GuestChangeDateModal
                    open={modalOpen}
                    close={closeModal}
                    cancel={cancelModal}
                    reservation={reservation}
                />
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
    );
}

export default GuestReservationCard;