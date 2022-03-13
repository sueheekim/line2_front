import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Button } from '@mui/material';
import './Hosting.css';
import { useNavigate } from 'react-router-dom';

function HostingLocation() {
    const navigate = useNavigate();
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
      setCity(event.target.value);
    };

    return (  
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
                <Button variant='container' onClick={()=>navigate('/hosting2')} >다음단계</Button>
            </div>
        </div>
        
    );
}

export default HostingLocation;