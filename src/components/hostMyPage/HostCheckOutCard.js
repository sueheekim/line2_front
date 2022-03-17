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
import "./HostCheckOutCard.css";

function HostCheckOutCard() {
    return (
        <div>
            <Grid container direction="row" justifyContent="center">
                <Card sx={{ maxWidth: 345 }}>
                    <div className="host_checkout_card_indate">
                        게스트가 체크인된 날짜
                    </div>
                    <CardMedia
                        component="img"
                        height="194"
                        image=""
                        alt="체크아웃한 게스트 사진"
                    />
                    <CardContent>
                        <div className="host_checkout_card_guest_name">
                            체크아웃한 게스트 이름
                        </div>
                        <div className="host_checkout_card_guest_gender">
                            체크아웃한 게스트 성별
                        </div>
                        <div className="host_checkout_card_room_name">
                            체크아웃한 객실 이름
                        </div>
                        <div className="host_checkout_card_outdate">
                            체크아웃 완료일
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
                            <p>청소년 자립 지원관으로 이관 됨</p>
                        </AccordionDetails>
                    </Accordion>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="host_checkout_card_indate">
                        게스트가 체크인된 날짜2
                    </div>
                    <CardMedia
                        component="img"
                        height="194"
                        image=""
                        alt="체크아웃한 게스트 사진2"
                    />
                    <CardContent>
                        <div className="host_checkout_card_guest_name">
                            체크아웃한 게스트 이름2
                        </div>
                        <div className="host_checkout_card_guest_gender">
                            체크아웃한 게스트 성별2
                        </div>
                        <div className="host_checkout_card_room_name">
                            체크아웃한 객실 이름2
                        </div>
                        <div className="host_checkout_card_outdate">
                            체크아웃 완료일2
                        </div>
                    </CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="host_checkout_card_outdate">
                                체크아웃 특이사항2
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>전염성 질병으로 인한 병원 입원</p>
                        </AccordionDetails>
                    </Accordion>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="host_checkout_card_indate">
                        게스트가 체크인된 날짜3
                    </div>
                    <CardMedia
                        component="img"
                        height="194"
                        image=""
                        alt="체크아웃한 게스트 사진3"
                    />
                    <CardContent>
                        <div className="host_checkout_card_guest_name">
                            체크아웃한 게스트 이름3
                        </div>
                        <div className="host_checkout_card_guest_gender">
                            체크아웃한 게스트 성별3
                        </div>
                        <div className="host_checkout_card_room_name">
                            체크아웃한 객실 이름3
                        </div>
                        <div className="host_checkout_card_outdate">
                            체크아웃 완료일3
                        </div>
                    </CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="host_checkout_card_outdate">
                                체크아웃 특이사항3
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>취직으로 인한 퇴소</p>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Grid>
            
        </div>
    );
}

export default HostCheckOutCard;
