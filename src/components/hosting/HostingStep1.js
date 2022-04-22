/*global kakao*/
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import idea from '../../images/idea.png';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';

function HostingStep1({ test, setTest }) {
    const navigate = useNavigate();

    const catUrl = '/home/v1/home_category/list';
    const [homeCategory, setHomeCategory] = useState([]);
    const [homeName, setHomeName] = useState('');
    const [selectCat, setSelectCat] = useState([]);
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [location, setLocation] = useState({
        coordinateX: 35.22926277844656,
        coordinateY: 129.09024080030179,
    });

    useEffect(() => {
        axios.get(catUrl).then(res => {
            setHomeCategory(res.data);
        });
    }, []);

    useEffect(() => {
        var mapContainer = document.getElementById('map'),
            mapOption = {
                center: new kakao.maps.LatLng(location.coordinateX, location.coordinateY),
                level: 3,
            };
        var map = new kakao.maps.Map(mapContainer, mapOption);
        var marker = new kakao.maps.Marker({
            position: map.getCenter(),
        });
        marker.setMap(map);
        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            var latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
            setLocation({
                coordinateX: latlng.getLat(),
                coordinateY: latlng.getLng(),
            });
        });
    }, []);

    const onCompletePost = data => {
        let fullAddr = data.address;
        let extraAddr = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
        }

        setAddress(fullAddr);
        setZipCode(data.zonecode);
        setIsOpenPost(false);
    };

    const handleCatClick = id => {
        setSelectCat(id);
    };

    const handleClick = () => {
        setTest({
            ...test,
            homeAddress: address + ' ' + document.getElementById('address_detail').value,
            homeZipCode: zipCode,
            homeCategoryId: selectCat,
            homeName: homeName,
            coordinateX: location.coordinateX,
            coordinateY: location.coordinateY,
            userId: 1,
        });
        navigate('/hosting2');
    };

    const postCodeStyle = {
        display: 'block',
        position: 'relative',
        top: '70%',
        width: '400px',
        height: '500px',
        padding: '7px',
    };

    return (
        <div className="hostingstep1">
            <div className="header_section">
                <p>숙소 등록 step 1</p>
            </div>
            <div className="container">
                <div className="hostingdate__title">
                    <h2> 숙소 유형 선택</h2>
                </div>
                <div className="hosting_date_container">
                    {homeCategory.map(item => (
                        <Button
                            variant="outlined"
                            key={item.id}
                            id={`category${item.id}`}
                            onClick={() => handleCatClick(item.id)}
                        >
                            {' '}
                            {item.homeCategoryName}
                        </Button>
                    ))}
                </div>
                <div className="hosting_step1-grid">
                    <div className="hosting_container">
                        <div className="hostingdate">
                            <div className="hostingname">
                                <h2> 숙소 이름 입력 </h2>
                            </div>
                            <div className="hostingname_input">
                                <input
                                    placeholder="숙소 이름 입력"
                                    onChange={({ target: { value } }) => setHomeName(value)}
                                ></input>
                            </div>
                        </div>
                        <div className="hostinglocation">
                            <div className="address_continer">
                                <h2> 도로명 주소 또는 지번 주소</h2>
                                <input
                                    onClick={() => setIsOpenPost(!isOpenPost)}
                                    id="address"
                                    value={address}
                                    readOnly
                                />
                                {isOpenPost ? (
                                    <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
                                ) : null}
                                <h2> 상세 주소</h2>
                                <input id="address_detail" />
                                <h2>우편번호</h2>
                                <input id="zip_code" value={zipCode} readOnly />
                            </div>
                            <div className="hosting_map">
                                <h2> 지도 표시</h2>
                                <div id="map" className="map_box"></div>
                            </div>
                        </div>
                    </div>
                    <div className="hostingname_info">
                        <img src={idea} alt="idea.png" />
                        <h4>쉼터 이름이 필요한 이유</h4>
                        <h4>
                            쉼터 이름은 저희 사이트에 표시되는 명칭으로 게스트들에게 숙소를 찾을때 나침판 역할을 합니다.
                            필수로 입력 부탁드립니다. 이름은 중복 입력이 불가능합니다. 만약 중복 이름이라면 이름 뒤에
                            지역을 붙여주세요
                        </h4>
                        <h4 style={{ color: 'red' }}> 예) 안심 쉼터 부산</h4>
                    </div>
                    <div className="hostingstep1_button">
                        <Button style={{ width: '150px' }} variant="container" onClick={handleClick}>
                            다음단계
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostingStep1;
