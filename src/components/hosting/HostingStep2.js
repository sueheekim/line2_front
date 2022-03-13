import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HostingHeader from './HostingHeader';
import './HostingStep2.css';

function HostingStep2() {
    const facUrl = "http://localhost:8080/api/findAllShelterFacilities"

    const navigate = useNavigate();

    const [facility, setFacility] = useState([]);
    const [room, setRoom] = useState('');
    const [gender, setGender] = useState('');
    const [bedCounter, setBedCounter] = useState(0);
    const [bed2Counter, setBed2Counter] = useState(0);
    const [blanketCounter, setBlanketCounter] = useState(0);
    const [peopleCounter, setPeopleCounter] = useState(0);
    

    useEffect(()=>{
        axios.get(facUrl)
        .then(res=>{
            setFacility(res.data)
            console.log(res.data)
        });
    },[]);

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }
    const handleBedIncrement=()=>{
        setBedCounter(bedCounter+1);
    }
    const handleBedDecrement=()=>{
        if(bedCounter <= 0){
            setBedCounter(0);
        }else {
            setBedCounter(bedCounter-1);
        }
    }
    const handleBed2Increment=()=>{
        setBed2Counter(bed2Counter+1);
    }
    const handleBed2Decrement=()=>{
        if(bed2Counter <= 0){
            setBed2Counter(0);
        }else {
            setBed2Counter(bed2Counter-1);
        }
    }
    const handleBlanketIncrement=()=>{
        setBlanketCounter(blanketCounter+1);
    }
    const handleBlanketDecrement=()=>{
        if(blanketCounter <= 0){
            setBlanketCounter(0);
        }else {
            setBlanketCounter(blanketCounter-1);
        }
    }
    const handlePeoPleIncrement=()=>{
        setPeopleCounter(peopleCounter+1);
    }
    const handlePeoPleDecrement=()=>{
        if(peopleCounter <= 0){
            setPeopleCounter(0);
        }else {
            setPeopleCounter(peopleCounter-1);
        }
    }

    return (  
        <div className='hostingstep2'>
            <HostingHeader />
            <h2> 숙소 시설 정보 입력</h2>
            <div className='shleterFacility__container'>
                <h5>게스트가 숙소 에서 이용 할 수 있는 시설을 선택해 주세요</h5>
                {
                    facility.map((item)=>(
                        <label  key={item.id}>
                        <input type="checkbox"/>
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
                            onChange={handleRoomChange}
                        >
                            <MenuItem value={1}>1인실</MenuItem>
                            <MenuItem value={2}>2인실</MenuItem>
                            <MenuItem value={3}>4인실</MenuItem>
                            <MenuItem value={4}>8인실</MenuItem>
                        </Select>
                    </FormControl>
                    <h3> 객실 이름 </h3>
                    <TextField id="outlined-basic" label="객실 이름" variant="outlined" className='roomname' />
                    <h4>객실 1에는 어떤 침대가 제공 되나요?</h4>
                    <h5>싱글 침대</h5>
                        <div className='bed__count'>
                            <button name="dec" onClick={handleBedDecrement}> - </button>
                            <h4>{bedCounter}</h4>
                            <button name="inc" onClick={handleBedIncrement}> + </button>
                        </div>
                    <h5>2층 침대</h5>
                        <div className='bed2__count'>
                                <button name="dec" onClick={handleBed2Decrement}> - </button>
                                <h4>{bed2Counter}</h4>
                                <button name="inc" onClick={handleBed2Increment}> + </button>
                        </div>
                    <h5>이불 지원</h5>
                        <div className='blanket__count'>
                                <button name="dec" onClick={handleBlanketDecrement}> - </button>
                                <h4>{blanketCounter}</h4>
                                <button name="inc" onClick={handleBlanketIncrement}> + </button>
                        </div>
                        
                    <h3> 객실1에 선택 가능한 인원은 몇명인가요?</h3>
                    <FormControl sx={{m:2, minWidth: 700 }}>
                        <InputLabel >남/녀 성별 선택</InputLabel>
                        <Select
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <MenuItem value={1}>남성</MenuItem>
                            <MenuItem value={2}>여성</MenuItem>
                        </Select>
                    </FormControl>

                    <h3>객실 1에는 숙박 가능한 인원은 몇명인가요?</h3>
                        <div className='people__count'>
                                <button name="dec" onClick={handlePeoPleDecrement}> - </button>
                                <h4>{peopleCounter}</h4>
                                <button name="inc" onClick={handlePeoPleIncrement}> + </button>
                        </div>
                </div>
                <div className='room__photo'>
                    <h3>우리 숙소를 나타낼 수 있는 사진을 올려주세요</h3>
                    <Button variant='contained'>사진 업로드</Button>
                </div>
            </div>
            <div className='hostingstep1__button'>
                <Button variant='container' onClick={()=>navigate('/')} >다음단계</Button>
            </div>
        </div>
    );
}

export default HostingStep2;