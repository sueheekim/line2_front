import React from 'react';
import bgImg from '../../images/background3.jpg';

function Banner() {
    return (
        <div>
            <div className="banner_img">
                {/* <img src='http://links.papareact.com/0fm' alt='banner'/> */}
                <img src={bgImg} alt="banner" />
                {/* <div className='banner_text'>
            <p>Not sure where to go? Ansim.</p>
            <button>Come here</button>
            </div> */}
            </div>
        </div>
    );
}

export default Banner;
