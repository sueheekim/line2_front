import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Banner from './Banner'
import SmallCard from './SmallCard';
import './Main.css';
import LargeCard from './LargeCard';

function Main({exploreData, cardsData}) {
    const smallcardUrl = "http://localhost:3005/shelterdata"
    const [smallCard, setSmallCard] = useState([]);

    useEffect(()=>{
        axios.get(smallcardUrl)
        .then(res=>{
            setSmallCard(res.data)
        });
    },[]);

  return (
    <div>
        <Banner />
        <div className='smallCard_text'>
            <h2>Explore Nearby</h2>
        </div>
        <div className='smallCard'>
        {
            smallCard.map((item) =>(
                    <SmallCard key={item.id} imageName={item.imageName} distance={item.distance} shelter_location={item.shelter_location}
                    />
                )).slice(0,4)
        }
        </div>
        <div className='largeCard'>
            <LargeCard 
            img = "https://links.papareact.com/4cj"
            title="The Greatest OutDoors"
            description="Wishlists curated by Ansim"
            buttonText="Get Inspired"
            />
        </div>
    </div>
  )
}

export default Main 
