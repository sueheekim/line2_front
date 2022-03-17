import React, { useState, useEffect } from "react";
import GuestProfile from "../guestMyPage/GuestProfile";
import axios from "axios";
import { Button } from "@mui/material";

function HostReservationList() {
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

export default HostReservationList;