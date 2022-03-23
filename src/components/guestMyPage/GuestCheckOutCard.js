import React from "react";
import { Card, Button } from "react-bootstrap";

function GuestCheckOutCard({ reservation }) {
    return (
        <>
            <h2>체크아웃</h2>
            <Card>
                <Card.Header>체크아웃 확인</Card.Header>
                <Card.Body>
                    <Card.Title>{reservation.userName}님의 체크아웃 일정입니다.</Card.Title>
                    <Card.Text>
                        <div>{reservation.shelter_name}</div>
                        <div>{reservation.shelter_location}</div>
                        <div>{reservation.roomName}</div>
                        <div>{reservation.checkOutDate}</div>
                    </Card.Text>
                    <Button variant="outline-danger" size="sm" >체크아웃 하기</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default GuestCheckOutCard;
