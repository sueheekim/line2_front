import { Button, Paper } from '@mui/material';
import React from 'react';
import './ShelterListCard.css';

function ShelterListCard({shelter}) {

    return (  
        <div className='listCard'>
            <Paper elevation={3} className='listCard__container' >
                <div className='card_img'>
                    {
                        <img src={`img/${shelter.images[0]}`} alt='room_img'/>
                    }
                </div>
                <div className='shelter__description'>
                    쉼터 이름 : {shelter.homeName}
                    <div>
                    쉼터 유형 : {shelter.homeCategoryId}
                    </div>
                    <div>
                    쉼터 지역 : {shelter.city}
                    </div>
                    <div>
                    잔여객실 : {shelter.maxHeadCount} 
                    </div>
                    <div>
                    {shelter.facility}
                    </div>
                <Button variant="contained"> 예약 가능</Button>
                </div>
            </Paper>
            
        </div>
    );
}

export default ShelterListCard;