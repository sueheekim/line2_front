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
                <p>{shelter.city}</p>
                <p>{shelter.homeCategoryId}</p>
                <FavoriteBorderIcon />
            </div>
            <h4>{shelter.homeName}</h4>
            <p className='pt-2 text-sm text-gray-500 flex-grow'>{shelter.maxHeadCount}</p>
                <div>
                    <p className='text-lg lg:text-2xl font-semibold pb-2'>{shelter.homeInfomation}</p>
                </div>
        </div>
    </div>
  )
}

export default InfoCard