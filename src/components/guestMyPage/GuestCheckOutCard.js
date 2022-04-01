import React from 'react';
import { Card, CardContent, Button, Grid } from '@mui/material';
import './GuestCheckOutCard.css';

function GuestCheckOutCard({ reservation }) {
    return (
        <>
            <h3>체크아웃</h3>
            <Card sx={{ maxWidth: 1130 }}>
                <CardContent>
                    <div className="guest_checkoutcard_title">
                        {reservation.userName}님의 체크아웃 일정입니다.
                    </div>
                    <div className="guest_checkoutcard_checkin">
                        체크인 확정 날짜 : {reservation.checkInDate}
                    </div>
                    <div className="guest_checkoutcard_menu">
                        {reservation.shelter_name}
                    </div>
                    <div className="guest_checkoutcard_menu">
                        {reservation.roomName}
                    </div>
                    <div className="guest_checkoutcard_checkout">
                        체크아웃 예정 날짜 : {reservation.checkOutDate}
                    </div>
                </CardContent>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <div className="guest_checkoutcard_h4">오늘 퇴실 하실 예정이라면 체크아웃 하기를 클릭하세요</div>
                    <Button variant="contained" color="error">
                        체크 아웃 하기
                    </Button>
                </Grid>
            </Card>
        </>
    );
}

export default GuestCheckOutCard;
