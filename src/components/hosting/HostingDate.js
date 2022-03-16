import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Hosting.css';
import idea from '../../images/idea.png';
import axios from 'axios';


function HostingDate() {
    const catUrl = "http://localhost:3005/findAllShelterCategories";
    const [shelterCategory, setShelterCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState('none');
        
    useEffect(()=>{
        axios.get(catUrl)
        .then(res =>{
            setShelterCategory(res.data)
            console.log(res.data)
        });
    },[]);

    const handleClick =(e)=>{
        const selectCat = e.target.textContent;
        setSelectCategory(selectCat);
        console.log(selectCat);
    }
    
    return (  
        <div className='hostingDate'>
            <div className='hostingDate__title'>
                <h2> 숙소 유형 선택</h2>
            </div>
            <div className='hostingDate__container'>
                {
                    shelterCategory.map((item)=>(
                        <Button 
                        variant='outlined' 
                        key={item.id}
                        onClick={handleClick}
                        
                        > {item.shelterCategoryName}</Button>
                    ))
                }
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