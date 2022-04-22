import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeView from './HomeView';
import HomeInformation from './HomeInformation';
import RoomReservation from './RoomReservation';
import HomePolicies from './HomePolicies';
import HomeFacilities from './HomeFacilities';
import HomeReview from './HomeReview';
import axios from 'axios';

function HomeReservation() {
    const getHomeUrl = '/home/v1/home/';
    const [home, setHome] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(getHomeUrl + id).then(res => {
            setHome(res.data);
        });
    }, []);

    return (
        <div className="home_reservation">
            <div className="header_section">
                <p className={'reservation_header'}> 숙소 예약하기</p>
            </div>

            <div className={'container'}>
                <HomeView
                    homeName={home.homeName}
                    coordinateX={home.coordinateX}
                    coordinateY={home.coordinateY}
                    images={home.images}
                />
                <HomeInformation information={home.homeInformation} />
                <RoomReservation home={home} />
                <HomePolicies
                    homePolicies={home.homePolicies}
                    homePolicyCustom={home.homePolicyCustom}
                />
                <HomeFacilities homeFacilities={home.homeFacilities} />
                <HomeReview id={id} />
            </div>
        </div>
    );
}

export default HomeReservation;
