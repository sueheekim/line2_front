import React,{useState} from "react";
import axios from "axios";
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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {format} from 'date-fns';
import HostCheckInModal from "./HostCheckInModal";

function HostCheckInCard({guest, home, reservation}) {
    const checkInUrl = "/book/v1/reservation/accept_check_in";
    const checkOutUrl = "/book/v1/reservation/accept_check_out";

    const [modalOpen, setModalOpen] = useState(false);
    const [editCheckInMessage, setEditCheckInMessage] = useState('');
    const [checkOutMessage, setCheckOutMessage] = useState('');

    const formattedCheckInDate = format(new Date(reservation.checkIn),'yyyy-MM-dd');
    const formattedCheckOutDate = format(new Date(reservation.checkOut),'yyyy-MM-dd');


    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        axios.put(checkOutUrl ,{
            reservationId : reservation.id,
            message : checkOutMessage,
        }).then(res=>{
            console.log(res)
        }).then(setModalOpen(false))
    }
    const cancelModal =() =>{
        setModalOpen(false)
    }

    const handleEdit = () =>{
        axios.put(checkInUrl,{
            reservationId : reservation.id,
            message : editCheckInMessage
        }).then(res=>{
        console.log(res)
    })
    }


    return (
        <div className="host_checkin_card">
            <Grid container direction="row" justifyContent="center" margin="15px">
                <Card sx={{ maxWidth: 345 }}>
                    <div className="host_checkin_card_outdate"  style={{fontSize : 'small'}}>
                        체크 아웃 예정일 : {formattedCheckOutDate}
                    </div>
                    <CardMedia
                        component="img"
                        height="194"
                        image={`img/${guest.userImg}`}
                        alt="체크인된 게스트 사진"
                    />
                    <CardContent>
                        <div className="host_checkin_card_guest_name">
                            {guest.userName}
                        </div>
                        <div className="host_checkin_card_guest_gender">
                            {guest.userGender}
                        </div>
                        <div className="host_checkin_card_room_name">
                            {home.homeName}
                        </div>
                        <div className="host_checkin_card_indate" style={{fontSize : "small"}}>
                            체크인 날짜 : {formattedCheckInDate}
                        </div>
                    </CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="host_checkin_card_indate" >
                                체크인 특이사항
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="standard-textarea"
                                label={reservation.checkInMessage}
                                placeholder="500자 내외로 입력하세요"
                                multiline
                                variant="standard"
                                onChange={({target:{value}})=>setEditCheckInMessage(value)}
                            />
                        </AccordionDetails>
                        <Button variant="contained" size="small" color="error"style={{margin : "0 22px"}} onClick={openModal} >
                            체크아웃
                        </Button>
                        <Button 
                        variant="contained" 
                        size="small"  
                        style={{margin : "5px"}} 
                        onClick={handleEdit}
                        >
                            수정
                        </Button>
                        <HostCheckInModal 
                        open={modalOpen} 
                        close={closeModal} 
                        cancel={cancelModal} 
                        setCheckOutMessage={setCheckOutMessage} />
                    </Accordion>
                </Card>
            </Grid>
        </div>
    );
}

export default HostCheckInCard;
