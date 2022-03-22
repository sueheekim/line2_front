import React from 'react';
import './Reservation.css'
import Location from "./Location";

function Reservation() {
    return (
        <>
            <div className='header_section'>
                <p className={"reservation_header"}> 숙소 예약하기</p>
            </div>


            <div className={"container"}>
                <p className={"title"}>안심 청소년 쉼터</p>
                <div className={"image_container"}>
                    <div className={"map_container"}>
                        <p className={"map_title"}>위치 지도 보기</p>
                        <Location/>
                    </div>
                    <div className={"home_images_box"}>
                        <img className={"home_images"} src="img/shelter1-1.jpg" alt=""/>
                        <img className={"home_images"} src="img/shelter1-2.jpg" alt=""/>
                        <img className={"home_images"} src="img/shelter1-3.jpg" alt=""/>
                        <img className={"home_images"} src="img/shelter1-4.jpg" alt=""/>
                        <img className={"home_images"} src="img/shelter2-1.jpg" alt=""/>
                        <img className={"home_images"} src="img/shelter2-2.jpg" alt=""/>
                        <img className={"home_images"} src="img/shelter2-3.jpg" alt=""/>
                        <img className={"home_images"} src="img/shelter2-4.jpg" alt=""/>
                    </div>
                    <div className={"home_image_box"}>
                        <img className={"home_image"} src="img/shelter2-1.jpg" alt=""/>
                    </div>
                </div>

                <p className={"title"}>쉼터 설명</p>
                <div className={"contents_container"}>
                    <p className={"home_information"}>어쩌구 저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터어쩌구
                        저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터어쩌구 저쩌꾸 쉼터</p>
                </div>

                <p className={"title"}>예약 가능 여부</p>
                <div className={"contents_container"}>
                    <div className={"row"}>
                        <div>
                            <p className={"reservation_content_1"}>체크인 날짜</p>
                            <p className={"reservation_content_2"}>2022년 3월 22일 (화)</p>
                            <p className={"reservation_content_3"}>15:00 ~ 00:00</p>
                        </div>
                        <div>
                            <p className={"reservation_content_1"}>체크아웃 날짜</p>
                            <p className={"reservation_content_2"}>2022년 3월 22일 (화)</p>
                            <p className={"reservation_content_3"}>15:00 ~ 00:00</p>
                        </div>
                        <div>
                            <p className={"reservation_content_1"}>인원</p>
                            <p className={"reservation_content_2"}>청소년 1명</p>
                        </div>
                        <button className={"reservation_change_button"}>검색 변경</button>
                    </div>

                    <table className={"reservation_table"}>
                        <thead>
                        <tr>
                            <th className={"table_room_name"}>객실 이름</th>
                            <th className={"table_room_gender"}>입실 가능 성별</th>
                            <th className={"table_room_max_head_count"}>정원</th>
                            <th className={"table_room_available"}>남은 자리</th>
                            <th className={"table_room_button"}>예약</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>객실 1</td>
                            <td>남</td>
                            <td>5</td>
                            <td>2</td>
                            <td><button className={"reservation_room_button"}>예약 하기</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Reservation;