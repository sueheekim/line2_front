import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GuestReviewListImage(props) {
    const homeImageUrl = '/home/v1/home_image_table/home/one/';

    const[imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        axios.get(homeImageUrl + props.id).then(res => {
            setImageUrl(res.data);
        });
    }, []);
    return (
        <div
            className="guest_review_reservation_card_img"
            style={{ backgroundImage: `url("./img/${imageUrl}")` }}
        ></div>
    );
}

export default GuestReviewListImage;
