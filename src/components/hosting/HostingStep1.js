/*global kakao*/
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import idea from '../../images/idea.png';
import HostingHeader from './HostingHeader';
import DaumPostcode from 'react-daum-postcode';

function HostingStep1({ test, setTest }) {
    const navigate = useNavigate();

    const catUrl = '/home/v1/home_category/list';
    const [homeCategory, setHomeCategory] = useState([]);
    const [homeName, setHomeName] = useState('');
    const [selectCat, setSelectCat] = useState([]);
    const [homeHostPhone, setHomeHostPhone] = useState('');
    const [homeHostEmail, setHomeHostEmail] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [location, setLocation] = useState({});

    useEffect(() => {
        axios.get(catUrl).then(res => {
            setHomeCategory(res.data);
            console.log(res.data);
        });
    }, []);

    useEffect(() => {
        var mapContainer = document.getElementById('map'),
            mapOption = {
                center: new kakao.maps.LatLng(
                    35.22926277844656,
                    129.09024080030179,
                ),
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
                extraAddr +=
                    extraAddr !== ''
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
        }

        setAddress(fullAddr);
        setZipCode(data.zonecode);
        setIsOpenPost(false);
    };

    const handleChange = event => {
        setCity(event.target.value);
    };
    const handleCatClick = id => {
        setSelectCat(id);
        console.log(selectCat);
    };

    const handleClick = () => {
        setTest({
            ...test,
            homeAddress:
                address + ' ' + document.getElementById('address_detail').value,
            homeZipCode: zipCode,
            homeCategoryId: selectCat,
            homeName: homeName,
            coordinateX: location.coordinateX,
            coordinateY: location.coordinateY,
            userId: 1,
        });
        console.log(test);
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
        <>
            <HostingHeader />
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
                                    onChange={({ target: { value } }) =>
                                        setHomeName(value)
                                    }
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
                                    <DaumPostcode
                                        style={postCodeStyle}
                                        autoClose
                                        onComplete={onCompletePost}
                                    />
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
                        <h4>숙소 이름이 필요한 이유</h4>
                        <h4>
                            숙소 이름은 저희 사이트에 표시되는 명칭 이자 ID가
                            됩니다. 필수로 입력 부탁 드립니다 이름은 중복 입력이
                            불가능 합니다. 만약 중복이라면 ? 이름과 함께 지역을
                            기재 해주세요
                        </h4>
                        <h4 style={{ color: 'red' }}> 예) 안심 쉼터 부산</h4>
                    </div>
                    <div className="hostingstep1_button">
                        <Button variant="container" onClick={handleClick}>
                            다음단계
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HostingStep1;
