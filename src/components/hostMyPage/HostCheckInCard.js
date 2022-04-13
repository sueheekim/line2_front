import React, { useState } from 'react';
import { format } from 'date-fns';
import {
    Card,
    CardContent,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    Button,
    CardActionArea,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HostCheckInModal from './HostCheckInModal';
import axios from 'axios';

function HostCheckInCard({ guest, home, reservation }) {
    const checkInUrl = '/book/v1/reservation/accept_check_in';
    const checkOutUrl = '/book/v1/reservation/accept_check_out';

    const [modalOpen, setModalOpen] = useState(false);
    const [editCheckInMessage, setEditCheckInMessage] = useState('');
    const [checkOutMessage, setCheckOutMessage] = useState('');

    const formattedCheckInDate = format(new Date(reservation.checkIn), 'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut), 'yyyy-MM-dd');

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        axios
            .put(checkOutUrl, {
                reservationId: reservation.id,
                message: checkOutMessage,
            })
            .then(res => {
                console.log(res);
            })
            .then(setModalOpen(false));
    };
    const cancelModal = () => {
        setModalOpen(false);
    };

    const handleEdit = () => {
        axios
            .put(checkInUrl, {
                reservationId: reservation.id,
                message: editCheckInMessage,
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
                        <h4> 퇴소예정일 : {formattedCheckOutDate} </h4>
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
                        <div className="host_checkin_card_home_name">{home.homeName}</div>
                        <div className="host_checkin_card_indate" style={{ fontSize: 'small' }}>
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
                                <div className="host_checkin_card_indate">체크인 특이사항</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    id="standard-textarea"
                                    label={reservation.checkInMessage}
                                    placeholder="500자 내외로 입력하세요"
                                    multiline
                                    variant="standard"
                                    onChange={({ target: { value } }) => setEditCheckInMessage(value)}
                                />
                            </AccordionDetails>
                            <Button
                                variant="contained"
                                size="small"
                                color="error"
                                style={{ margin: '0 22px' }}
                                onClick={openModal}
                            >
                                체크아웃
                            </Button>
                            <Button variant="contained" size="small" style={{ margin: '5px' }} onClick={handleEdit}>
                                수정
                            </Button>
                           
                        </Accordion>
                        </div>
                        <HostCheckInModal
                                open={modalOpen}
                                close={closeModal}
                                cancel={cancelModal}
                                setCheckOutMessage={setCheckOutMessage}
                            />
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        

    );
}

export default HostCheckInCard;
