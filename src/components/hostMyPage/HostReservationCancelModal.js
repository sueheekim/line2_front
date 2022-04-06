import React, { useState } from 'react';

function HostReservationCancelModal(props) {
    const { open, close, cancel, setDenyMessage, denymessage } = props;

    const handleChange = e => {
        setDenyMessage(e.target.value);
    };

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
                        <p style={{ color: 'red' }}>
                            정말로 예약을 거절 하시겠습니까?
                        </p>
                        <p>
                            예약을 거절하시는 이유를 선택하시면 게스트에게
                            메세지가 전달됩니다.
                        </p>
                        <div className={'cancelCheck'}>
                            <div>
                                <input
                                    type={'radio'}
                                    name={'cancelCheck'}
                                    value={1}
                                    onChange={handleChange}
                                />
                                <span>
                                    전염병(예: 코로나 19) 발생으로 인해 예약을
                                    받을 수 없습니다.
                                </span>
                            </div>
                            <div>
                                <input
                                    type={'radio'}
                                    name={'cancelCheck'}
                                    value={2}
                                    onChange={handleChange}
                                />
                                <span>
                                    자연재해로 인해 건물 수리와 객실 내부 수리
                                    중에 있습니다.
                                </span>
                            </div>
                            <div>
                                <input
                                    type={'radio'}
                                    name={'cancelCheck'}
                                    value={3}
                                    onChange={handleChange}
                                />
                                <span>
                                    보호 센터에서 본인 확인이 먼저 완료된
                                    게스트가 입실하였습니다.
                                </span>
                            </div>
                            <div>
                                <input
                                    type={'radio'}
                                    name={'cancelCheck'}
                                    value={4}
                                    onChange={handleChange}
                                />
                                <span>
                                    해당 갤실의 입실 가능 성별이 변경
                                    되었습니다.
                                </span>
                            </div>
                            <div>
                                <input
                                    type={'radio'}
                                    name={'cancelCheck'}
                                    value={5}
                                    onChange={handleChange}
                                />
                                <span>
                                    게스트의 행동에 대한 우려 사항이 있습니다.
                                </span>
                            </div>
                            <div>
                                <input type={'radio'} name={'cancelCheck'} />
                                <span>기타</span>
                            </div>
                            <textarea
                                onChange={handleChange}
                                value={denymessage}
                                style={{ width: '450px', height: '100px' }}
                                placeholder="기타를 선택하신 이유를 200자 내외로 간단하게 작성 부탁드립니다."
                            ></textarea>
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
}

export default HostReservationCancelModal;
