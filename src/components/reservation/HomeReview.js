import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomeReview() {
    const homeReviewTableUrl = '/community/v1/review/home/1';
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(homeReviewTableUrl).then(res => {
            setReviews(res.data);
        });
    }, []);

    const stars = stars => {
        let starForm = [];
        for (let i = 0; i < stars; i++) {
            starForm.push(<img key={i} className={'star'} src="/img/star.svg" alt="star" />);
        }
        return starForm;
    };

    return (
        <>
            <p className={'title'}>쉼터 이용 후기</p>
            <div className={'contents_container'}>
                {reviews &&
                    reviews.map(review => (
                        <div key={review.id} className={'review_box'}>
                            <div className="under_line">
                                <div className="justify-content-space-between">
                                    <div className={'star_box'}>{stars(review.star)}</div>
                                    <div className="review_updated">
                                        {new Date(review.updated).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                            <p className={'review_text'}>{review.review}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default HomeReview;
