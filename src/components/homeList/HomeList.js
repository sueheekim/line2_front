import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useLocation } from 'react-router-dom';
import InfoCard from './InfoCard';
import Map from './Map';
import Search from '../main/Search';

function HomeList() {
    const shelterListUrl = '/home/v1/home/find/';
    const location = useLocation();
    const [shelterlist, setShelterlist] = useState([]);
    const [page, setPage] = useState(0);
    const [pageNum, setPageNum] = useState(1);

    console.log('state', location.state);
    useEffect(()=>{
        setShelterlist(location.state)
    },[location.state])
    // useEffect(() => {
    //     axios.get(shelterListUrl + searchHome.location).then(res => {
    //         setShelterlist(res.data);
    //         console.log(res.data);
    //     });
    // }, [searchHome]);

    const handlePage = (event, value) => {
        setPageNum(value);
        setPage(value * 3 - 3);
    };

    return (
        <>
            <Search />
            <div className="home_list_map_container">
                <div className="home_list">
                    <section className="search_title">
                        <div className="search_buttonGroup">
                            <p>Type of Gender</p>
                            <p>Rooms and Beds</p>
                            <p>other date</p>
                        </div>
                    </section>
                    <section>
                        {shelterlist &&
                            shelterlist
                                .map(shelter => (
                                    <InfoCard
                                        key={shelter.homeId}
                                        shelter={shelter}
                                        homeFacilities={shelter.homeFacilities}
                                    />
                                ))
                                .slice(page, page + 3)}
                        <Pagination
                            count={4}
                            page={pageNum}
                            onChange={handlePage}
                        />
                    </section>
                </div>
                <section className="map_section">
                    <Map shelterlist={shelterlist} />
                </section>
            </div>
        </>
    );
}

export default HomeList;
