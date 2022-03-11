import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HostingHeader from './HostingHeader';
import './HostingStep2.css';

function HostingStep2() {
    const facUrl = "http://localhost:8080/api/findAllShelterFacilities"

    const [facility, setFacility] = useState([]);
    const [room, setRoom] = React.useState('');

    useEffect(()=>{
        axios.get(facUrl)
        .then(res=>{
            setFacility(res.data)
            console.log(res.date)
        });
    },[]);

    const handleChange = (event) => {
        setRoom(event.target.value);
    };

    return (  
        <div className='hostingstep2'>
            <HostingHeader />
            <h2> 숙소 시설 정보 입력</h2>
            <div className='shleterFacility__container'>
                <h5>게스트가 숙소 에서 이용 할 수 있는 시설을 선택해 주세요</h5>
                {
                    facility.map((item)=>(
                        <label>
                        <input type="checkbox" key={item.id}/>
                        {item.shelterFacilityName}
                        </label>
                    ))
                }
            </div>
            <h2> 숙소 객실 정보 입력</h2>
            <div className='shelterFacility__room'>
                <div className='room choice'>
                    <h3> 객실 선택</h3>
                    <FormControl sx={{ m: 3, minWidth: 700 }}>
                    <InputLabel >객실 수</InputLabel>
                    <Select
                        value={room}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>1인실</MenuItem>
                        <MenuItem value={2}>2인실</MenuItem>
                        <MenuItem value={3}>4인실</MenuItem>
                        <MenuItem value={4}>8인실</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </div>
        </div>
    );
}

export default HostingStep2;