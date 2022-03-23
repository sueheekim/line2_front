
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './HomeList.css';
import InfoCard from './InfoCard';
import Map from './Map';

function HomeList() {
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
    <div className='list-map_container'>
        <div className='home_list'>
            <section className='search_title'>
                <p>300+ Stays  for number of guests</p>

                <h1>Stays in</h1>

                <div className='search_buttonGroup' >
                    <p>Cancellation Flexibility</p>
                    <p>Type of Place</p>
                    <p>Rooms and Beds</p>
                    <p>More filters</p>
                </div>
                <div className='flex flex-col'>
                </div>
            </section>
            <section className='hidden xl:inline-flex xl:min-w-[600px] '>
            <div className = 'shelterlocation__count'>
                지역 : {shelterlist.length}
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
