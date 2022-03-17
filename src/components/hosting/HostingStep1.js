import React, { useState } from 'react';
import HostingDate from './HostingDate';
import HostingHeader from './HostingHeader';

function Hosting() {
    const [category, setCategory] = useState('');
    const [shelterName, setShelterName] = useState('');

    const getData = (category) =>{
        setCategory(category);
        console.log(category);
    }
    const getName = (shelterName) =>{
        setShelterName(shelterName);
        console.log(shelterName);
    }

    return (  
        <div className='hosting'>
            <HostingHeader />
            <HostingDate getCategory={getData} getShelterName={getName}/>
            <h1>getCategory={category}</h1>
            <h1>getShelterName={shelterName}</h1>
        </div>
    );
}

export default Hosting;