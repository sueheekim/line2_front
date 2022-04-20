import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import SmallCard from './SmallCard';
import LargeCard from './LargeCard';
import Search from './Search';
import axios from 'axios';

function Main({ exploreData, cardsData }) {
    const smallcardUrl = '/home/v1/home/list';
    const [smallCard, setSmallCard] = useState([]);

    useEffect(() => {
        axios.get(smallcardUrl).then(res => {
            setSmallCard(res.data);
        });
    }, []);

    return (
        <div>
            <Search />
            <Banner />
            <div className="center">
                <div className="main_title">숙소 바로 예약</div>
            </div>
            <div className="container">
                <div className="small_card">
                    {smallCard &&
                        smallCard
                            .map(item => (
                                <SmallCard
                                    key={item.homeId}
                                    id={item.homeId}
                                    image={item.image}
                                    homeName={item.homeName}
                                    shelter_location={item.shelter_location}
                                    homeAddress={item.homeAddress}
                                />
                            ))
                            .slice(0, 4)}
                </div>
                <div className="large_card">
                    <div className="idea_img">
                        <div className="image_wapper">
                            <div className="idea_text_box">
                                <div className="ieda_text_title">안심의 이념 선언문</div>
                                <div className="ieda_text">우리의 서비스는 안심 서비스 입니다.</div>
                                <div className="ieda_text">
                                    안심은 가정 밖 청소년들이 안전하고 쉴수 있는 쉼터를 뜻합니다.
                                </div>
                                <div className="ieda_text">
                                    프로젝트의 초기 단계에서 우리는 가능한 많은 가정 밖 청소년들을 돕고 싶었습니다.
                                </div>
                                <div className="ieda_text">
                                    가정 밖 청소년을 돕는 가장 좋은 방법은 그들을 위해 노력하는 조직과 청소년 간의
                                    의사소통을 개선하는 것 입니다.
                                </div>
                                <div className="ieda_text">
                                    그래서 안심은 가정 밖 청소년들을 돕는 쉼터와 협력하여 조직의 요구 사항을 반영한
                                    서비스를 &nbsp; 제공 합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
