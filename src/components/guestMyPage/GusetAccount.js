import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GuestAccount() {

    const guestAccountUrl = '/book/v1/user/1';
    const [guestAccount, setGuestAccount] = useState([]);

    useEffect(() => {
        axios.get(guestAccountUrl).then(res => {
            setGuestAccount(res.data);
            console.log(res.data);
        });
    });
    
    return (  
        <>
        <h1>게스트 정보</h1>
        </>
    );
}

export default GuestAccount;