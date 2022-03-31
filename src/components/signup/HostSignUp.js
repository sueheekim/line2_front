import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './HostSignUp.css';
import axios from 'axios';

function HostSignUp() {
    const signUpUserUrl = 'book/v1/user';
    // const signUpUserUrl = "http://localhost:8080/book/v1/user";

    const [user, setUser] = useState();

    const handleChange = e => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmit = e => {
        axios
            .post(signUpUserUrl, {
                ...user,
            })
            .then(
                alert('안심 서비스의 호스트 되기가 완료 되었습니다.'),
                console.log('호스트 되기 완료'),
            );
    };

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <div className={'container'}>
                    <h1>안심 서비스의 호스트 되기</h1>
                    <div>
                        <h2>사용하실 아이디를 입력하세요</h2>
                        <TextField
                            fullWidth
                            label="아이디"
                            id="outlined-multiline-flexible"
                            placeholder="영문+숫자 조합 최소 8자리"
                            maxRows={4}
                            name="loginName"
                            onChange={handleChange}
                        />
                        <h2>사용하실 비밀번호를 입력하세요</h2>
                        <TextField
                            fullWidth
                            label="비밀번호"
                            id="outlined-password-input"
                            placeholder="영문+숫자 조합 최소 8자리"
                            type="password"
                            autoComplete="current-password"
                            name="password"
                            onChange={handleChange}
                        />
                        <h2>성함을 입력하세요(신분증과 일치해야 합니다.)</h2>
                        <TextField
                            fullWidth
                            label="이름"
                            id="outlined-multiline-flexible"
                            placeholder="예)김미영"
                            multiline
                            maxRows={4}
                            name="userName"
                            onChange={handleChange}
                        />
                        <h2>핸드폰 번호를 입력하세요</h2>
                        <TextField
                            fullWidth
                            label="핸드폰 번호"
                            id="outlined-multiline-flexible"
                            placeholder="예)000-0000-0000"
                            multiline
                            maxRows={4}
                            name="userPhoneNumber"
                            onChange={handleChange}
                        />
                        <h2>이메일 주소를 입력하세요</h2>
                        <TextField
                            fullWidth
                            label="이메일 주소"
                            id="outlined-multiline-flexible"
                            placeholder="예)abced@gmail.com"
                            multiline
                            maxRows={4}
                            name="userEmail"
                            onChange={handleChange}
                        />
                        <h2>사회 복지시설 인증 사진을 업로드 해주세요</h2>
                        <h3>복지시설 확인의 용도로만 사용 됩니다.</h3>
                        <div className="host_identity_photo">
                            <div className="host_identity_h4">
                                정부24의 사회복지 시설운영 신고서 혹은
                                <br />
                                쉼터 허가 증명서 등 복지시설을 증명할 수 있는
                                서류를 등록해주세요.
                            </div>
                            <input type="file" id="userImg" />
                        </div>
                        <div className="host_identity_button_area">
                            <Button variant="contained" type="submit">
                                호스트 등록하기
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default HostSignUp;
