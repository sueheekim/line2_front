import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useLocation } from 'react-router-dom';
import InfoCard from './InfoCard';
import Map from './Map';
import Search from '../main/Search';

function HomeList() {
    const location = useLocation();
    const [shelterlist, setShelterlist] = useState([]);
    const [page, setPage] = useState(0);
    const [pageNum, setPageNum] = useState(1);

    useEffect(()=>{
        setShelterlist(location.state.state)
    },[location.state])

    const handlePage = (event, value) => {
        setPageNum(value);
        setPage(value * 3 - 3);
    };

    return (
        <>
            <div className="home_list_map_container">
                <div className="home_list">
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
