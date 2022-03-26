
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './HomeList.css';
import InfoCard from './InfoCard';
import Map from './Map';
import {format} from 'date-fns';
import { useLocation } from 'react-router-dom';

function HomeList() {
    // const shelterListUrl = "http://localhost:3005/saveShelter"
    const shelterListUrl = "book/v1/home/list";
    const [shelterlist, setShelterlist] = useState([]);
    const location = useLocation();
    const {searchInput, startDate , endDate, noOfGuests} =location.state;

    const formattedStartDate = format(new Date(startDate),'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate),'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`; 

    console.log('state', location.state);
    useEffect(()=>{
        axios.get(shelterListUrl)
        .then(res=>{
            setShelterlist(res.data)
            console.log(res.data)
        })
    },[])

    return (
    <div className='list-map_container'>
        <div className='home_list'>
            <section className='search_title'>
                <p>{shelterlist.length} Stays {range} for {noOfGuests} number of guests</p>

                <h1>Stays in {searchInput}</h1>

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
                    <InfoCard key={shelter.id} shelter={shelter} />
                ))
            }
            </section>
        </div>
        <section className='map_section'>
                <Map />
        </section>
    </div>
  )
}

export default HomeList;
