import React from 'react';

function GuestAccountCard({ GuestAccount }) {

    let guestGender
    if(GuestAccount.userGender){
        guestGender = "남자"
    } else {
        guestGender = "여자"
    }
    return (
        <div className="guestAccountCard">
            <h2>내 계정 정보</h2>
            <div className="guestAccount_info">
                <div className="account_userloginid">
                    아이디 : {GuestAccount.loginName}
                </div>
                <div className="account_userpassword">
                    비밀번호 : {GuestAccount.password}
                </div>
                <div className="account_username">
                    이름 : {GuestAccount.userName}
                </div>
                <div className="account_usergender">
                    성별 : {guestGender}
                </div>
                <div className="account_userphonenumber">
                    연락처 : {GuestAccount.userPhoneNumber}
                </div>
                <div className="account_useremail">
                    e-mail : {GuestAccount.userEmail}
                </div>
                <div className="account_userImg">
                    신분증명 : <img src={`img/${GuestAccount.userImg}`}  alt=""/>
                </div>
            </div>
        </div>
    );
}

export default GuestAccountCard;
