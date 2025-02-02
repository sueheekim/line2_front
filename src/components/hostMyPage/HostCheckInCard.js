import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./HostCheckInCard.css";

function HostCheckInCard() {
    return (
        <div>
            <Grid container direction="row" justifyContent="center">
                <Card sx={{ maxWidth: 345 }}>
                    <div className="host_checkin_card_outdate">
                        체크아웃 예정 일자
                    </div>
                    <CardMedia
                        component="img"
                        height="194"
                        image=""
                        alt="체크인된 게스트 사진"
                    />
                    <CardContent>
                        <div className="host_checkin_card_guest_name">
                            체크인된 게스트 이름
                        </div>
                        <div className="host_checkin_card_guest_gender">
                            체크인된 게스트 성별
                        </div>
                        <div className="host_checkin_card_room_name">
                            체크인된 객실 이름
                        </div>
                        <div className="host_checkin_card_indate">
                            체크인 완료일
                        </div>
                    </CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="host_checkin_card_indate">
                                체크인 특이사항
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>경찰서에서 인수인계됨</p>
                        </AccordionDetails>
                    </Accordion>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="host_checkin_card_outdate">
                        체크아웃 예정 일자2
                    </div>
                    <CardMedia
                        component="img"
                        height="194"
                        image=""
                        alt="체크인된 게스트 사진2"
                    />
                    <CardContent>
                        <div className="host_checkin_card_guest_name">
                            체크인된 게스트 이름2
                        </div>
                        <div className="host_checkin_card_guest_gender">
                            체크인된 게스트 성별2
                        </div>
                        <div className="host_checkin_card_room_name">
                            체크인된 객실 이름2
                        </div>
                        <div className="host_checkin_card_indate">
                            체크인 완료일2
                        </div>
                    </CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="host_checkin_card_indate">
                                체크인 특이사항2
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>타 지역에서 옴</p>
                        </AccordionDetails>
                    </Accordion>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="host_checkin_card_outdate">
                        체크아웃 예정 일자3
                    </div>
                    <CardMedia
                        component="img"
                        height="194"
                        image=""
                        alt="체크인된 게스트 사진3"
                    />
                    <CardContent>
                        <div className="host_checkin_card_guest_name">
                            체크인된 게스트 이름3
                        </div>
                        <div className="host_checkin_card_guest_gender">
                            체크인된 게스트 성별3
                        </div>
                        <div className="host_checkin_card_room_name">
                            체크인된 객실 이름3
                        </div>
                        <div className="host_checkin_card_indate">
                            체크인 완료일3
                        </div>
                    </CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="host_checkin_card_indate">
                                체크인 특이사항3
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>가정을 떠난지 한달이 지난 상태에서 옴</p>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Grid>
            
        </div>
    );
}

export default HostCheckInCard;
