import React from 'react'
import './HostCheckInModal.css';

function HostCheckInModal(props) {

    const { open, close , cancel, setCheckOutMessage} = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section style={{width: '500px'}}>
                    <header>
                        <button className="close" onClick={cancel}>
                        &times;
                        </button>
                    </header>
                    <main>
                        <p>체크 아웃 하기를 하면 게스트가 퇴실하여 공실이 생깁니다.</p>
                        <textarea 
                        placeholder="500자 내외로 간단하게 작성" 
                        style={{width : '450px', height:'100px'}}
                        onChange={({target : {value}})=>setCheckOutMessage(value)}
                        ></textarea>
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                        체크아웃 하기
                        </button>
                    </footer>
                </section>
        ) : null}
        </div>
    );
};

export default HostCheckInModal