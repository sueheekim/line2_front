import React,{useState} from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function GuestChangeDateModal(props) {
    const { open, close, cancel,reservation} = props;
    const now = new Date(Date.now());
    const [checkIn, setCheckIn] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()));
    const [checkOut, setCheckOut] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, now.getHours()));


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
                        <p>날짜변경</p>
                        <div>
                            <div>
                                <p> 체크인:</p>
                            </div>
                        </div>

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

export default GuestChangeDateModal