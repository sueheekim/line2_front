import { Button } from '@mui/material';
import React from 'react';
import './Hosting.css';
import idea from '../../images/idea.png';

function HostingDate() {

    return (  
        <div className='hostingDate'>
            <div className='hostingDate__title'>
                <h2> 숙소 유형 선택</h2>
            </div>
            <div className='hostingDate__container'>
                <Button variant='outlined'> 일시 </Button>
                <Button variant='outlined'> 단기 </Button>
                <Button variant='outlined'> 중장기 </Button>
                <Button variant='outlined'> 자립지원 </Button>
                <Button variant='outlined'> 여성전용 </Button>
                <Button variant='outlined'> 기타 </Button>
            </div>
            <div className='hostingname'>
                <h2> 숙소 이름 입력 </h2>
            </div>
            <div className='hostingname__input'>
                <input placeholder='숙소 이름 입력'></input>
                <div className='hostingname__info'>
                    <img src={idea} alt="idea.png"/>
                    <h4>숙소 이름은 저희 사이트에 표시되는
                        숙소의 명칭으로, 숙소의 특징, 위치,
                        제공 사항 등이 드러나는 것이 좋습니다.
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default HostingDate;