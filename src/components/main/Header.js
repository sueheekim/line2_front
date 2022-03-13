import { Button } from '@mui/material';
import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (  
        <div className='header'>
            <div className='header__addShelter'>
                <Button variant='outlined'  onClick={()=>navigate('/hosting1')}>숙소 등록</Button>
            </div>

            <div className='header__logo'>
                <img src={logo} alt='logo.jpg'/>
            </div>

            <div className='header__signup'>
                <Button variant='outlined'>로그인</Button>
                <Button variant='outlined'>회원 가입</Button>
                <Button variant='outlined' onClick={()=>navigate('/guest')}>마이페이지</Button>
                
            </div>
        </div>
    );
}

export default Header
