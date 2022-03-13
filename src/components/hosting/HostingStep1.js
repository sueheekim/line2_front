import React from 'react';
import HostingDate from './HostingDate';
import HostingHeader from './HostingHeader';
import HostingLocation from './HostingLocation';

function Hosting() {
    return (  
        <div className='hosting'>
            <HostingHeader />
            <HostingDate />
            <HostingLocation />
        </div>
    );
}

export default Hosting;