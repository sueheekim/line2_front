import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Hosting.css';
import idea from '../../images/idea.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function HostingDate({getCategory, getShelterName, getCity}) {

    const navigate = useNavigate();
    // const catUrl = "http://localhost:8080/book/v1/home_category/get_list";
    const catUrl = "/book/v1/home_category/get_list";
    const [shelterCategory, setShelterCategory] = useState([]);
    const [shelterName, setShelterName] = useState('');
    const [city, setCity] = useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    useEffect(()=>{
        axios.get(catUrl)
        .then(res =>{
            setShelterCategory(res.data)
            console.log(res.data)
        });
    },[]);

    const handleCatClick =(e)=>{
        const selectCat = e.target.textContent;
        console.log(selectCat);
        getCategory(selectCat);
    }
    
    const onSubmit = (e) =>{
        e.preventdefault();
        getShelterName(shelterName);
        getCity(city);
        console.log(getCity)
    } 
    return ( 
        <>
        <form onSubmit={onSubmit}>
        <div className='hostingDate'>
            <div className='hostingDate__title'>
                <h2> 숙소 유형 선택</h2>
            </div>
            <div className='hostingDate__container'>
                {
                    shelterCategory.map((item)=>(
                        <Button 
                        variant='outlined' 
                        key={item.id}
                        onClick={handleCatClick}
                        
                        > {item.homeCategoryName}</Button>
                    ))
                }
            </div>
            <div className='hostingname'>
                <h2> 숙소 이름 입력 </h2>
            </div>
            <div className='hostingname__input'>
                <input placeholder='숙소 이름 입력'
                onChange={({target : {value}})=>setShelterName(value)}></input>
                <div className='hostingname__info'>
                    <img src={idea} alt="idea.png"/>
                    <h4>숙소 이름은 저희 사이트에 표시되는
                        숙소의 명칭으로, 숙소의 특징, 위치,
                        제공 사항 등이 드러나는 것이 좋습니다.
                    </h4>
                </div>
            </div>
        </div>
        <div className='hostinglocation'>
            <div className='choice__city'>
                <h2> 숙소 위치 입력</h2>
                <h4> 지역</h4>
                <FormControl sx={{ m: 3, minWidth: 500 }}>
                    <InputLabel >city</InputLabel>
                    <Select
                        value={city}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>부산</MenuItem>
                        <MenuItem value={2}>서울</MenuItem>
                        <MenuItem value={3}>대전</MenuItem>
                        <MenuItem value={4}>대구</MenuItem>
                        <MenuItem value={5}>강원</MenuItem>
                        <MenuItem value={6}>전남</MenuItem>
                        <MenuItem value={7}>제주</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <h2> 우편 번호</h2>
                <input />
            </div>
            <div>
                <h2> 도로명 주소 또는 지번 주소</h2>
                <input />
            </div>
            <div>
                <h2> 건물 이름 또는 번호, 층수</h2>
                <input />
            </div>
            <div className='map'>
                <h1> 지도 표시</h1>
                <div className='map_box'>
                </div>
            </div>
            <div className='hostingstep1__button'>
                <Button variant='container' type='submit' >다음단계</Button>
            </div>
        </div>
        </form>
        </>
    );
}

export default HostingDate;