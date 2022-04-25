import React from 'react';

function GuestAccountCard({ GuestAccount }) {
    let guestGender;
    if (GuestAccount.userGender) {
        guestGender = '남자';
    } else {
        guestGender = '여자';
    }
    return (
        <div className="guest_account_box">
            <div className="justify-content-space-between">
                <div
                    className="guest_account_img"
                    style={{ backgroundImage: `url("./img/${GuestAccount.userImg}")` }}
                ></div>
                <div className="guest_account_info">
                    <div className="justify-content-space-between">
                        <div className="guest_review_reservation_card_info_title">아이디:</div>
                        <div className="guest_review_reservation_card_info_text">{GuestAccount.loginName}</div>
                    </div>
                    <div className="justify-content-space-between">
                        <div className="guest_review_reservation_card_info_title">이름:</div>
                        <div className="guest_review_reservation_card_info_text">{GuestAccount.userName}</div>
                    </div>
                    <div className="justify-content-space-between">
                        <div className="guest_review_reservation_card_info_title">연락처:</div>
                        <div className="guest_review_reservation_card_info_text">{GuestAccount.userPhoneNumber}</div>
                    </div>
                    <div className="justify-content-space-between">
                        <div className="guest_review_reservation_card_info_title">성별:</div>
                        <div className="guest_review_reservation_card_info_text">{guestGender}</div>
                    </div>
                    <div className="justify-content-space-between">
                        <div className="guest_review_reservation_card_info_title">e-mail:</div>
                        <div className="guest_review_reservation_card_info_text">{GuestAccount.userEmail}</div>
                    </div>
                    <div className="justify-content-space-between">
                        <div className="guest_review_reservation_card_info_title">가입날짜:</div>
                        <div className="guest_review_reservation_card_info_text">{new Date(GuestAccount.created).toLocaleDateString()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestAccountCard;
