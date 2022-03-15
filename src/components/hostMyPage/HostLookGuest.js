import React from "react";
import './GuestProfile.css';

function HostLookGuest({guest}) {
    return ( 
        <div className='guestViewProfile'>
            <div className='guestProfile_container'>
                <div className='guestProfile_imglay'>
                    <img src={`img/${guest.userImg}`} alt='user.png'/>
                </div>
                <div className='guest_name'>
                    {guest.userName} {guest.userGender}
                </div>
                <div className='guest_phone'>
                    {guest.userPhonNumber}
                </div>
                <div className='guest_email'>
                    {guest.userEmail}
                </div>
            </div>
        </div>
     );
}

export default HostLookGuest;