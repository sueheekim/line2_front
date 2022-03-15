import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HostReservation.css";
import { Button } from "@mui/material";
import GuestProfile from "../guestMyPage/GuestProfile";

function HostReservation() {
    const guestUrl = "http://localhost:3006/userProfile";
    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        axios.get(guestUrl).then((res) => {
            setUserProfile(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <>
            <div className="host_reservation_button">
                <Button variant="outlined" size="large">
                    예약목록
                </Button>
                <Button variant="outlined" size="large">
                    체크인
                </Button>
                <Button variant="outlined" size="large">
                    체크아웃
                </Button>
            </div>

            <div className="hostViewReservation">
                <div className="host_reservation_left">예약번호</div>
                <div className="guest_reservation_profile">
                    {userProfile.map((guest) => (
                        <GuestProfile key={guest.id} guest={guest} />
                    ))}
                </div>
                <div className="host_reservation_right">
                    <div className="room_name">선택 객실 이름</div>
                    <div className="checkIn_date">체크인 날짜</div>
                    <div className="checkOut_date">체크아웃 날짜</div>
                </div>

                <div className="host_reservation_card_button">
                <Button variant="contained" color="primary">
                    체크인 하기
                </Button>
                <Button variant="contained" color="error">
                    예약 거절하기
                </Button>
                </div>
            </div>
        </>
    );
}

export default HostReservation;
