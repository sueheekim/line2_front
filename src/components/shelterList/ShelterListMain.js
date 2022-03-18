import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ShelterListMain.css';
import Navbar from '../main/Navbar';
import ShelterListCard from './ShelterListCard';
import Header from '../main/Header';
import { Pagination } from '@mui/material';

function ShelterListMain() {
    const shelterListUrl = "http://localhost:3005/saveShelter"
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
            <Header />
            <h2>숙소 목록</h2>
            <Navbar />
            <div className = 'shelterlocation__count'>
                지역 : {shelterlist.length}
            </div>
            {
                shelterlist.map((shelter)=>(
                    <ShelterListCard key={shelter.id} shelter={shelter} />
                ))
            }
            <Pagination count={10} />
        </div>
    );
}


export default ShelterListMain;