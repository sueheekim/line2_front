import React, { useState } from 'react'

function HostReservationCancelModal(props) {
    const { open, close} = props;
    const {cancelCheck, setCancelCheck} = useState('');

    const handleChange =(e)=>{
        setCancelCheck(e.target.value);
        console.log(cancelCheck)
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                    </header>
                    <main>
                        <p style={{color:'red'}}>정말로 예약을 거절 하시겠습니까?</p>
                        <p>예약을 거절하시는 이유를 선택하시면 게스트에게 메세지가 전달됩니다.</p>
                        <div className={"cancelCheck"} >
                            <div>
                                <input type={"radio"} name={"cancelCheck"} />
                                <span>전염병(예: 코로나 19) 발생으로 인해 예약을 받을 수 없습니다.</span>
                            </div>
                            <div>
                                <input type={"radio"} name={"cancelCheck"} />
                                <span>자연재해로 인해 건물 수리와 객실 내부 수리 중에 있습니다.</span>
                            </div>
                            <div>
                                <input type={"radio"} name={"cancelCheck"} />
                                <span>보호 센터에서 본인 확인이 먼저 완료된 게스트가 입실하였습니다.</span>
                            </div>
                            <div>
                                <input type={"radio"} name={"cancelCheck"} />
                                <span>해당 갤실의 입실 가능 성별이 변경 되었습니다.</span>
                            </div>
                            <div>
                                <input type={"radio"} name={"cancelCheck"} />
                                <span>게스트의 행동에 대한 우려 사항이 있습니다.</span>
                            </div>
                            <div>
                                <input type={"radio"} onChange={handleChange} value={cancelCheck} />
                                <span>기타</span>
                                <textarea placeholder="500자 내외로 간단하게 작성"></textarea>
                            </div>
                        </div>
                        
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                        거절 완료
                        </button>
                    </footer>
                </section>
        ) : null}
        </div>
    );
};


export default HostReservationCancelModal