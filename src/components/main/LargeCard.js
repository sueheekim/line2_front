import React from 'react';

function LargeCard({img, title, description, buttonText}) {
  return (
    <div className='large_card_container'>
        <div className='large_card_img'>
            <img src={img} alt='large_img'/>
        </div>
        <div className='large_card_text'>
            <h3>{title}</h3>
            <p>{description}</p>

        </div>
    </div>
  )
}

export default LargeCard