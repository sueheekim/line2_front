import React from 'react'
import './SmallCard.css';
import {useNavigate} from 'react-router-dom';

function Card({images,homeName,id}) {
    const navigate = useNavigate();
    return (  
        <div className='card'>
            <img src={`/img/${images}`} alt=""/>
            <div className='card__info'>
                <h2>{homeName}</h2>
                <h3>쉼터보기</h3>
                <button variant="contained" onClick={()=>navigate(`/reservation/${id}`)}>예약</button>
            </div>
        </div>
    );
}

export default Card;
