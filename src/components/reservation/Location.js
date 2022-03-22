/*global kakao*/
import React, {useEffect} from 'react'

const Location = () => {

    useEffect(() => {
        var container = document.getElementById('map_box');
        var options = {
            center: new kakao.maps.LatLng(35.22937620160723 , 129.09006524338798),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(35.22937620160723 , 129.09006524338798);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])


    return (
        <div id="map_box" className={"map_box"}></div>
    )
}

export default Location;