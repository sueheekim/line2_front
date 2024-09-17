import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Card,  CardContent } from '@mui/material';
import axios from 'axios';

function GuestCheckInCard({ guest, home, reservation, room }) {
    const formattedCheckInDate = format(new Date(reservation.checkIn), 'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut), 'yyyy-MM-dd');

    return (
        <div className="container">
            <div className="guest_review_reservation_card_box">
                <div className="guest_review_reservation_card">
                    <div className="justify-content-space-between">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestCheckInCard;
