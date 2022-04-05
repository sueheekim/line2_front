import React, {useState,useEffect} from 'react';
import { Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InfoCard from './InfoCard';
import Map from './Map';
import Search from '../main/Search';
import './HomeList.css';

function HomeList() {
        
    const shelterListUrl = "/home/v1/home/find/";
    const {location} = useParams();
    const [shelterlist, setShelterlist] = useState([]);
    const [page, setPage] = useState(0);
    const [pageNum, setPageNum] =useState(1);

    useEffect(()=>{
        axios.get(shelterListUrl + location)
        .then(res=>{
            setShelterlist(res.data)
            console.log(res.data)
        })
    },[location])

    const handlePage = (event,value) =>{
        setPageNum(value)
        setPage(value *3 -3)
    }

    return (
        <>
        
        <Search/>
    <div className='list-map_container'>
        <div className='home_list'>
            <section className='search_title'>

                <div className='search_buttonGroup' >
                    <p>Type of Gender</p>
                    <p>Rooms and Beds</p>
                    <p>other date</p>
                </div>
            </section>
            <section>
            {
                shelterlist && shelterlist.map((shelter) =>(
                    <InfoCard key={shelter.homeId} shelter={shelter} homeFacilities={shelter.homeFacilities} />
                )).slice(page,page+3)
            }
            <Pagination count={10} page={pageNum} onChange={handlePage}/>
            </section>
        </div>
        <section className='map_section'>
                <Map shelterlist={shelterlist}/>
        </section>
    </div>
    </>
  )
}

export default HomeList;
