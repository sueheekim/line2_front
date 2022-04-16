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

    const myFunction =()=> {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = event => {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

    const handleGeustIcon = () => {
        setGuestActive(!guestActive);
    };
    const handleHostIcon = () => {
        if(hostActive === true){
            setHostActive(false)
        } else if(hostActive ===false){
            setHostActive(true);
        }

        console.log(hostActive)
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
                                    <div className="dropdown">
                                        <button onClick={myFunction} className="dropbtn">Dropdown</button>
                                        <div id="myDropdown" className="dropdown-content">
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <a href="#">Link 3</a>
                                        </div>
                                    </div>
                                        </>
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
                                    <Face  style={{ color: "#ffffff", fontSize: "30px" }} />
                                    <p>게스트</p>
                                    <ExpandMoreIcon style={{ fontSize: "30px" }} />
                                </Button>
                                <nav
                                    ref={guestdropdownRef}
                                    className={`guestmenu ${
                                        guestActive ? 'active' : null
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
                                        guestActive ? 'active' : null
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
