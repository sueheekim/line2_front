
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './HomeList.css';
import InfoCard from './InfoCard';
import Map from './Map';
import {format} from 'date-fns';
import { useLocation } from 'react-router-dom';
import Header from '../main/Header';
import Search from '../main/Search';

function HomeList() {
   
    const shelterListUrl = "http://localhost:8080/book/v1/home/list"
    // const shelterListUrl = "book/v1/home/list";
    const [shelterlist, setShelterlist] = useState([]);


    useEffect(()=>{
        axios.get(shelterListUrl)
        .then(res=>{
            setShelterlist(res.data)
            console.log(res.data)
        })
    },[])

    return (
        <>
        
        <Search/>
    <div className='list-map_container'>
        <div className='home_list'>
            <section className='search_title'>

                <div className='search_buttonGroup' >
                    <p>Cancellation Flexibility</p>
                    <p>Type of Gender</p>
                    <p>Rooms and Beds</p>
                    <p>More filters</p>
                </div>
                <div className='flex flex-col'>
                </div>
            </section>
            <section className='hidden xl:inline-flex xl:min-w-[600px] '>
            <div className = 'shelterlocation__count'>
            </div>
            {
                shelterlist.map((shelter)=>(
                    <InfoCard key={shelter.homeId} shelter={shelter} homeFacilities={shelter.homeFacilities} />
                ))
            }
            </section>
        </div>
        <section className='map_section'>
                <Map />
        </section>
    </div>
    </>
  )
}

export default HomeList;
