import React, { useState } from 'react';
import { format } from 'date-fns';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function GuestChangeDateModal(props) {
    const { open, close, cancel, reservation } = props;
    const [checkIn, setCheckIn] = useState(reservation.checkIn);
    const [checkOut, setCheckOut] = useState(reservation.checkOut);

    const formattedCheckInDate = format(new Date(checkIn), 'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(checkOut), 'yyyy-MM-dd');

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <button className="close" onClick={cancel}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <p>날짜변경</p>
                        <div>
                            <div>
                                <p style={{ alignItems: 'center' }}>
                                    체크인:
                                    <CalendarMonthIcon
                                        style={{
                                            marginTop: '15px',
                                            alignItems: 'center',
                                        }}
                                    />
                                    {formattedCheckInDate}
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <DatePicker
                                            label="날짜 선택"
                                            openTo="day"
                                            views={['year', 'month', 'day']}
                                            value={checkIn}
                                            onChange={newValue => {
                                                setCheckIn(newValue);
                                            }}
                                            renderInput={params => (
                                                <TextField {...params} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </p>
                            </div>
                            <div>
                                <p style={{ alignItems: 'center' }}>
                                    체크아웃 :
                                    <CalendarMonthIcon
                                        style={{
                                            marginTop: '15px',
                                            alignItems: 'center',
                                        }}
                                    />
                                    {formattedCheckOutDate}
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <DatePicker
                                            label="날짜 선택"
                                            openTo="day"
                                            views={['year', 'month', 'day']}
                                            value={checkOut}
                                            onChange={newValue => {
                                                setCheckOut(newValue);
                                            }}
                                            renderInput={params => (
                                                <TextField {...params} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </p>
                            </div>
                        </div>
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                            날짜 변경
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default GuestChangeDateModal;
