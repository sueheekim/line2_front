import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HostingHeader from './HostingHeader';
import './HostingStep2.css';

function HostingStep2() {
    const facUrl = "http://localhost:8080/api/findAllShelterFacilities"

    const [facility, setFacility] = useState([]);
    const [room, setRoom] = React.useState('');
    const [counter, setCounter] = useState(0);

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

    const handleIncrement=()=>{
        setCounter(counter+1);
    }

    const handleDecrement=()=>{
        setCounter(counter-1);
    }

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
            
            <div className='shelterFacility__room'>
            <h2> 숙소 객실 정보 입력</h2>
                <div className='room__choice'>
                    <h3> 객실 선택</h3>
                    <FormControl sx={{m:2, minWidth: 700 }}>
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
                    <h3> 객실 이름 </h3>
                    <TextField id="outlined-basic" label="객실 이름" variant="outlined" className='roomname' />
                    <h5>객실 1에는 어떤 침대가 제공 되나요?</h5>
                    <h5>싱글 침대</h5>
                    <div>
                        <button name="inc" onClick={handleIncrement}> + </button>
                        <h4>{counter}</h4>
                        <button name="dec" onClick={handleDecrement}> - </button>
                    </div>
                    <h5>2층 침대</h5>
                    <h5>이불 지원</h5>
                </div>
            </div>
        </div>
    );
}

export default HostingStep2;