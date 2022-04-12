import React, { useEffect, useState } from 'react';
import GuestAccountCard from './GuestAccountCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';

function GuestAccount() {
    const user = useSelector(selectUser);
    console.log(selectUser);

    const guestAccountUrl = `/user/v1/user/`;
    const [guestAccount, setGuestAccount] = useState([]);

    useEffect(() => {
        axios.get(guestAccountUrl+user.id).then(res => {
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
