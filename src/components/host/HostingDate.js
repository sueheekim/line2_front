import { Button } from '@mui/material';
import React from 'react';


function HostingDate() {
    return (  
        <div>
            <div className='hostingDate__title'>
                <h2> 숙소 여행 선택</h2>
            </div>
            <div className='hostingDate__container'>
                <Button variant='container'> 일시 </Button>
                <Button variant='container'> 단기 </Button>
                <Button variant='container'> 중장기 </Button>
                <Button variant='container'> 자립지원 </Button>
                <Button variant='container'> 여성전용 </Button>
                <Button variant='container'> 기타 </Button>
            </div>
        </div>
    );
}

export default HostingDate;