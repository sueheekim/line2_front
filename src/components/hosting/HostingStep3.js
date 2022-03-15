import { Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HostingHeader from './HostingHeader';
import './HostingStep3.css';

function HostingStep3() {
    const policyUrl = "http://localhost:3005/homePolicy";
    const navigate = useNavigate();
    
    const [time, setTime] = useState('');
    const [policy, setPolicy] = useState([]);
    const [modal, setModal] = useState(false);

    const toggleModal=()=>{
        setModal(!modal)
        alert('등록되었습니다');
        navigate('/');
    }

    useEffect(()=>{
        axios.get(policyUrl)
        .then(res=>{
            setPolicy(res.data)
            console.log(res.data)
            })
    },[])

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    return (  
        <div className='hostingstep3'>
            <HostingHeader />
            
            <div className='hostPolicy__time'>
                <h3>숙소 정책 입력</h3>
                <h4>1. 체크인 정책</h4>
                    <FormControl sx={{m:2, minWidth: 700 }}>
                        <InputLabel >체크인 시간</InputLabel>
                        <Select
                            value={time}
                            onChange={handleTimeChange}
                        >
                            <MenuItem value={1}>7:00~12:00</MenuItem>
                            <MenuItem value={2}>13:00~19:00</MenuItem>
                            <MenuItem value={3}>19:00~20:00</MenuItem>
                        </Select>
                    </FormControl>
            </div>
            <div className='hostPolicy__policy'>
                <h4>체크인 정책을 선택해 주세요(중복 선택 가능)</h4>
                {
                    policy.map((policy)=>(
                        <label  key={policy.id}>
                        <input type="checkbox"/>
                        {policy.policy}
                        </label>
                    ))
                }
            </div>
            <div className='hostPolicy__rule'>
                <h3>쉼터 생활 규칙</h3>
                <h5>쉼터의 생활 규칙이 있다면 500자 내외로 입력해 주세요</h5>
                    <textarea ></textarea>
            </div>
            <div className='hostPolicy__description'>
                <h3>간단한 쉼터소개</h3>
                    <textarea ></textarea>
            </div>
            <div className='hostingstep3__button'>
                <Button variant='contained' onClick={()=>navigate('/hosting2')} >이전단계</Button>
                <Button variant='contained' onClick={toggleModal} >등록완료</Button>
            </div>
        </div>
    );
}

export default HostingStep3;