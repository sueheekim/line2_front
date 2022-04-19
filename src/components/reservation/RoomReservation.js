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
import { DateRangePicker } from 'react-date-range';
import { ko } from 'date-fns/esm/locale';

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
    const [headCount, setHeadCount] = useState([]);
    const [checkTime, setCheckTime] = useState([]);
    const [reservationCalendar, setReservationCalendar] = useState([]);
    const [calendarHeight, setCalendarHeight] = useState('0px');
    const memo = useRef();
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
    const [endDate, setEndDate] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1));

    useEffect(() => {
        document.getElementById('fullcalendar_box').style.display = 'none';
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
                        checkIn: new Date(startDate),
                        checkOut: new Date(endDate),
                    })
                    .then(res => {
                        headCount[props.home.rooms.indexOf(room)] = res.data;
                    });
                if (user) {
                    if (room.gender !== user.userGender) {
                        document.getElementById(`reservation_button1_${room.id}`).style.display = 'none';
                        document.getElementById(`reservation_button2_${room.id}`).style.display = 'none';
                    }
                } else if (!user) {
                    navigate('/login');
                }
            });
    }, [props.home.rooms, handelChangeDateModal, headCount]);

    useEffect(() => {
        setTimeout(function () {
            openChangeDateModal();
            closeChangeDateModal();
        }, 2000);
    }, []);

    const openReservationModal = room => {
        setHandelReservationModal(true);
        setHomeRoom({
            homeId: props.home.homeId,
            roomId: room.id,
            homeName: props.home.homeName,
            homeAddress: props.home.homeAddress,
            roomName: room.roomName,
            checkIn:
                String(startDate.getFullYear()) +
                '년 ' +
                String(startDate.getMonth() + 1) +
                '월 ' +
                String(startDate.getDate()) +
                '일 ' +
                checkTime[props.home.checkInTimeId - 1],
            checkOut:
                String(endDate.getFullYear()) +
                '년 ' +
                String(endDate.getMonth() + 1) +
                '월 ' +
                String(endDate.getDate()) +
                '일 ' +
                checkTime[props.home.checkOutTimeId - 1],
        });
    };

    const handleSelect = ranges => {
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    };
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'Selection',
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
                userId: user.id,
                checkIn: new Date(startDate),
                checkOut: new Date(endDate.getTime() + 1000 * 3600 * 23 + 3599999),
                guestToHost: memo.current.value,
            })
            .then(res => {
                if (res.data.code === 1) {
                    alert('예약이 성공하였습니다.');
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
        document.getElementById('fullcalendar_box').style.display = 'block';
        axios.get(reservationCalendarUrl + id).then(res => {
            setReservationCalendar(res.data);
        });
    };

    return (
        <>
            <p className={'title'}>예약 가능 여부</p>
            <div className={'contents_container'}>
                <div className={'row center'}>
                    <div>
                        <p className={'reservation_content_1'}>입소일 날짜</p>
                        <p className={'reservation_content_2'}>
                            {startDate.getFullYear()}년 {startDate.getMonth() + 1}월 {startDate.getDate()}일
                        </p>
                        <p className={'reservation_content_3'}>{checkTime[props.home.checkInTimeId - 1]}</p>
                    </div>
                    <div>
                        <p className={'reservation_content_1'}>퇴소일 날짜</p>
                        <p className={'reservation_content_2'}>
                            {endDate.getFullYear()}년 {endDate.getMonth() + 1}월 {endDate.getDate()}일
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
                    <div>
                        <Box className={'reservation_modal_box'}>
                        <div className="center reservation_date_picker_title">입퇴소 날짜 변경</div>
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
                        </Box>
                    </div>
                </Modal>

                <table className={'reservation_table'}>
                    <thead>
                        <tr>
                            <th className={'table_room_name'} style={{ width: '20%' }}>
                                객실 이름
                            </th>
                            <th className={'table_room_gender'}>입실 가능 성별</th>
                            <th className={'table_room_max_head_count'} style={{ width: '10%' }}>
                                정원
                            </th>
                            <th className={'table_room_available'} style={{ width: '10%' }}>
                                남은 자리
                            </th>
                            <th className={'table_room_button'} style={{ width: '20%' }}>
                                객실 현황
                            </th>
                            <th className={'table_room_button'} style={{ width: '20%' }}>
                                예약
                            </th>
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
                                            id={`reservation_button1_${room.id}`}
                                            className={'reservation_room_button'}
                                            onClick={() => openCalendar(room.id)}
                                        >
                                            달력 보기
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            id={`reservation_button2_${room.id}`}
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
                <div id="fullcalendar_box">
                    <FullCalendar plugins={[dayGridPlugin]} events={reservationCalendar} contentHeight="420px" />
                </div>
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
                        <p className={'center reservation_modal_text_color'}>예약을 확정하시겠습니까?</p>
                        <p className={'reservation_modal_text'}>
                            예약 확정 후 본인 확인이 완료되면 체크인하여 입실할 수 있습니다.
                        </p>
                    </div>
                    <div>
                        <table className={'reservation_table'}>
                            <thead>
                                <tr>
                                    <td>쉼터 이름</td>
                                    <td>숙소 주소</td>
                                    <td>객실 이름</td>
                                    <td>체크인 날짜</td>
                                    <td>체크아웃 날짜</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '12%' }}>{homeRoom.homeName}</td>
                                    <td>{homeRoom.homeAddress}</td>
                                    <td style={{ width: '12%' }}>{homeRoom.roomName}</td>
                                    <td>{homeRoom.checkIn}</td>
                                    <td>{homeRoom.checkOut}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={'center'}>
                        <p className={'reservation_modal_text'}>호스트에게 별도 문의사항</p>
                        <textarea
                            className={'reservation_modal_input'}
                            ref={memo}
                            placeholder="본인의 상황(쉼터생활 경험, 공동생활 가능여부, 자립의지, 심리상태 등등)과
                            별도의 문의 사항을 200자 내외로 작성해주시면 입실에 도움이 됩니다."
                        />
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
