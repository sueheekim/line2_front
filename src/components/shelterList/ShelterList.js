import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../main/Navbar.js';

function ShelterList() {
    const shelterListUrl = "http://localhost:3005/shelterdata"
    const [shelterlist, setShelterlist] = useState([]);

    useEffect(()=>{
        axios.get(shelterListUrl)
        .then(res=>{
            setShelterlist(res.data)
            console.log(res.data)
        })
    },[])
    return (  
        <div className='shelterList'>
            <h2>숙소 목록</h2>
            <Navbar />
            <div className = 'shelterlocation__count'>
                지역 : {shelterlist.length}
            </div>
            <div className='selterList__container'>
                <img src={ `/img/${shelterlist.imageName}`} alt='room_img'/>
                
            </div>
        </div>
    );
}

export default ShelterList;
