import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GuestAccountCard from './GuestAccountCard';

function GuestAccount() {
    const guestAccountUrl = 'http://localhost:8080/user/v1/user/1';
    const [guestAccount, setGuestAccount] = useState([]);

    useEffect(() => {
        axios.get(guestAccountUrl).then(res => {
            setGuestAccount(res.data);
            console.log(res.data);
        });
    },);

    return (
            <div className="guestAccount">
                <GuestAccountCard GuestAccount={GuestAccount} />
            </div>
    );
}

export default GuestAccount;
