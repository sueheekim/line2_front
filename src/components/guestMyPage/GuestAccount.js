import React,{useState,useEffect} from 'react'
import axios from 'axios';
import GuestAccountCard from './GuestAccountCard';

function GuestAccount() {
    const guestAccountUrl = "/book/v1/reservation/user/before_check_out/1";
    const [guestAccount, setGuestAccount] = useState([]);

    useEffect(()=>{
        axios.get(guestAccountUrl)
        .then(res=>{
            setGuestAccount(res.data)
        });
    },[])
  return (
    <div className='hostCheckInPage'>
        {
            guestAccount.map((guest)=>(
                <GuestAccountCard key={guest.id} guest={guest.user} home={guest.home} reservation={guest}/>
            ))
        }
    </div>
  )
}


export default GuestAccount;