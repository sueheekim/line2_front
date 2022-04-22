import React, { useEffect, useState } from 'react';
import GuestReservationCard from './GusetRservationCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers/index';
import { Box, Modal } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import { ko } from 'date-fns/esm/locale';

function GuestReservationList() {
    const user = useSelector(selectUser);
    const guestReservationUrl = `/book/v1/reservation/user/before_check_in/`;
    const cancelUrl = '/book/v1/reservation/cancel';
    const now = new Date(Date.now());
    const [guestRecentReservation, setGuestRecentReservation] = useState([]);
    const [recent, setRecent] = useState({});
    const [changeModalOpen, setChangeModalOpen] = useState(false);
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [reservationId, setReservationId] = useState(0);
    const [startDate, setStartDate] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
    const [endDate, setEndDate] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1));

    useEffect(() => {
        axios.get(guestReservationUrl + user.id).then(res => {
            setGuestRecentReservation(res.data);
            setRecent(guestRecentReservation[guestRecentReservation.length - 1]);
        });
    }, []);

    const handleSelect = ranges => {
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    };
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'Selection',
    };
    const openChangeModal = id => {
        setChangeModalOpen(true);
        setReservationId(id);
    };
    const closeChangeModal = () => {
        setChangeModalOpen(false);
    };
    const openCancelModal = id => {
        setCancelModalOpen(true);
        setReservationId(id);
    };

    const closeCancelModal = () => {
        setCancelModalOpen(false);
    };

    const cancelReservation = () => {
        if (window.confirm('정말 예약을 취소하겠습니까?')) {
            axios
                .put(cancelUrl, {
                    reservationId: reservationId,
                    message: document.getElementById('guest_reservation_cancel_message').value,
                })
                .then(res => {
                    alert(res.data.message);
                    if (res.data.code === 1) {
                        setCancelModalOpen(false);
                        setGuestRecentReservation(
                            guestRecentReservation
                                .slice(
                                    0,
                                    guestRecentReservation.findIndex(re => re.id === reservationId),
                                )
                                .concat(
                                    guestRecentReservation.slice(
                                        guestRecentReservation.findIndex(re => re.id === reservationId) + 1,
                                        guestRecentReservation.length,
                                    ),
                                ),
                        );
                    }
                });
        }
    };

    return (
        <>
            <Modal
                className="reservation_modal_container"
                open={cancelModalOpen}
                onClose={closeCancelModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'host_page_modal_box'}>
                    <div className="host_page_modal_section">
                        <div className="host_page_modal_title">예약 취소</div>
                    </div>
                    <div className="host_page_modal_section">
                        <div className="host_page_modal_text">취소 사유 입력</div>
                        <div className="host_page_modal_input_box">
                            <textarea
                                id="guest_reservation_cancel_message"
                                className="host_page_modal_input"
                                placeholder="200자 내외로 간단하게 작성"
                            />
                        </div>
                        <div className="host_page_modal_section center">
                            <button
                                className="guest_review_reservation_card_button"
                                onClick={() => cancelReservation()}
                            >
                                예약 취소 완료
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
            <Modal
                className="reservation_modal_container"
                open={changeModalOpen}
                onClose={closeChangeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'host_page_modal_box'}>
                    <div className="host_page_modal_section">
                        <div className="host_page_modal_title">예약 변경</div>
                    </div>
                    <div className="host_page_modal_section">
                        <DateRangePicker
                                locale={ko}
                                months={1}
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={['#125b30']}
                                onChange={handleSelect}
                                staticRanges={[]}
                                inputRanges={[]}                                
                            />
                        <div className="host_page_modal_section center">
                            <button
                                className="guest_review_reservation_card_button"
                                onClick={() => cancelReservation()}
                            >
                                예약 변경 완료
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
            <div className="guest_recent_reservation">
                {guestRecentReservation.map(reservation => (
                    <GuestReservationCard
                        key={reservation.id}
                        home={reservation.home}
                        room={reservation.room}
                        reservation={reservation}
                        openCancelModal={openCancelModal}
                        openChangeModal={openChangeModal}
                    />
                ))}
            </div>
        </>
    );
}

export default GuestReservationList;
