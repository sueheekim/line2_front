import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import { Box, Modal } from '@mui/material';

function GuestReviewReservationList() {
    const checkOutListUserUrl = '/book/v1/reservation/user/after_check_out/';
    const reviewUrl = '/community/v1/review';
    const userReviewUrl = '/community/v1/review/user/';

    const [checkOutReservations, setCheckOutReservations] = useState([]);
    const [reservation, setReservation] = useState([]);
    const [userReviews, setUserReviews] = useState([]);
    const [reviewModal, setReviewModal] = useState(false);
    const [star, setStar] = useState(0);

    const user = useSelector(selectUser);

    useEffect(() => {
        axios
            .get(userReviewUrl + user.id)
            .then(res => {
                setUserReviews(res.data);
                return res.data;
            })
            .then(reviews => {
                axios.get(checkOutListUserUrl + user.id).then(res => {
                    setCheckOutReservations(res.data);
                    res.data.map(reservation => {
                        if (reviews.filter(review => review.reservationId === reservation.id).length > 0) {
                            document.getElementById(
                                `guest_review_reservation_card_button${reservation.id}`,
                            ).style.display = 'none';
                        }
                    });
                });
            });
    }, []);

    const openReviewModal = checkOutReservation => {
        setReviewModal(true);
        setReservation(checkOutReservation);
    };

    const closeReviewModal = () => {
        setReviewModal(false);
        setStar(0);
    };

    const changeStar = star => {
        setStar(star);
    };

    const submitReview = () => {
        if (star === 0) {
            alert('점수를 선택해주세요');
        } else if (document.getElementById('guest_review_text_input').value === '') {
            alert('후기 내용을 입력해주세요');
        } else {
            axios
                .post(reviewUrl, {
                    review: document.getElementById('guest_review_text_input').value,
                    star: star,
                    homeName: reservation.home.homeName,
                    homeId: reservation.home.id,
                    userId: user.id,
                    reservationId: reservation.id,
                })
                .then(res => {
                    if (res.data.code === 1) {
                        alert('리뷰가 등록되었습니다.');
                        setReviewModal(false);
                        document.getElementById(`guest_review_reservation_card_button${reservation.id}`).style.display =
                            'none';
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
                            후기 등록하기
                        </button>
                    </div>
                </Box>
            </Modal>
            <div className="guest_review_reservation_card_box">
                {checkOutReservations &&
                    checkOutReservations.map(checkOutReservation => (
                        <div key={checkOutReservation.id} className="guest_review_reservation_card">
                            <div className="justify-content-space-between">
                                <div
                                    className="guest_review_reservation_card_img"
                                    style={{ backgroundImage: `url("./img/${checkOutReservation.homeImage}")` }}
                                ></div>
                                <div className="guest_review_reservation_card_info">
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">숙소 이름:</div>
                                        <div className="guest_review_reservation_card_info_text">
                                            {checkOutReservation.home.homeName}
                                        </div>
                                    </div>
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">객실 이름:</div>
                                        <div className="guest_review_reservation_card_info_text">
                                            {checkOutReservation.room.roomName}
                                        </div>
                                    </div>
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">숙소 주소:</div>
                                        <div className="guest_review_reservation_card_info_text">
                                            {checkOutReservation.home.homeAddress}
                                        </div>
                                    </div>
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">입소일:</div>
                                        <div className="guest_review_reservation_card_info_text">
                                            {new Date(checkOutReservation.checkIn).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="justify-content-space-between">
                                        <div className="guest_review_reservation_card_info_title">퇴소일:</div>
                                        <div className="guest_review_reservation_card_info_text">
                                            {new Date(checkOutReservation.checkOut).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="guest_review_reservation_card_button_box">
                                        <button
                                            id={`guest_review_reservation_card_button${checkOutReservation.id}`}
                                            className="guest_review_reservation_card_button"
                                            onClick={() => openReviewModal(checkOutReservation)}
                                        >
                                            후기 등록하기
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

export default GuestReviewReservationList;
