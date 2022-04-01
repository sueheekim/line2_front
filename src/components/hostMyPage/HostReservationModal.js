import React from 'react';
import './HostReservationModal.css';

function HostReservationModal(props) {
    const { open, close, cancel, setCheckInMessage} = props;


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
                        <p>게스트가 본인임을 확인했습니다</p>
                        <p>게스트가 객실에 입실 완료 했습니다.</p>
                        <p>게스트 특이사항</p>
                        <textarea placeholder="500자 내외로 간단하게 작성" onChange={({target : {value}})=>setCheckInMessage(value)}></textarea>
                    </main>
                    <footer>
                        <button className="close" onClick={close} >
                        체크인 하기
                        </button>
                    </footer>
                </section>
        ) : null}
        </div>
    );
};

export default HostReservationModal