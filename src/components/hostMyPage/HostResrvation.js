import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./HostReservation.css";
import { Button } from "@mui/material";
import GuestProfile from "../guestMyPage/GuestProfile";

function HostReservation( ) {

    const guestUrl = "http://localhost:3006/userProfile";
    const [userProfile, setUserProfile] = useState([]);

    useEffect(()=>{
        axios.get(guestUrl)
        .then(res=>{
            setUserProfile(res.data);
            console.log(res.data);
        });
    },[]);


    return (
        <>
            <div className="host__button">
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
                <div className="guest_reservation_id">
                    예약번호
                </div>
                <div className="guest_reservation_profile">
                {
                    userProfile.map((guest)=>(
                        <GuestProfile key={guest.id} guest={guest}/>
                        ))
                }
                </div>
            </div>
        </>
    );
}

export default HostReservation;
