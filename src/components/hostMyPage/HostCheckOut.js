import React, { useState, useEffect } from 'react';
import HostCheckOutCard from './HostCheckOutCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import { Box, Modal } from '@mui/material';

function HostCheckOut() {
    const checkOutHostUrl = '/book/v1/reservation/home/after_check_out/1';
    const checkOutUrl = '/book/v1/reservation/accept_check_out';
    const [checkInHost, setCheckInHost] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [reservationId, setReservationId] = useState(0);

    useEffect(() => {
        axios.get(checkOutHostUrl).then(res => {
            setCheckInHost(res.data);
        });
    }, [modalState]); 


    const openModal = id => {
        setModalState(true);
        setReservationId(id);
    };

    const closeModal = () => {
        setModalState(false);
    };


    const handleEdit = () => {
        axios
            .put(checkOutUrl, {
                reservationId: reservationId,
                message: document.getElementById('host_page_modal_input_text').value,
            })
            .then(res => {
                console.log(res);
                closeModal();
            });
            console.log({
                reservationId: reservationId,
                message: document.getElementById('host_page_modal_input_text').value,
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
                        <div className="host_page_modal_text">퇴소 특이사항 수정</div>
                        <div className="host_page_modal_input_box">
                            <textarea
                                id="host_page_modal_input_text"
                                className="host_page_modal_input"
                                placeholder="200자 내외로 간단하게 작성"
                            />
                        </div>
                        <div className="host_page_modal_section center">
                            <button className="guest_review_reservation_card_button" onClick={handleEdit}>
                                수정 완료
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
            <div className="container">
                <div className="host_reservation_cards_box">
                    {checkInHost.map(reservation => (
                        <HostCheckOutCard
                            guest={reservation.user}
                            home={reservation.home}
                            reservation={reservation}
                            setReservation={setCheckInHost}
                            openModal={openModal}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HostCheckOut;
