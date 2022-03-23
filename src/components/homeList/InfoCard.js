import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './InfoCard.css';

function InfoCard({shelter}) {

    return (
    <div className='list_container'>
        <div className=''>
            <img src={`img/${shelter.images[0]}`} layout='fill' objectFit='cover' className='rounded-2xl' alt='roomImg'/>
        </div>

        <div className='card_info'>
            <div className='card_info-category'>
                <h4>{shelter.homeName}</h4>
                <p>{shelter.homeCategoryId}</p>
                <FavoriteBorderIcon />
            </div>
            <p>{shelter.city}</p>
            <p >{shelter.maxHeadCount}</p>
                <div className='card_bottom'>
                    <p>{shelter.homeInfomation}</p>
                    <button>예약 가능 옵션 보기</button>
                </div>
        </div>
    </div>
  )
}

export default InfoCard