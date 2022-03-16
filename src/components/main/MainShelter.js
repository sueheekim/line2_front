import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './MainShelter.css';

function MainShelter() {
    
    const [shelter, setShelter] = useState([]);
    const [amount, setAmount] = useState(4);
    const [n ,setN] = useState(0)

    useEffect(()=>{
        axios.get("http://localhost:3005/shelterdata")
        .then(res =>{
            setShelter(res.data)
            console.log(res.data)
        });
    },[]);

    const toggleBeforeAmount = () =>{
        if(n === 0){
            setN(0);
        } else{
            setN(n-4);
            setAmount(amount - 4);
            console.log(n);
            console.log(amount);
        }
    }
    
    const toggleNextAmount=()=>{
        if(amount === 8){
            setAmount(8)
        } else {
            setN(n+4);
            setAmount(amount + 4);
            console.log(n);
            console.log(amount);
        }
    }
    return (  
        <div className='mainshelter'>
            <div className='mainshelter_section'> 
            {
                shelter.map((shelter)=>(
                    <Card key={shelter.id} shelter={shelter} />
                )).slice(n , amount)
            }
            </div>
            <NavigateBeforeIcon onClick = {toggleBeforeAmount} />
            <NavigateNextIcon onClick={toggleNextAmount}/>
        </div>
    );
}

export default MainShelter;