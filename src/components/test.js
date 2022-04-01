import React, { useEffect } from 'react';
import axios from 'axios';

const { Kakao } = window;

function Test() {
    useEffect(() => {
        if (!Kakao.isInitialized()) {
            window.Kakao.init('62cc949dd296cc93151d7071f69863c6');
        }
    });

    function sendTo() {
        Kakao.Auth.login({
            scope: 'TALK_MESSAGE',
            success: function () {
                Kakao.API.request({
                    url: '/v2/api/talk/memo/default/send',
                    data: {
                        template_object: {
                            object_type: 'text',
                            text: '테스트',
                            link: {
                                mobile_web_url: 'https://developers.kakao.com',
                                web_url: 'https://developers.kakao.com',
                            },
                        },
                    },
                });
            },
        });
    }

    const test = () => {
        axios
            .put('/book/v1/reservation/accept_check_out', {
                reservationId: 1,
                message: '테스트',
            })
            .then(res => {
                console.log(res.data);
            })
            .then(() => {
                axios.get('/book/v1/reservation/1').then(res => {
                    console.log(res.data);
                });
            });
    };

    return (
        <>
            <a id="send-to-btn" href="#" onClick={() => sendTo()}>
                <img
                    src="//k.kakaocdn.net/14/dn/btqc6xrxbuT/7VJk7YSWITkz9K9pbXEffk/o.jpg"
                    alt="나에게 보내기 버튼"
                />
            </a>
            <button onClick={() => test()}>test</button>
        </>
    );
}

export default Test;
