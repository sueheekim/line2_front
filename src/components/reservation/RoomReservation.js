import React, { useEffect, useRef, useState } from 'react';
import { Box, Modal, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';

// const { Kakao } = window;

function RoomReservation(props) {
    const reservationUrl = '/book/v1/reservation';
    const headCountUrl = '/book/v1/reservation/head_count';
    const checkTimeUrl = '/home/v1/check_time/list';
    const reservationCalendarUrl = '/book/v1/reservation/calendar/';
    const now = new Date(Date.now());
    const [handelReservationModal, setHandelReservationModal] = useState(false);
    const [handelChangeDateModal, setHandelChangeDateModal] = useState(false);
    const [homeRoom, setHomeRoom] = useState({});
    const [checkIn, setCheckIn] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
    const [checkOut, setCheckOut] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1));
    const [headCount, setHeadCount] = useState([]);
    const [checkTime, setCheckTime] = useState([]);
    const [reservationCalendar, setReservationCalendar] = useState([]);
    const [calendarHeight, setCalendarHeight] = useState('0px');
    const memo = useRef();
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(checkTimeUrl).then(res => {
            setCheckTime(res.data);
        });
    }, []);

    useEffect(() => {
        props.home.rooms &&
            props.home.rooms.map(room => {
                axios
                    .post(headCountUrl, {
                        roomId: room.id,
                        checkIn: new Date(checkIn),
                        checkOut: new Date(checkOut),
                    })
                    .then(res => {
                        headCount[props.home.rooms.indexOf(room)] = res.data;
                    });
            });
    }, [props.home.rooms, handelChangeDateModal, headCount]);
    
    useEffect(() => {
        setTimeout(function () {
            openChangeDateModal();
            closeChangeDateModal();
        }, 1000);

        setTimeout(function () {
            openChangeDateModal();
            closeChangeDateModal();
        }, 2000);

        setTimeout(function () {
            openChangeDateModal();
            closeChangeDateModal();
        }, 3000);

        setTimeout(function () {
            openChangeDateModal();
            closeChangeDateModal();
        }, 4000);

        setTimeout(function () {
            openChangeDateModal();
            closeChangeDateModal();
        }, 5000);
    }, [headCount]);

    const openReservationModal = room => {
        setHandelReservationModal(true);
        setHomeRoom({
            homeId: props.home.homeId,
            roomId: room.id,
            homeName: props.home.homeName,
            homeAddress: props.home.homeAddress,
            roomName: room.roomName,
            checkIn:
                String(checkIn.getFullYear()) +
                '년 ' +
                String(checkIn.getMonth() + 1) +
                '월 ' +
                String(checkIn.getDate()) +
                '일 ' +
                checkTime[props.home.checkInTimeId],
            checkOut:
                String(checkOut.getFullYear()) +
                '년 ' +
                String(checkOut.getMonth() + 1) +
                '월 ' +
                String(checkOut.getDate()) +
                '일 ' +
                checkTime[props.home.checkInTimeId],
        });
    };

    const closeReservationModal = () => {
        setHandelReservationModal(false);
    };

    const openChangeDateModal = () => {
        setHandelChangeDateModal(true);
    };

    const closeChangeDateModal = () => {
        setHandelChangeDateModal(false);
    };

    const okReservation = () => {
        axios
            .post(reservationUrl, {
                homeId: props.home.homeId,
                roomId: homeRoom.roomId,
                userId: 1,
                checkIn: new Date(checkIn),
                checkOut: new Date(checkOut.getTime() + 1000 * 3600 * 23 + 3599999),
                guestToHost: memo.current.value,
            })
            .then(res => {
                if (res.data.code === 1) {
                    alert('예약이 성공하였습니다.');
                    // sendTo();
                    navigate('/');
                } else if (res.data.code === 3) {
                    alert('인원이 가득차 예약이 실패하였습니다.');
                } else if (res.data.code === 4) {
                    alert('이미 다른 예약이 존재합니다.');
                } else {
                    alert('서버 오류로 예약이 실패하였습니다.');
                }
            });
    };

    const openCalendar = id => {
        axios.get(reservationCalendarUrl + id).then(res => {
            setReservationCalendar(res.data);
        });
    };

    return (
        <>
            <p className={'title'}>예약 가능 여부</p>
            <div className={'contents_container'}>
                <FullCalendar plugins={[dayGridPlugin]} events={reservationCalendar} contentHeight="450px" />
                <div className={'row center'}>
                    <div>
                        <p className={'reservation_content_1'}>체크인 날짜</p>
                        <p className={'reservation_content_2'}>
                            {checkIn.getFullYear()}년 {checkIn.getMonth() + 1}월 {checkIn.getDate()}일
                        </p>
                        <p className={'reservation_content_3'}>{checkTime[props.home.checkInTimeId - 1]}</p>
                    </div>
                    <div>
                        <p className={'reservation_content_1'}>체크아웃 날짜</p>
                        <p className={'reservation_content_2'}>
                            {checkOut.getFullYear()}년 {checkOut.getMonth() + 1}월 {checkOut.getDate()}일
                        </p>
                        <p className={'reservation_content_3'}>{checkTime[props.home.checkOutTimeId - 1]}</p>
                    </div>
                    <div>
                        <p className={'reservation_content_1'}>인원</p>
                        <p className={'reservation_content_2'}>청소년 1명</p>
                    </div>
                    <button className={'reservation_change_button'} onClick={() => openChangeDateModal()}>
                        검색 변경
                    </button>
                </div>

                <Modal
                    className="reservation_modal_container"
                    open={handelChangeDateModal}
                    onClose={closeChangeDateModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={'reservation_modal_box'}>
                        <div className={'row'}>
                            <div className={'day_pick_box'}>
                                <p className={'reservation_modal_text'}>체크인 날짜 변경</p>
                                <div className={'day_pick_inner_box'}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="날짜 선택"
                                            openTo="day"
                                            views={['year', 'month', 'day']}
                                            value={checkIn}
                                            onChange={newValue => {
                                                setCheckIn(newValue);
                                            }}
                                            renderInput={params => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div className={'day_pick_box'}>
                                <p className={'reservation_modal_text'}>체크아웃 날짜 변경</p>
                                <div className={'day_pick_inner_box'}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="날짜 선택"
                                            openTo="day"
                                            views={['year', 'month', 'day']}
                                            value={checkOut}
                                            onChange={newValue => {
                                                setCheckOut(newValue);
                                            }}
                                            renderInput={params => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>

                <table className={'reservation_table'}>
                    <thead>
                        <tr>
                            <th className={'table_room_name'}>객실 이름</th>
                            <th className={'table_room_gender'}>입실 가능 성별</th>
                            <th className={'table_room_max_head_count'}>정원</th>
                            <th className={'table_room_available'}>남은 자리</th>
                            <th className={'table_room_button'}>예약</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.home.rooms &&
                            props.home.rooms.map(room => (
                                <tr key={room.id}>
                                    <td>{room.roomName}</td>
                                    <td>{room.gender ? '남자' : '여자'}</td>
                                    <td>{room.maxHeadCount}</td>
                                    <td id={'test_id'}>
                                        {headCount.length
                                            ? room.maxHeadCount - headCount[props.home.rooms.indexOf(room)]
                                            : 0}
                                    </td>
                                    <td>
                                        <button
                                            className={'reservation_room_button'}
                                            onClick={() => openCalendar(room.id)}
                                        >
                                            예약 상황
                                        </button>
                                        <button
                                            className={'reservation_room_button'}
                                            onClick={() => openReservationModal(room)}
                                        >
                                            예약 하기
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <Modal
                className="reservation_modal_container"
                open={handelReservationModal}
                onClose={closeReservationModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'reservation_modal_box'}>
                    <div>
                        <p className={'reservation_modal_text'}>예약을 확정하시겠습니까?</p>
                        <p className={'reservation_modal_text'}>
                            예약 확정 후 본인 확인이 완료되면 체크인하여 입실할 수 있습니다.
                        </p>
                    </div>
                    <div>
                        <table className={'reservation_table'}>
                            <thead>
                                <tr>
                                    <td>숙소 이름</td>
                                    <td>숙소 주소</td>
                                    <td>객실 이름</td>
                                    <td>체크인 날짜</td>
                                    <td>체크아웃 날짜</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{homeRoom.homeName}</td>
                                    <td>{homeRoom.homeAddress}</td>
                                    <td>{homeRoom.roomName}</td>
                                    <td>{homeRoom.checkIn}</td>
                                    <td>{homeRoom.checkOut}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={'center'}>
                        <p className={'reservation_modal_text'}>호스트에게 별도 문의사항</p>
                        <textarea className={'reservation_modal_input'} ref={memo} />
                    </div>
                    <div className={'center'}>
                        <button className={'reservation_room_button'} onClick={() => okReservation()}>
                            예약 확정
                        </button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default RoomReservation;
