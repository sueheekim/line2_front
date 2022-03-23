import React from "react";
import { Card, Button } from "react-bootstrap";

function GuestCheckInCard({ reservation }) {
    return (
        <>
            <h2>체크인</h2>
            <Card>
                <Card.Header>체크인 확인</Card.Header>
                <Card.Body>
                    <Card.Title>
                        환영합니다. OOO님 체크인이 완료 되었습니다.
                    </Card.Title>
                    <Card.Text>
                        <div>{reservation.shelter_name}</div>
                        <div>{reservation.shelter_location}</div>
                        <div>{reservation.roomName}</div>
                        <div>{reservation.checkInDate}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default GuestCheckInCard;
