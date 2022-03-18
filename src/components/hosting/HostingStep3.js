import { Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HostingHeader from './HostingHeader';
import './HostingStep3.css';

function HostingStep3({test, setTest}) {
    const policyUrl = "http://localhost:3005/homePolicy";
    const addShelterUrl2 = "http://localhost:3005/saveShelter";
    const navigate = useNavigate();
    
    const [time, setTime] = useState('');
    const [policy, setPolicy] = useState([]);
    const [selectPolicy, setSeletPolicy] = useState([]);
    const [roomRule, setRoomRule] = useState('');
    const [roomDescription, setroomDescription] = useState('');


    useEffect(()=>{
        axios.get(policyUrl)
        .then(res=>{
            setPolicy(res.data)
            })
    },[])

    const onSubmit = (e) =>{
        axios.post(addShelterUrl2, {
            ...test,
            checkInTime : time,
            policy : selectPolicy,
            roomRule : roomRule,
            roomDescription : roomDescription
        }).then(
            alert("등록 완료 되었습니다."),
            console.log("등록완료"),
            navigate('/')
        )
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    const checkedItemHandler = (e)=>{
        if (e.target.checked) {
            setSeletPolicy([...selectPolicy, e.target.id]);
        } else if(e.target.checked === false && selectPolicy.find(item => item === e.target.id)){
            setSeletPolicy(selectPolicy.filter(item => item !== e.target.id));
        }
    };

    return (  
        <div className='hostingstep3'>
            <HostingHeader />
            <form onSubmit={onSubmit}>
                <div className='hostPolicy__time'>
                    <h3>숙소 정책 입력</h3>
                    <h4>1. 체크인 정책</h4>
                        <FormControl sx={{m:2, minWidth: 700 }}>
                            <InputLabel >체크인 시간</InputLabel>
                            <Select
                                value={time}
                                onChange={handleTimeChange}
                            >
                                <MenuItem value={'오전'}>7:00~12:00</MenuItem>
                                <MenuItem value={'오후'}>13:00~19:00</MenuItem>
                                <MenuItem value={'저녁'}>19:00~20:00</MenuItem>
                            </Select>
                        </FormControl>
                </div>
                <div className='hostPolicy__policy'>
                    <h4>체크인 정책을 선택해 주세요(중복 선택 가능)</h4>
                    {
                        policy.map((policy)=>(
                            <label  key={policy.id}>
                            <input type="checkbox" id={policy.id}
                            onChange={checkedItemHandler}
                            />
                            {policy.policy}
                            </label>
                        ))
                    }
                </div>
                <div className='hostPolicy__rule'>
                    <h3>쉼터 생활 규칙</h3>
                    <h5>쉼터의 생활 규칙이 있다면 500자 내외로 입력해 주세요</h5>
                        <textarea value={roomRule}
                            onChange={({target : {value}})=>setRoomRule(value)} ></textarea>
                </div>
                <div className='hostPolicy__description'>
                    <h3>간단한 쉼터소개</h3>
                        <textarea value={roomDescription}
                            onChange={({target : {value}})=>setroomDescription(value)} ></textarea>
                </div>
                <div className='hostingstep3__button'>
                    <Button variant='contained' onClick={()=>navigate('/hosting2')} >이전단계</Button>
                    <Button variant='contained' type='submit' >등록완료</Button>
                </div>
            </form>
        </div>
    );
}

export default HostingStep3;