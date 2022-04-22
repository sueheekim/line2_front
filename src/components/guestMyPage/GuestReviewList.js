import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import { Box, Modal } from '@mui/material';
import GuestReviewListImage from './GuestReviewListImage';

function GuestReivewList() {
    const reviewUrl = '/community/v1/review';
    const userReviewUrl = '/community/v1/review/user/';
    const homeNotDtoUrl = '/home/v1/home/not_dto/';
    const homeListUrl = '/home/v1/home/list';

    const [reviewModal, setReviewModal] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState({});
    const [star, setStar] = useState(0);

    const user = useSelector(selectUser);

    useEffect(() => {
        axios.get(userReviewUrl + user.id).then(res => {
            setReviews(res.data);
        });
    }, []);

    const openReviewModal = review => {
        setReviewModal(true);
        setReview(review);
    };

    const closeReviewModal = () => {
        setReviewModal(false);
        setStar(0);
    };

    const changeStar = star => {
        setStar(star);
    };

    const stars = stars => {
        let starForm = [];
        for (let i = 0; i < stars; i++) {
            starForm.push(<img key={i} className={'star'} src="/img/star.svg" alt="star" />);
        }
        return starForm;
    };

    const submitReview = () => {
        let reviewTmp = {
            updated: new Date(),
            id: review.id,
            review: document.getElementById('guest_review_text_input').value,
            star: star,
            homeName: review.homeName,
            homeId: review.homeId,
            userId: user.id,
            reservationId: review.reservationId,
        };
        if (star === 0) {
            alert('점수를 선택해주세요');
        } else if (document.getElementById('guest_review_text_input').value === '') {
            alert('후기 내용을 입력해주세요');
        } else {
            axios
                .put(reviewUrl, {
                    id: review.id,
                    review: document.getElementById('guest_review_text_input').value,
                    star: star,
                    homeName: review.homeName,
                    homeId: review.homeId,
                    userId: user.id,
                    reservationId: review.reservationId,
                })
                .then(res => {
                    if (res.data.code === 1) {
                        alert('리뷰가 수정되었습니다.');
                        setReviewModal(false);
                        setReviews(
                            reviews
                                .slice(
                                    0,
                                    reviews.findIndex(re => re.id === review.id),
                                )
                                .concat([reviewTmp])
                                .concat(
                                    reviews.slice(reviews.findIndex(re => re.id === review.id) + 1, reviews.length),
                                ),
                        );
                    } else {
                        alert('서버 오류로 인하여 실패하였습니다.');
                    }
                });
        }
    };

    const deleteReview = id => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            axios.delete(reviewUrl + '/' + id).then(res => {
                if (res.data.code === 1) {
                    alert('리뷰가 삭제되었습니다.');
                    setReviewModal(false);
                    setReviews(
                        reviews
                            .slice(
                                0,
                                reviews.findIndex(re => re.id === id),
                            )
                            .concat(reviews.slice(reviews.findIndex(re => re.id === id) + 1, reviews.length)),
                    );
                } else {
                    alert('서버 오류로 인하여 실패하였습니다.');
                }
            });
        }
    };

    return (
        <div className="container">
            <Modal
                className="reservation_modal_container"
                open={reviewModal}
                onClose={closeReviewModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'review_modal_box'}>
                    <div>
                        <p className="guest_review_reservation_card_title">1. 만족도를 체크해 주세요</p>
                        <div className="guest_review_star_radio_box">
                            <div>
                                <input onChange={() => changeStar(5)} type={'radio'} name={'review_star'} />
                                아주 좋음 (5점)
                            </div>
                            <div>
                                <input onChange={() => changeStar(4)} type={'radio'} name={'review_star'} />
                                좋음 (4점)
                            </div>
                            <div>
                                <input onChange={() => changeStar(3)} type={'radio'} name={'review_star'} />
                                보통 (3점)
                            </div>
                            <div>
                                <input onChange={() => changeStar(2)} type={'radio'} name={'review_star'} />
                                나쁨 (2점)
                            </div>
                            <div>
                                <input onChange={() => changeStar(1)} type={'radio'} name={'review_star'} />
                                아주 나쁨 (1점)
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="guest_review_reservation_card_title">2. 후기를 200자 내외로 등록 해주세요</p>
                        <textarea id="guest_review_text_input" className="guest_review_text" />
                    </div>
                    <div className="guest_review_button_box">
                        <button className="guest_review_reservation_card_button" onClick={() => submitReview()}>
                            후기 수정하기
                        </button>
                    </div>
                </Box>
            </Modal>
            <div className="guest_review_reservation_card_box">
                {reviews &&
                    reviews.map(review => (
                        <div key={review.id} className="guest_review_reservation_card">
                            <p className="guest_review_reservation_card_title">내가 작성한 후기</p>
                            <div className="row">
                                {/* <div
                                    className="guest_review_reservation_card_img"
                                    style={{ backgroundImage: `url("./img/shelter1-1.jpg")` }}
                                ></div> */}
                                <GuestReviewListImage id={review.homeId} />
                                <div className="guest_review_reservation_card_info">
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">숙소 이름:</div>
                                        <div className="guest_review_reservation_card_info_text">{review.homeName}</div>
                                    </div>
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">작성일:</div>
                                        <div className="guest_review_reservation_card_info_text">
                                            {new Date(
                                                new Date(review.updated).getTime() + 1000 * 3600 * 9,
                                            ).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">별점:</div>
                                        <div className="guest_review_reservation_card_info_text">
                                            {stars(review.star)}
                                        </div>
                                    </div>
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">리뷰:</div>
                                        <div className="guest_review_reservation_card_info_text">{review.review}</div>
                                    </div>
                                    <div className="guest_review_reservation_card_button_box">
                                        <button
                                            className="guest_review_reservation_card_button_delete"
                                            onClick={() => deleteReview(review.id)}
                                        >
                                            후기 삭제하기
                                        </button>
                                        <button
                                            className="guest_review_reservation_card_button"
                                            onClick={() => openReviewModal(review)}
                                        >
                                            후기 수정하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default GuestReivewList;
