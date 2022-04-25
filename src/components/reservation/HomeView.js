import React, { useEffect, useState } from 'react';
import Location from './Location';

function HomeView(props) {
    const [imgUrl, setImgUrl] = useState('');

    const clickImage = e => {
        setImgUrl(e.target.src);
    };

    useEffect(() => {
        if (props.images) {
            setImgUrl(`/img/${props.images[0]}`);
        }
    }, [props]);

    return (
        <>
            <p className={'title'}>{props.homeName}</p>
            <div className={'image_container'}>
                <div className={'home_image_box'} style={{ backgroundImage: `url("${imgUrl}")` }}></div>
                <div className={'map_container'}>
                    <Location coordinateX={props.coordinateX} coordinateY={props.coordinateY} />
                </div>
            </div>
            <div>
                <div className={'home_images_box'}>
                    {props.images &&
                        props.images.map(image => (
                            <img
                                key={image}
                                className={'home_images'}
                                src={`/img/${image}`}
                                alt={image}
                                onClick={clickImage}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}

export default HomeView;
