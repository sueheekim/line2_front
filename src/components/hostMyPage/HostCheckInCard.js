import React from "react";
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
                            <TextField
                                id="standard-textarea"
                                label="특이사항을 입력하세요"
                                placeholder="500자 내외로 입력하세요"
                                multiline
                                variant="standard"
                            />
                        </AccordionDetails>
                        <Button variant="contained" size="small">
                            수정
                        </Button>
                    </Accordion>
                </Card>
            </Grid>
        </div>
    );
}

export default HostCheckInCard;
