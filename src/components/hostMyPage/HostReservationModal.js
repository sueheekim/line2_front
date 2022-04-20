import React from 'react';

function HostReservationModal(props) {
    const { open, close, cancel, setCheckInMessage } = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'} style={{width:'100vh'}}>
            {open ? (
                <section>
                    <header>
                        <button className="close" onClick={cancel}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <p>게스트가 본인임을 확인했습니다</p>
                        <p>게스트가 숙소에 입소 완료 했습니다.</p>
                        <p>게스트 특이사항</p>
                        <textarea
                            placeholder="250자 내외로 간단하게 작성"
                            style={{ width: '500px', height: '200px' }}
                            onChange={({ target: { value } }) =>
                                setCheckInMessage(value)
                            }
                        ></textarea>
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                            입소 하기
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default HostReservationModal;
