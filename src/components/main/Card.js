import React from 'react'
import { Button } from '@mui/material';
import './Card.css';

function Card({shelter}) {
    return (  
        <div className='card'>
            <img src={`/img/${shelter.imageName}`} alt=""/>
            <div className='card__info'>
                <h2>{shelter.shelter_location}</h2>
                <h3>쉼터보기</h3>
                <Button variant="contained">예약</Button>
            </div>
        </div>
    );
}

export default Card;
