import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import InfoBoard from './InfoBoard';
import './Main.css';
import MainShelter from './MainShelter';
import Navbar from './Navbar';

function Main() {
    return (  
        <div className='main__container'>
            <Header />
            <Navbar />
            <Banner />
            <MainShelter />
            <InfoBoard />
            <Footer />
        </div>
    );
}

export default Main;