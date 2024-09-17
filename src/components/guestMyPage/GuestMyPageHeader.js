import React from 'react';
import { useNavigate } from 'react-router-dom';
import chat from '../../images/chat.png';
import notification from '../../images/notification.png';
import user from '../../images/user.png';
import logo from '../../images/logo.svg';

function GuestMyPageHeader() {
    const navigate = useNavigate();
    
    return (
        <div className="guestpage_header">
            <div className="header_logo">
                <img src={logo} alt="logo.jpg" onClick={() => navigate('/')} />
            </div>

            <div className="guestpageheader_right">
                <img src={chat} alt="chat.png" />
                <img src={notification} alt="chat.png" />
                <img src={user} alt="chat.png" />
            </div>
        </div>
    );
}

export default GuestMyPageHeader;
