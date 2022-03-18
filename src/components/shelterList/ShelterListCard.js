import { Button, Paper } from '@mui/material';
import React from 'react';
import './ShelterListCard.css';

function ShelterListCard({shelter}) {

    return (  
        <div className='listCard'>
            <Paper elevation={3} className='listCard__container' >
                <div className='card_img'>
                    {
                        <img src={`img/${shelter.shelterImages[0]}`} alt='room_img'/>
                    }
                </div>
                <div className='shelter__description'>
                        쉼터 이름 : {shelter.shelterName}
                    <div>
                        쉼터 유형 : {shelter.category}
                    </div>
                    <div>
                        쉼터 지역 : {shelter.city}
                    </div>
                    <div>
                        잔여객실 : {shelter.peopleNumber} 
                    </div>
                    <div>
                        시설 정보 : {shelter.facility}
                    </div>
                    <div className='reservation_button'>
                        <Button variant="contained"> 예약 가능</Button>
                    </div>
                </div>
            </Paper>
            
        </div>
    );
}

export default ShelterListCard;