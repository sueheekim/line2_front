import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './InfoCard.css';
import { useNavigate } from 'react-router-dom';

function InfoCard({shelter}) {
    const navigate = useNavigate();

    return (
    <div className='list_container'>
        <div className=''>
            <img src={`img/${shelter.images}`} layout='fill' objectFit='cover' className='rounded-2xl' alt='roomImg'/>
        </div>

        <div className='card_info'>
            <div className='card_info-category'>
                <h4>{shelter.homeName}</h4>
                <p>{shelter.homeCategoryName}</p>
                <FavoriteBorderIcon />
            </div>
            <p>{shelter.homeAddress}</p>
            <p >{shelter.maxHeadCount}</p>
                <div className='card_bottom'>
                    <p>{shelter.homeInformation}</p>
                    <button onClick={()=>navigate(`/home_reservation/${shelter.id}`)}>예약 가능 옵션 보기</button>
                </div>
        </div>
    </div>
  )
}

export default InfoCard