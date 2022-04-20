import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardActionArea,
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

    const formattedCheckInDate = format(new Date(reservation.checkIn), 'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut), 'yyyy-MM-dd');

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
        <div className="host_checkinout_card">
                <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardContent className="card_content">
                    <h4> 퇴소완료일: {formattedCheckOutDate} </h4>
                    <div className="guest_profile_container">
                            <div className="guest_profile_img">
                                <img src={`img/${guest.userImg}`} alt="user.png" />
                            </div>
                            <div className="guest_name">
                                {guest.userName} {guest.userGender}
                            </div>
                            <div className="guest_phone">{guest.userPhoneNumber}</div>
                            <div className="guest_email">{guest.userEmail}</div>
                        </div>
                        <div className="host_reservaion_info">
                        <div className="host_checkout_card_room_name">{room.roomName}</div>
                        <div className="host_checkout_card_outdate" style={{ fontSize: 'small' }}>
                        입소완료일 : {formattedCheckInDate}
                        </div>
                        </div>
                    <div className="host_checkin_accordin">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="host_checkout_card_outdate">퇴소시 특이사항</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="standard-textarea"
                                label={reservation.checkOutMessage}
                                placeholder="500자 내외로 입력하세요"
                                multiline
                                variant="standard"
                                onChange={({ target: { value } }) => setEditCheckOutMessage(value)}
                            >
                                {' '}
                            </TextField>
                        </AccordionDetails>
                        <Button variant="contained" size="small">
                            입력
                        </Button>
                        <Button variant="contained" size="small" color="error" onClick={handleEdit}>
                            수정
                        </Button>
                    </Accordion>
                    </div>
                    </CardContent>
                </CardActionArea>
                </Card>
        </div>
    );
}

export default HostCheckOutCard;
