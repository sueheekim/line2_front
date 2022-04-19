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
        // <div className="guestReservationCard">
        //     <div className="guest_reservation_container">
        //         <div className="room_img">
        //             <div className="shelter_name">{home.homeName}</div>
        //             <img src={`img/${homeImg}`} alt="home.png" />
        //         </div>
        //         <div className="shelter_location">{home.homeName}</div>
        //         <div className="room_name">{room.roomName}</div>
        //         <div className="checkin_date">{formattedCheckInDate}</div>
        //         <div className="checkout_date">{formattedCheckOutDate}</div>
        //     </div>
        //     <div className="reservation_info">
        //         <div className="reservation_id">
        //             예약번호 : {reservation.id}
        //         </div>
        //         <div className="reservation_date">
        //             예약 상세 정보 : {reservation.id}
        //         </div>
        //     </div>
        //     <div className="reservation_button">
        //         <Button
        //             variant="contained"
        //             color="error"
        //             onClick={cancelOpenModal}
        //         >
        //             예약 취소
        //         </Button>
        //         <Button variant="contained" color="error" onClick={openModal}>
        //             날짜 변경
        //         </Button>
        //     </div>
        //     <div>
        //         <GuestChangeDateModal
        //             open={modalOpen}
        //             close={closeModal}
        //             cancel={cancelModal}
        //             reservation={reservation}
        //         />
        //     </div>
        //     <div>
        //         <GuestReservationCancelModal
        //             open={cancelModalOpen}
        //             close={cancelCloseModal}
        //             cancel={cancelCancelModal}
        //             setDenyMessage={setCancelMessage}
        //             denymessage={cancelmessage}
        //         />
        //     </div>
        // </div>
    );
}

export default GuestReservationCard;
