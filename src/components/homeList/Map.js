import React, { useRef, useEffect } from "react";
import './Map.css';

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(35.2397951, 129.0814828), //지도의 중심좌표.
  level: 4, //지도의 레벨(확대, 축소 정도)
};

function Map() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);

  return (
    <div className="map"
      ref={container}
    ></div>
  );
}

export default Map;