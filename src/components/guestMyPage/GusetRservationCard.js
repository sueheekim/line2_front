import React, { useEffect, useState } from 'react';

function GuestReservationCard({ home, room, reservation, openCancelModal, openChangeModal }) {

    return (
        <div className="container">
            <div className="guest_review_reservation_card_box">
                <div className="guest_review_reservation_card">
                    <p className="guest_review_reservation_card_title">예약 내용을 확인하세요</p>
                    <div className="row">
                        <div
                            className="guest_review_reservation_card_img"
                            style={{ backgroundImage: `url("./img/${reservation.homeImage}")` }}
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
                                    className="guest_review_reservation_card_button_delete"
                                    onClick={() => openCancelModal(reservation.id)}
                                >
                                    예약 취소하기
                                </button>
                                <button
                                    className="guest_review_reservation_card_button"
                                    onClick={() => openChangeModal(reservation.id)}
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
