import React, { useState } from "react";

function GuestReservationCancelModal(props) {
    const { open, close, cancel, setCancelMessage, cancelmessage} = props;



    const handleChange =(e)=>{
        setCancelMessage(e.target.value);
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <button className="close" onClick={cancel}>
                        &times;
                        </button>
                    </header>
                    <main>
                        <p style={{color:'red'}}>정말로 예약을 취소 하시겠습니까?</p>
                        <p>예약을 취소하시면 해당 숙소의 모든 예약 정보가 사라집니다. <br/> 취소 이유를 선택하시면 호스트에게 메세지가 전달됩니다.</p>
                        <div className={"cancelCheck"} >
                            <div>
                                <input 
                                type={"radio"} 
                                name={"cancelCheck"} 
                                value={1}
                                onChange={handleChange}
                                />
                                <span>개인사정으로 인한 취소</span>
                            </div>
                            <div>
                                <input 
                                type={"radio"} 
                                name={"cancelCheck"} 
                                value={2}
                                onChange={handleChange}/>
                                <span>현재 위치와 가까운 곳의 다른 대체 숙소 찾음</span>
                            </div>
                            <div>
                                <input 
                                type={"radio"} 
                                name={"cancelCheck"}
                                value={3}
                                onChange={handleChange}/>
                                <span>같은 날짜에 중복 예약</span>
                            </div>
                            <div>
                                <input 
                                type={"radio"} 
                                name={"cancelCheck"} 
                                value={4}
                                onChange={handleChange}
                                />
                                <span>필요한 사항이 변경됨</span>
                            </div>
                            <div>
                                <input type={"radio"} name={"cancelCheck"} />
                                <span>기타</span>
                                <textarea  
                                onChange={handleChange} 
                                value={cancelmessage}
                                placeholder="250자 내외로 간단하게 작성" ></textarea>
                            </div>
                        </div>
                        
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                        취소 완료
                        </button>
                    </footer>
                </section>
        ) : null}
        </div>
    );
};

export default GuestReservationCancelModal;