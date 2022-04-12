import React, { useState } from 'react';
import { Button } from '@mui/material';
import { format } from 'date-fns';
import HostReservationModal from './HostReservationModal';
import HostReservationCancelModal from './HostReservationCancelModal';
import axios from 'axios';

function HostProfile({ guest, home, reservation, setReservation }) {
    const reservationUrl = '/book/v1/reservation/accept_check_in';
    const denyUrl = '/book/v1/reservation/deny';

    const [modalOpen, setModalOpen] = useState(false);
    const [denyModalOpen, setDenyModalOpen] = useState(false);
    const [denymessage, setDenyMessage] = useState('');
    const [checkInMessage, setCheckInMessage] = useState('');

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        axios
            .put(reservationUrl, {
                reservationId: reservation.id,
                message: checkInMessage,
            })
            .then(res => {
                console.log(res);
            })
            .then(setModalOpen(false));
    };

    const cancelModal = () => {
        setModalOpen(false);
    };

    const denyOpenModal = () => {
        setDenyModalOpen(true);
    };
    const denyCloseModal = () => {
        axios
            .put(denyUrl, {
                reservationId: reservation.id,
                message: denymessage,
            })
            .then(res => {
                console.log(res);
            })
            .then(setDenyModalOpen(false));
    };
    const denyCancelModal = () => {
        setDenyModalOpen(false);
    };

    console.log(reservation)

    const formattedCheckInDate = format(
        new Date(reservation.checkIn),
        'yyyy-MM-dd',
    );
    const formattedCheckOutDate = format(
        new Date(reservation.checkOut),
        'yyyy-MM-dd',
    );

    return (
        <div className="host_reservation_check">
            <div className="guest_profile">
                <h3>예약 번호 {reservation.id}</h3>
                <h3>게스트 프로필</h3>
                <div className="guest_profile_container">
                    <div className="guest_profile_img">
                        <img src={`img/${guest.userImg}`} alt="user.png" />
                    </div>
                    <div className="guest_name">
                        {guest.userName} {guest.userGender}
                    </div>
                    <div className="guest_phone">{guest.userPhoneNumber}</div>
                    <div className="guest_email">{guest.userEmail}</div>
                </div>
            </div>
            <div className="host_reservation_info">
                <div>선택 객실 이름 : {home.homeName}</div>
                <div>체크인 날짜 : {formattedCheckInDate}</div>
                <div>체크 아웃 날짜 : {formattedCheckOutDate}</div>
                <div>게스트 문의사항 : {reservation.guestToHost}</div>
                <div className="host_reservation_info_button">
                    <Button variant="contained" onClick={openModal}>
                        본인 확인 완료
                    </Button>
                    <Button variant="contained" onClick={denyOpenModal}>
                        예약 거절 하기
                    </Button>
                    <div>
                        <HostReservationModal
                            open={modalOpen}
                            close={closeModal}
                            cancel={cancelModal}
                            setCheckInMessage={setCheckInMessage}
                        />
                    </div>
                    <div>
                        <HostReservationCancelModal
                            open={denyModalOpen}
                            close={denyCloseModal}
                            cancel={denyCancelModal}
                            setDenyMessage={setDenyMessage}
                            denymessage={denymessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HostProfile;
