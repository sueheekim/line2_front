/*global kakao*/
import React, { useEffect } from 'react';

const Location = ({ shelterlist }) => {
    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(36.566196324718646, 128.03730929859768),
            level: 13,
        };

        var map = new kakao.maps.Map(container, options);
        shelterlist.forEach(el => {
            // 마커를 생성합니다
            new kakao.maps.Marker({
                //마커가 표시 될 지도
                map: map,
                //마커가 표시 될 위치
                position: new kakao.maps.LatLng(el.coordinateX, el.coordinateY),
                //마커에 hover시 나타날 title
                title: el.homeName,
            });
        });
    });

    return <div className="map" id="map"></div>;
};

export default Location;
