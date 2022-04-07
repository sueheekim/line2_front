import React, { useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    Button,
} from '@mui/material';
import { format } from 'date-fns';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

function HostCheckOutCard({ guest, room, reservation }) {
    const checkOutUrl = '/book/v1/reservation/accept_check_out';
    const [editCheckOutMessage, setEditCheckOutMessage] = useState('');

    const formattedCheckInDate = format(
        new Date(reservation.checkIn),
        'yyyy-MM-dd',
    );
    const formattedCheckOutDate = format(
        new Date(reservation.checkOut),
        'yyyy-MM-dd',
    );

    const handleEdit = () => {
        axios
            .put(checkOutUrl, {
                reservationId: reservation.id,
                message: editCheckOutMessage,
            })
            .then(res => {
                console.log(res);
            });
    };

    return (
        <div className="host_checkout_card">
            <Grid
                container
                direction="row"
                justifyContent="center"
                margin="15px"
            >
                <Card sx={{ maxWidth: 345 }}>
                    <div
                        className="host_checkout_card_indate"
                        style={{ fontSize: 'small' }}
                    >
                        게스트가 체크인된 날짜 : {formattedCheckInDate}
                    </div>
                    <CardMedia
                        component="img"
                        height="194"
                        image={`img/${guest.userImg}`}
                        alt="체크아웃한 게스트 사진"
                    />
                    <CardContent style={{ fontSize: 'small' }}>
                        <div className="host_checkout_card_guest_name">
                            체크아웃한 게스트 이름 : {guest.userName}
                        </div>
                        <div className="host_checkout_card_guest_gender">
                            체크아웃한 게스트 성별 : {guest.userGender}
                        </div>
                        <div className="host_checkout_card_room_name">
                            체크아웃한 객실 이름 : {room.roomName}
                        </div>
                        <div
                            className="host_checkout_card_outdate"
                            style={{ fontSize: 'small' }}
                        >
                            체크아웃 완료일: {formattedCheckOutDate}
                        </div>
                    </CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="host_checkout_card_outdate">
                                체크아웃 특이사항
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="standard-textarea"
                                label={reservation.checkOutMessage}
                                placeholder="500자 내외로 입력하세요"
                                multiline
                                variant="standard"
                                onChange={({ target: { value } }) =>
                                    setEditCheckOutMessage(value)
                                }
                            >
                                {' '}
                            </TextField>
                        </AccordionDetails>
                        <Button variant="contained" size="small">
                            입력
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={handleEdit}
                        >
                            수정
                        </Button>
                    </Accordion>
                </Card>
            </Grid>
        </div>
    );
}

export default HostCheckOutCard;
