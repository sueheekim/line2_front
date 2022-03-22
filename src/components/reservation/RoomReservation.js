import React from 'react';

function RoomReservation(props) {
    return (
        <>
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
                    {props.rooms && props.rooms.map(room => (
                        <tr>
                            <td>{room.roomName}</td>
                            <td>{room.gender}</td>
                            <td>{room.maxHeadCount}</td>
                            <td>{room.maxHeadCount}</td>
                            <td>
                                <button className={"reservation_room_button"}>예약 하기</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RoomReservation;