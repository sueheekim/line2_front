import React from 'react'
import './SmallCard.css';

function Card({imageName,shelter_location}) {
    return (  
        <div className='card'>
            <img src={`/img/${imageName}`} alt=""/>
            <div className='card__info'>
                <h2>{shelter_location}</h2>
                <h3>쉼터보기</h3>
                <button variant="contained">예약</button>
            </div>
        </div>
    );
}

export default Card;
