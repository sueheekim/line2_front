import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomeReview() {
    const homeReviewTableUrl = '/community/v1/review/home/1';
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(homeReviewTableUrl).then(res => {
            setReviews(res.data);
            console.log(res.data);
        });
    }, []);

    const stars = (stars) => {
        let starForm = [];
        for(let i = 0; i < stars; i++) {
            starForm.push(<img className={'star'} src="/img/star.svg" alt="star" />);
        }
        return starForm;
    }

    return (
        <>
            <p className={'title'}>쉼터 이용 후기</p>
            <div className={'contents_container'}>
                {reviews &&
                    reviews.map(review => (
                        <div className={'review_box'}>
                            <div className={'star_box'}>
                                    {stars(review.star)}
                            </div>
                            <p className={'review_text'}>
                                {review.review}
                            </p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default HomeReview;
