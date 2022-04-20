import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function InfoCard({ shelter, homeFacilities }) {
    const navigate = useNavigate();

    return (
        <div className="info_list_container">
            <div className="info_list_card_box">
            <div className="home_list_info_card_photo" style={{ backgroundImage: `url("../../../img/${shelter.image}")` }}>
            </div>

            <div className="card_info card_bottom">
                <div className="card_info-category">
                    <div className="card_info_title">{shelter.homeName}</div>
                    <div className="card_info_text">{shelter.homeCategoryName}</div>
                </div>
                <div>{shelter.homeAddress}</div>
                <div>{shelter.maxHeadCount}</div>
                <div>
                    {homeFacilities.map(homeFacility => (
                        <img
                            className={'info_facility_icon'}
                            key={homeFacility}
                            src={`/img/facility${homeFacility}.svg`}
                            alt={homeFacility}
                        />
                    ))}
                </div>
                <div className="center">
                    <button
                        className="card_bottom_button"
                        onClick={() => navigate(`/home_reservation/${shelter.homeId}`)}
                    >
                        예약 가능 옵션 보기
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
