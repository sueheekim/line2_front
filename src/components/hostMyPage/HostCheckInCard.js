import React from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Accordion,
    Form,
    Button,
    Container,
    Row,
} from "react-bootstrap";
import "./HostCheckInCard.css";

function HostCheckInCard() {
    return (
        <div>
            <Container>
                <Row md={4}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Title>체크아웃 예정 일자</Card.Title>
                        <Card.Img
                            variant="top"
                            src="holder.js/100px180?text=Image cap"
                        />
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    체크인 된 게스트 이름
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크인 된 게스트 성별
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크인 된 객실 이름
                                </ListGroupItem>
                                <ListGroupItem>체크인 완료일</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    체크인 특이사항
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>
                                            호스트가 입력한 체크인 특이사항
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="수정버튼을 눌러 체크인 특이사항을 수정 할 수 있습니다."
                                        />
                                    </Form.Group>
                                    <Button variant="outline-danger">
                                        수정
                                    </Button>{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                    <Card style={{ width: "18rem" }}>
                        <Card.Title>체크아웃 예정 일자</Card.Title>
                        <Card.Img
                            variant="top"
                            src="holder.js/100px180?text=Image cap"
                        />
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    체크인 된 게스트 이름
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크인 된 게스트 성별
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크인 된 객실 이름
                                </ListGroupItem>
                                <ListGroupItem>체크인 완료일</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    체크인 특이사항
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>
                                            호스트가 입력한 체크인 특이사항
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="수정버튼을 눌러 체크인 특이사항을 수정 할 수 있습니다."
                                        />
                                    </Form.Group>
                                    <Button variant="outline-danger">
                                        수정
                                    </Button>{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                    <Card style={{ width: "18rem" }}>
                        <Card.Title>체크아웃 예정 일자</Card.Title>
                        <Card.Img
                            variant="top"
                            src="holder.js/100px180?text=Image cap"
                        />
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    체크인 된 게스트 이름
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크인 된 게스트 성별
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크인 된 객실 이름
                                </ListGroupItem>
                                <ListGroupItem>체크인 완료일</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    체크인 특이사항
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>
                                            호스트가 입력한 체크인 특이사항
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="수정버튼을 눌러 체크인 특이사항을 수정 할 수 있습니다."
                                        />
                                    </Form.Group>
                                    <Button variant="outline-danger">
                                        수정
                                    </Button>{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}

export default HostCheckInCard;
