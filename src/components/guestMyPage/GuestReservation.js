import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GuestProfile from './GuestProfile';
import GuestViewReservation from './GuestViewReservation';
import './GuestReservation.css';
import GuestAlarmHome from './GuestAlarmHome';

function GuestReservation() {
    const guestUrl = "http://localhost:3006/userProfile";
    const guestReservationUrl = "http://localhost:3006/userReservation";

    const [userProfile, setUserProfile] = useState([]);
    const [userReservation, setUserReservation] = useState([]);

    useEffect(()=>{
        axios.get(guestUrl)
        .then(res=>{
            setUserProfile(res.data);
            console.log(res.data);
        });
    },[]);

    useEffect(()=>{
        axios.get(guestReservationUrl)
        .then(res=>{
            setUserReservation(res.data);
            console.log(res.data)
        });
    },[]);

    return (
        <>
        <div className='guest__info'>
            <div className='guestProfile'>
                {
                    userProfile.map((guest)=>(
                        <GuestProfile key={guest.id} guest={guest}/>
                        ))
                }
            </div>
            <div className='guestReservation'>
                {
                    userReservation.map((reservation)=>(
                        <GuestViewReservation key={reservation.id} reservation={reservation}/>
                    ))
                }
            </div>
        </div>
        <div className='guestAlarm__home'>
            <GuestAlarmHome />
        </div>
        </>
    );
}

export default GuestReservation;