import React from "react";
import './HostMyPageBody.css';
import { Tab, Row, Col, Nav } from "react-bootstrap";
import HostReservation from "./HostResrvation";

function HostMyPageBody() {
  

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Col>
                    <Row sm={3}>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="first">예약</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">숙소</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">채팅</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">계정</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                    <Row sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <HostReservation />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                            <Tab.Pane eventKey="fourth"></Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Col>
            </Tab.Container>
    );
}

export default HostMyPageBody;