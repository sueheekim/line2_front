import React, { useState } from 'react';
import { format } from 'date-fns';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

function HostCheckOutCard({ guest, room, reservation, openModal}) {

    const formattedCheckInDate = format(new Date(reservation.checkIn), 'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut), 'yyyy-MM-dd');

    return (
        <div className="host_page_reservation_card">
            <div
                className="host_page_reservation_card_img"
                style={{ backgroundImage: `url("./img/${guest.userImg}")` }}
            ></div>
            <div className="host_page_reservation_card_column">
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">- 예약 번호:</p>
                    <p className="host_page_reservation_card_item">{reservation.id}</p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">* 이름 :</p>
                    <p className="host_page_reservation_card_item">{guest.userName}</p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">* 성별 :</p>
                    <p className="host_page_reservation_card_item">{guest.userGender ? '남자' : '여자'}</p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">* 연락처 :</p>
                    <p className="host_page_reservation_card_item">{guest.userPhoneNumber}</p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">* E-mail :</p>
                    <p className="host_page_reservation_card_item">{guest.userEmail}</p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">* 입소 날짜 :</p>
                    <p className="host_page_reservation_card_item">{formattedCheckInDate}</p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">* 퇴소 날짜 :</p>
                    <p className="host_page_reservation_card_item">{formattedCheckOutDate}</p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">*특이사항:</p>
                    <p className="host_page_reservation_card_item">{reservation.checkOutMessage}</p>
                </div>
                <div className="justify-content-space-evenly">
                    <button className="host_page_reservation_card_check_in_button" onClick={() => openModal(reservation.id)}>수정</button>
                </div>
            </div>
        </div>
    );
}

export default HostCheckOutCard;
