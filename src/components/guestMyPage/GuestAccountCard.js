import React from 'react';

function GuestAccountCard({ GuestAccount }) {
    let guestGender;
    if (GuestAccount.userGender) {
        guestGender = '남자';
    } else {
        guestGender = '여자';
    }
    return (
        // 아이디 : {GuestAccount.loginName}
        // 비밀번호 : {GuestAccount.password}
        // 이름 : {GuestAccount.userName}
        // 연락처 : {GuestAccount.userPhoneNumber}
        // 성별 : {guestGender}
        // e-mail : {GuestAccount.userEmail}
        // 신분증명 : <img src={`img/${GuestAccount.userImg}`} alt="" />
        <div className="guest_account_box">
            <div className="guest_account_title">내 계정 정보</div>
            <div className="guest_account_row">
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
                        <div className="guest_review_reservation_card_info_text">{GuestAccount.userEmail}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestAccountCard;
