import { Paper } from '@mui/material';
import React from 'react';
import './ShelterListCard.css';

function ShelterListCard({shelter}) {
    return (  
        <div className='listCard'>
            <Paper elevation={3} className='listCard__container' >
                <div className='card_img'>
                <img src={`img/${shelter.imageName}`} alt='room_img'/>
                </div>
                <div >
                    {shelter.shleter_name}
                </div>
            </Paper>
            
        </div>
    );
}

export default ShelterListCard;