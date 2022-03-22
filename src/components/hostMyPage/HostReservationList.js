import React, { useState, useEffect } from "react";
import GuestProfile from "../guestMyPage/GuestProfile";
import axios from "axios";
import { Card, Button, Col, Row } from "react-bootstrap";

function HostReservationList() {
    const guestUrl = "";
    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        axios.get(guestUrl).then((res) => {
            setUserProfile(res.data);
            console.log(res.data);
        });
    }, []);
    return ( 
        <>
        <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>예약번호</Card.Title>
                    <Row>
                        <Col>
                    <div className="guest_reservation_profile">
                    {userProfile.map((guest) => (
                        <GuestProfile key={guest.id} guest={guest} />
                    ))}
                </div>
                </Col>
                <Col>
                    <div className="room_name">선택 객실 이름</div>
                    <div className="checkIn_date">체크인 날짜</div>
                    <div className="checkOut_date">체크아웃 날짜</div>
                    </Col>
                    </Row>
                <div className="host_reservation_card_button">
                    <Button variant="primary">체크인 시키기</Button>
                    <Button variant="danger">예약 거절하기</Button>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </>
     );
}

export default HostReservationList;