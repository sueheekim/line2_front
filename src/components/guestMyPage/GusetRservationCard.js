import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { format } from 'date-fns';
import GuestChangeDateModal from './GuestChangeDateModal';
import GuestReservationCancelModal from './GuestReservationCancelModal';
import axios from 'axios';

function GuestReservationCard({ home, room, reservation }) {
    const imgUrl = '/home/v1/home_image_table/home/one/';
    const cancelUrl = '/book/v1/reservation/cancel';

    const [modalOpen, setModalOpen] = useState(false);
    const [homeImg, setHomeImg] = useState('');
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [cancelmessage, setCancelMessage] = useState('');

    const formattedCheckInDate = format(new Date(reservation.checkIn), 'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut), 'yyyy-MM-dd');

    useEffect(() => {
        axios.get(imgUrl + home.id).then(res => {
            setHomeImg(res.data);
            console.log(res.data);
        });
    }, []);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const cancelModal = () => {
        setModalOpen(false);
    };

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
        <div className="container">
            <div className="guest_review_reservation_card_box">
                <div className="guest_review_reservation_card">
                    <p className="guest_review_reservation_card_title">예약 내용을 확인하세요</p>
                    <div className="row">
                        <div
                            className="guest_review_reservation_card_img"
                            style={{ backgroundImage: `url("./img/shelter1-1.jpg")` }}
                        ></div>
                        <div className="guest_review_reservation_card_info">
                            <div className="justify-content-space-between">
                                <div className="guest_review_reservation_card_info_title">숙소 이름:</div>
                                <div className="guest_review_reservation_card_info_text">{home.homeName}</div>
                            </div>
                            <div className="justify-content-space-between">
                                <div className="guest_review_reservation_card_info_title">객실 이름:</div>
                                <div className="guest_review_reservation_card_info_text">{room.roomName}</div>
                            </div>
                            <div className="justify-content-space-between">
                                <div className="guest_review_reservation_card_info_title">숙소 주소:</div>
                                <div className="guest_review_reservation_card_info_text">{home.homeAddress}</div>
                            </div>
                            <div className="justify-content-space-between">
                                <div className="guest_review_reservation_card_info_title">입소일:</div>
                                <div className="guest_review_reservation_card_info_text">
                                    {new Date(reservation.checkIn).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="justify-content-space-between">
                                <div className="guest_review_reservation_card_info_title">퇴소일:</div>
                                <div className="guest_review_reservation_card_info_text">
                                    {new Date(reservation.checkOut).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="guest_review_reservation_card_button_box">
                                <button
                                    id={`guest_review_reservation_card_button${reservation.id}`}
                                    className="guest_review_reservation_card_button"
                                >
                                    예약 변경하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestReservationCard;
