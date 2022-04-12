import React from 'react';

function GuestProfile({ guest }) {
    let guestGender
    if(guest.userGender){
        guestGender = "남자"
    } else guestGender = "여자"
    return (
        <div className="guest_profile">
            <h3>게스트 프로필</h3>
            <div className="guest_profile_container">
                <div className="guest_profile_img">
                    <img src={`img/${guest.userImg}`} alt="user.png" />
                </div>
                <div className="guest_name">
                    {guest.userName} {guestGender}
                </div>
                <div className="guest_phone">{guest.userPhoneNumber}</div>
                <div className="guest_email">{guest.userEmail}</div>
            </div>
        </div>
    );
}

export default GuestProfile;
