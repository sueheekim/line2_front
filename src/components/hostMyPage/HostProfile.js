import { Button } from "@mui/material";
import React from "react";
import './HostProfile.css';
import {format} from 'date-fns';

function HostProfile({guest, home, reservation}) {

    const formattedCheckInDate = format(new Date(reservation.checkIn),'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut),'yyyy-MM-dd');
    return (
        <div className="hostReservation_check">
        <div className='guestViewProfile'>
            <h3>예약 번호 {reservation.id}</h3>
            <h3>게스트 프로필</h3>
            <div className='guestProfile_container'>
                <div className='guestProfile_imglay'>
                    <img src={`img/${guest.userImg}`} alt='user.png'/>
                </div>
                <div className='guest_name'>
                    {guest.userName} {guest.userGender}
                </div>
                <div className='guest_phone'>
                    {guest.userPhoneNumber}
                </div>
                <div className='guest_email'>
                    {guest.userEmail}
                    
                </div>
            </div>
        </div>
        <div className="hostReservaion_info">
            <div>
            선택 객실 이름 : {home.homeName}
            </div>
            <div>
            체크인 날짜 : {formattedCheckInDate}
            </div>
            <div>
            체크 아웃 날짜 : {formattedCheckOutDate}
            </div>
            <div>
            게스트 문의사항 : {reservation.guestToHost}
            </div>
            <div className="hostReservaion_info_button">
            <Button variant="contained">본인 확인 완료</Button>
            <Button variant="contained">예약 거절 하기</Button>
            </div>
        </div>
        </div>
    );
}
export default HostProfile;