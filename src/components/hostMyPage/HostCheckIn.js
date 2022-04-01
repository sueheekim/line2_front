import axios from 'axios';
import React,{useState,useEffect} from 'react'
import HostCheckInCard from './HostCheckInCard';
import './HostCheckIn.css';

function HostCheckIn() {
    // const checkInGuestsUrl = "http://localhost:8080/book/v1/reservation/user/before_check_out/1";
    const checkInGuestsUrl = "/book/v1/reservation/user/before_check_out/1";
    const [checkInGuest, setCheckInGuest] = useState([]);

    useEffect(()=>{
        axios.get(checkInGuestsUrl)
        .then(res=>{
            setCheckInGuest(res.data)
        });
    },[])
  return (
    <div className='hostCheckInPage'>
        {
            checkInGuest.map((guest)=>(
                <HostCheckInCard key={guest.id} guest={guest.user} home={guest.home} reservation={guest}/>
            ))
        }
    </div>
  )
}

export default HostCheckIn