import React, { useState, useEffect } from 'react';
import HostCheckInCard from './HostCheckInCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import { Box, Modal } from '@mui/material';
import Swal from 'sweetalert2';

function HostCheckIn() {
    const reservationCheckOutUrl = '/book/v1/reservation/home/before_check_out/';
    const checkOutUrl = '/book/v1/reservation/accept_check_out';
    const homeUrl = '/home/v1/home/user/';

    const [reservation, setReservation] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [reservationId, setReservationId] = useState(0);

    const user = useSelector(selectUser);

    useEffect(() => {
        axios.get(homeUrl + user.id).then(res => {
            axios.get(reservationCheckOutUrl + res.data.homeId).then(res => {
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

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const checkIn = () => {
        axios
            .put(checkOutUrl, {
                reservationId: reservationId,
                message: document.getElementById('host_page_modal_input_text').value,
            })
            .then(res => {
                if (res.data.code === 1) {
                    Toast.fire({
                        icon: 'success',
                        title: '퇴소 처리 완료'
                      })
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
                    Toast.fire({
                        icon: 'error',
                        title: '오류로 인하여 실패하였습니다.'
                      })
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
                        <div className="host_page_modal_title">게스트 퇴소</div>
                    </div>
                    <div className="host_page_modal_section">
                        <br />
                        <div className="host_page_modal_text">퇴소 특이사항 입력</div>
                        <br />
                        <div className="host_page_modal_input_box">
                            <textarea
                                id="host_page_modal_input_text"
                                className="host_page_modal_input"
                                placeholder="200자 내외로 간단하게 작성"
                            />
                        </div>
                        <div className="host_page_modal_section center">
                            <button className="guest_review_reservation_card_button" onClick={() => checkIn()}>
                                퇴소 처리 완료
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
            <div className="container">
                <div className="host_reservation_cards_box">
                    {reservation.map(guest => (
                        <HostCheckInCard
                            key={guest.id}
                            guest={guest.user}
                            home={guest.home}
                            reservation={guest}
                            openModal={openModal}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HostCheckIn;
