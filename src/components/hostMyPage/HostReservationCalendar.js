import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import axios from 'axios';

function HostReservationCalendar() {
    const reservationCalendarUrl = '/book/v1/reservation/calendars/';

    const [calendar, setCalendar] = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        console.log(user.id);
        axios.get(reservationCalendarUrl + user.id).then(res => {
            setCalendar(res.data);
        });
    }, []);

    return (
        <div className="container">
            {calendar &&
                calendar.map((cal, index) => (
                    <div key={index} className="host_reservation_calendar_box">
                        <div className="host_reservation_calendar_title">객실 이름: {cal.roomName}</div>
                        <FullCalendar plugins={[dayGridPlugin]} events={cal.calendar} contentHeight="420px" />
                    </div>
                ))}
        </div>
    );
}

export default HostReservationCalendar;
