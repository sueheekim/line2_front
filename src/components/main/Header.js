import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../_actions/user_action';
import { selectUser } from '../../_reducers';
import logo from '../../images/logo.svg';
import { Face } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

function Header() {


    const user = useSelector(selectUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const hostdropdownRef = useRef(null);
    const guestdropdownRef = useRef(null);
    const [hostActive, setHostActive] = useDetectOutsideClick(
        hostdropdownRef,
        false,
    );
    const [guestActive, setGuestActive] = useDetectOutsideClick(
        guestdropdownRef,
        false,
    );

    const handleGeustIcon = () => {
        setGuestActive(!guestActive);
    };
    const handleHostIcon = () => {
        setHostActive(!hostActive);
    };

    const onLogoutHandle=()=>{
        dispatch(logoutUser())
        .then(
            navigate('/login')
        )
    }

    const theme = createTheme({
        palette: {
            contained: {
            main: '#f73378',
          },
        },
      });

    return (
        <>
            <div className="header">
                <img
                    className="header_icon"
                    src={logo}
                    alt="logo"
                    onClick={() => navigate('/')}
                />

                <div className="header_right">
                    {
                        user ? (
                            <>{
                                user.host ? (
                                    <>
                                    <div className="menu_container">
                                    <Button
                                        onClick={() => handleHostIcon()}
                                        className="hostmenu_trigger"
                                        style={{
                                            borderRadius: 35,
                                            backgroundColor: "#125b30",
                                            padding: "8px",
                                            fontSize: "8px"
                                        }}
                                        variant="contained"
                                    >
                                       
                                        <HomeIcon style={{ color: "#ffffff", fontSize: "30px" }} />
                                        <p>호스트</p>
                                        <ExpandMoreIcon style={{ fontSize: "30px" }} />
                                    </Button>
                                    <nav
                                        ref={hostdropdownRef}
                                        className={`hostmenu ${
                                            hostActive ? 'active' : 'inactive'
                                        }`}
                                    >
                                        <ul>
                                            <li>
                                                <Link to={'/hosting1'}>숙소 등록</Link>
                                            </li>
                                            <li>
                                                <Link to={'/host'}>호스트 마이페이지</Link>
                                            </li>
                                            <li onClick={onLogoutHandle}>
                                                <Link to= {'/'}> 로그아웃 </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div></>
                            ):(
                                <>
                                <div className="menu_container">
                                <Button
                                    onClick={() => handleGeustIcon()}
                                    className="guestmenu_trigger"
                                    style={{
                                        borderRadius: 35,
                                        backgroundColor: "#125b30",
                                        padding: "8px",
                                        fontSize: "8px"
                                    }}
                                    variant="contained"
                                >
                                    <Face  style={{ color: "#ffffff", fontSize: "30px" }} />
                                    <p>게스트</p>
                                    <ExpandMoreIcon style={{ fontSize: "30px" }} />
                                </Button>
                                <nav
                                    ref={guestdropdownRef}
                                    className={`guestmenu ${
                                        guestActive ? 'active' : 'inactive'
                                    }`}
                                >
                                    <ul>
                                        <li>
                                            <Link to={'/guest'}>게스트 마이페이지</Link>
                                        </li>
    
                                        <li onClick={onLogoutHandle}>
                                            <Link to= {'/'}> 로그아웃 </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            </>

                            )
                            }</>

                        ):(
                            <>
                                <div className="menu_container">
                                <Button
                                    onClick={handleGeustIcon}
                                    className="guestmenu_trigger"
                                    style={{
                                        borderRadius: 35,
                                        backgroundColor: "#125b30",
                                        padding: "8px",
                                        fontSize: "8px"
                                    }}
                                    variant="contained"
                                >
                                    <AccountCircleIcon style={{ color: "#ffffff", fontSize: "30px" }}/>
                                    <p>로그인</p>
                                    <ExpandMoreIcon style={{ fontSize: "30px" }} />
                                </Button>
                                <nav
                                    ref={guestdropdownRef}
                                    className={`guestmenu ${
                                        guestActive ? 'active' : 'inactive'
                                    }`}
                                >
                                    <ul>
                                        <li>
                                            <Link to={'/login'}>로그인</Link>
                                        </li>
                                        <li>
                                            <Link to={'/guest/signup'}>게스트 회원가입</Link>
                                        </li>
                                        <li>
                                            <Link to={'/host/signup'}>호스트 회원가입</Link>
                                        </li>
    
                                        
                                    </ul>
                                </nav>
                            </div>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    );
}

export default Header;
