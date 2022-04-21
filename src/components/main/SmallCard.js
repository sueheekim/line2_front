import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const navigate = useNavigate();
    return (
        <div className="card">
            <img src={`/img/${props.image}`} alt="" />
            <div className="card_info">
                <div className="card_info_title">{props.homeName}</div>
                <div className="card_info_text">{props.homeAddress}</div>
                <div className="center">
                    <button className="card_info_button" onClick={() => navigate(`/home_reservation/${props.id}`)}>
                        예약
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
