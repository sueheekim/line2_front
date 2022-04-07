import React, { useEffect, useState } from 'react';
import GuestAccountCard from './GuestAccountCard';
import axios from 'axios';

function GuestAccount() {
    const guestAccountUrl = '/user/v1/user/1';
    const [guestAccount, setGuestAccount] = useState([]);

    useEffect(() => {
        axios.get(guestAccountUrl).then(res => {
            setGuestAccount(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="guestAccount">
            <GuestAccountCard GuestAccount={guestAccount} />
        </div>
    );
}

export default GuestAccount;
