import React from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Divider,
} from "@mui/material";
import './HostCheckInCard.css';

function HostCheckIncard() {
    return (
        <div>
            <Grid container direction="row" justifyContent="center" >
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div className='host_checkIn_date'>체크인 완료한 날짜</div>
                        <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt="게스트 1 사진"
                        />
                        <CardContent>
                            <Typography>체크인 1</Typography>
                            <div className='checkIn_guest_name'>체크인 된 게스트 이름</div>
                            <div className='checkIn_guest_name'>체크인 된 게스트 성별</div>
                            <div className='checkIn_room_name'>체크인 한 객실 이름</div>
                            <Divider/>
                            <div className='host_checkOut_date'>체크아웃 예정 날짜</div>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div className='host_checkIn_date'>체크인 완료한 날짜</div>
                        <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt="게스트 2 사진"
                        />
                        <CardContent>
                            <Typography>체크인 2</Typography>
                            <div className='checkIn_guest_name'>체크인 된 게스트 이름</div>
                            <div className='checkIn_guest_name'>체크인 된 게스트 성별</div>
                            <div className='checkIn_room_name'>체크인 한 객실 이름</div>
                            <Divider/>
                            <div className='host_checkOut_date'>체크아웃 예정 날짜</div>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div className='host_checkIn_date'>체크인 완료한 날짜</div>
                        <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt="게스트 3 사진"
                        />
                        <CardContent>
                            <Typography>체크인 3</Typography>
                            <div className='checkIn_guest_name'>체크인 된 게스트 이름</div>
                            <div className='checkIn_guest_name'>체크인 된 게스트 성별</div>
                            <div className='checkIn_room_name'>체크인 한 객실 이름</div>
                            <Divider/>
                            <div className='host_checkOut_date'>체크아웃 예정 날짜</div>
                        </CardContent>
                    </CardActionArea>
                </Card>
                

                
            </Grid>
        </div>
    );
}

export default HostCheckIncard;
