import React, { useEffect } from 'react';

const { Kakao } = window;

function Test() {
	useEffect(() => {
		if (!Kakao.isInitialized()) {
			window.Kakao.init("62cc949dd296cc93151d7071f69863c6");
		}
	})

	function sendTo() {
		Kakao.Auth.login({
			scope: 'TALK_MESSAGE',
			success: function () {
				Kakao.API.request({
					url: '/v2/api/talk/memo/default/send',
					data: {
						template_object: {
							object_type: 'text',
							text:
								'테스트',
							link: {
								mobile_web_url: 'https://developers.kakao.com',
								web_url: 'https://developers.kakao.com',
							},
						},
					}
				})
			}
		})
	}


	return (
		<a id="send-to-btn" href="#" onClick={() => sendTo()}>
			<img src="//k.kakaocdn.net/14/dn/btqc6xrxbuT/7VJk7YSWITkz9K9pbXEffk/o.jpg" alt="나에게 보내기 버튼" />
		</a>
	);
}

export default Test;