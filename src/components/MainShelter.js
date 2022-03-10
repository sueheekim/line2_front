import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './MainShelter.css';

function MainShelter() {
    const [shelter, setShelter] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3005/shelterdata")
        .then(Response =>{
            setShelter(Response.data)
            console.log(Response.data)
        });
    },[]);

    return (  
        <div className='mainshelter'>            
            <div className='mainshelter_section'> 
            {
                shelter.map((shelter)=>(
                    <Card key={shelter.Id} shelter={shelter} />
                ))
            }
            </div>
        </div>
    );
}

export default MainShelter;