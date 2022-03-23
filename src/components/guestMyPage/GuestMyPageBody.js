import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import GuestCheckInOut from './GuestCheckInOut';
import GuestReservation from './GuestReservation';
import './GuestMyPageBody.css';


function GuestMyPageBody() {


    return (
        <div className='guestmypage__body'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Col>
                    <Row sm={3}>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="first">예약</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    체크인&체크아웃
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">이용후기</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">채팅하기</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                    </Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first"><GuestReservation/></Tab.Pane>
                            <Tab.Pane eventKey="second"><GuestCheckInOut /></Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                            <Tab.Pane eventKey="fourth"></Tab.Pane>
                        </Tab.Content>
                
            </Tab.Container>
        </div>
    );
}

export default GuestMyPageBody;