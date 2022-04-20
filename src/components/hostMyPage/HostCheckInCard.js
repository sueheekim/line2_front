import React, { useState } from 'react';
import axios from 'axios';

function HostCheckInCard({ guest, home, reservation, openModal }) {
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
                    <p className="host_page_reservation_card_item">
                        {new Date(reservation.checkIn).toLocaleDateString()}
                    </p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">* 퇴소 날짜 :</p>
                    <p className="host_page_reservation_card_item">
                        {new Date(reservation.checkOut).toLocaleDateString()}
                    </p>
                </div>
                <div className="justify-content-space-between">
                    <p className="host_page_reservation_card_item_title">* 특이사항 :</p>
                    <p className="host_page_reservation_card_item">{reservation.checkInMessage}</p>
                </div>
                <div className="justify-content-space-evenly">
                    <button className="host_page_reservation_card_check_in_button" onClick={() => openModal(reservation.id)}>퇴소 처리</button>
                </div>
            </div>
        </div>
    );
}

export default HostCheckInCard;
