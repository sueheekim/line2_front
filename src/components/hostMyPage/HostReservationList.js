import React, { useState, useEffect } from 'react';
import HostProfile from './HostProfile';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import { Box, Modal } from '@mui/material';

function HostReservationList() {
    const reservationBeforeUrl = '/book/v1/reservation/home/before_check_in/';
    const checkInUrl = '/book/v1/reservation/accept_check_in';
    const denyUrl = '/book/v1/reservation/deny';
    const homeUrl = '/home/v1/home/user/';

    const [reservation, setReservation] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [reservationId, setReservationId] = useState(0);

    const user = useSelector(selectUser);

    useEffect(() => {
        axios.get(homeUrl + user.id).then(res => {
            axios.get(reservationBeforeUrl + res.data.homeId).then(res => {
                setReservation(res.data);
            });
        });
    }, []);

    const openModal = id => {
        setModalState(true);
        setReservationId(id);
    };

    const closeModal = () => {
        setModalState(false);
    };

    const checkIn = () => {
        axios
            .put(checkInUrl, {
                reservationId: reservationId,
                message: document.getElementById('host_page_modal_input_text').value,
            })
            .then(res => {
                if (res.data.code === 1) {
                    alert('입소 처리 완료');
                    closeModal();
                    setReservation(
                        reservation
                            .slice(
                                0,
                                reservation.findIndex(re => re.id === reservationId),
                            )
                            .concat(
                                reservation.slice(
                                    reservation.findIndex(re => re.id === reservationId) + 1,
                                    reservation.length,
                                ),
                            ),
                    );
                } else {
                    alert('오류로 인하여 실패하였습니다');
                }
            });
    };

    return (
        <>
            <Modal
                className="reservation_modal_container"
                open={modalState}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'host_page_modal_box'}>
                    <div className="host_page_modal_section">
                        <div className="host_page_modal_title">게스트 본인확인</div>
                    </div>
                    <div className="host_page_modal_section">
                        <div className="host_page_modal_text">1. 게스트가 본인임을 확인했습니다.</div>
                        <div className="host_page_modal_text">2. 게스트가 객실에 입실 완료했습니다.</div>
                    </div>
                    <div className="host_page_modal_section">
                        <div className="host_page_modal_text">게스트 특이사항 입력</div>
                        <div className="host_page_modal_input_box">
                            <textarea
                                id="host_page_modal_input_text"
                                className="host_page_modal_input"
                                placeholder="200자 내외로 간단하게 작성"
                            />
                        </div>
                        <div className="host_page_modal_section center">
                            <button className="guest_review_reservation_card_button" onClick={() => checkIn()}>
                                본인확인 완료
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
            <div className="container">
                <div className="host_reservation_cards_box">
                    {reservation.map(reservation => (
                        <HostProfile
                            key={reservation.id}
                            guest={reservation.user}
                            home={reservation.home}
                            reservation={reservation}
                            setReservation={setReservation}
                            openModal={openModal}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HostReservationList;
