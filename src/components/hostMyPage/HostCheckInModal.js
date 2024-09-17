import React from 'react';

function HostCheckInModal(props) {
    const { open, close, cancel, setCheckOutMessage } = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section style={{ width: '500px' }}>
                    <header>
                        <button className="close" onClick={cancel}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <p>
                            퇴소 하기를 하면 게스트가 퇴실하여 공실이
                            생깁니다.
                        </p>
                        <p>퇴소시 특이사항을 입력하세요</p>
                        <textarea
                            placeholder="250자 내외로 간단하게 작성"
                            style={{ width: '450px', height: '100px' }}
                            onChange={({ target: { value } }) =>
                                setCheckOutMessage(value)
                            }
                        ></textarea>
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                            퇴소 하기
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default HostCheckInModal;
