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
import "./HostCheckOutCard.css";

function HostCheckOutCard() {
    return (
        <div>
            <Container>
                <Row md={4}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Title>게스트가 체크인 된 날짜</Card.Title>
                        <Card.Img
                            variant="top"
                            src="holder.js/100px180?text=Image cap"
                        />
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    체크아웃 한 게스트 이름
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크아웃 완료한 게스트 성별
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크아웃 한 객실 이름
                                </ListGroupItem>
                                <ListGroupItem>체크아웃 완료일</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    체크아웃 특이사항
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>
                                            특이사항을 입력하세요
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="500자 내외로 입력하세요"
                                        />
                                    </Form.Group>
                                    <Button variant="outline-primary">
                                        입력
                                    </Button>{" "}
                                    <Button variant="outline-danger">
                                        수정
                                    </Button>{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                    <Card style={{ width: "18rem" }}>
                        <Card.Title>게스트가 체크인 된 날짜</Card.Title>
                        <Card.Img
                            variant="top"
                            src="holder.js/100px180?text=Image cap"
                        />
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    체크아웃 한 게스트 이름
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크아웃 완료한 게스트 성별
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크아웃 한 객실 이름
                                </ListGroupItem>
                                <ListGroupItem>체크아웃 완료일</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    체크아웃 특이사항
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>
                                            특이사항을 입력하세요
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="500자 내외로 입력하세요"
                                        />
                                    </Form.Group>
                                    <Button variant="outline-primary">
                                        입력
                                    </Button>{" "}
                                    <Button variant="outline-danger">
                                        수정
                                    </Button>{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                    <Card style={{ width: "18rem" }}>
                        <Card.Title>게스트가 체크인 된 날짜</Card.Title>
                        <Card.Img
                            variant="top"
                            src="holder.js/100px180?text=Image cap"
                        />
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    체크아웃 한 게스트 이름
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크아웃 완료한 게스트 성별
                                </ListGroupItem>
                                <ListGroupItem>
                                    체크아웃 한 객실 이름
                                </ListGroupItem>
                                <ListGroupItem>체크아웃 완료일</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    체크아웃 특이사항
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>
                                            특이사항을 입력하세요
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="500자 내외로 입력하세요"
                                        />
                                    </Form.Group>
                                    <Button variant="outline-primary">
                                        입력
                                    </Button>{" "}
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

export default HostCheckOutCard;
