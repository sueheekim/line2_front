import React, { useState } from 'react';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    TextField,
    Button,
} from '@mui/material';
import './GuestSignUp.css';
import axios from "axios";

function GuestSignUp() {

    const addUserUrl = "/v1/user";

    const [user, setUser] = useState({
        loginName: '',
        password: '',
        userName: '',
        userGender: '',
        userPhoneNumber: '',
        userEmail: '',
        userImg: '',
    });

    const handleChange = event => {
        setUser(event.target.user);
    };

    const onSubmit = (e) =>{
        axios.post(addUserUrl).then(
            alert("등록 완료 되었습니다."),
            console.log("등록완료")

        )
    }

    return (
        <form onSubmit={onSubmit}>
            <div className={'container'}>
                <h1>안심 서비스의 게스트 되기</h1>
                <div>
                    <h2>사용하실 아이디를 입력하세요</h2>
                    <TextField
                        fullWidth
                        label="loginName"
                        id="outlined-multiline-flexible"
                        placeholder="영문+숫자 조합 최소 8자리"
                        maxRows={4}
                        user={user}
                        onChange={handleChange}
                    />
                    <h2>사용하실 비밀번호를 입력하세요</h2>
                    <TextField
                        fullWidth
                        label="password"
                        id="outlined-password-input"
                        placeholder="영문+숫자 조합 최소 8자리"
                        type="password"
                        autoComplete="current-password"
                        user={user}
                        onChange={handleChange}
                    />
                    <h2>성함을 입력하세요(신분증과 일치해야 합니다.)</h2>
                    <TextField
                        fullWidth
                        label="userName"
                        id="outlined-multiline-flexible"
                        placeholder="예)김미영"
                        multiline
                        maxRows={4}
                        user={user}
                        onChange={handleChange}
                    />
                    <h2>성별을 선택하세요</h2>
                    <FormControl>
                        <RadioGroup row>
                            <FormControlLabel
                                user={user}
                                control={<Radio />}
                                label="여자"
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                user={user}
                                control={<Radio />}
                                label="남자"
                                onChange={handleChange}
                            />
                        </RadioGroup>
                    </FormControl>
                    <h2>핸드폰 번호를 입력하세요</h2>
                    <TextField
                        fullWidth
                        label="userPhoneNumber"
                        id="outlined-multiline-flexible"
                        placeholder="예)000-0000-0000"
                        multiline
                        maxRows={4}
                        user={user}
                        onChange={handleChange}
                    />
                    <h2>이메일 주소를 입력하세요</h2>
                    <TextField
                        fullWidth
                        label="userEmail"
                        id="outlined-multiline-flexible"
                        placeholder="예)abced@gmail.com"
                        multiline
                        maxRows={4}
                        user={user}
                        onChange={handleChange}
                    />

                    <h2>본인 인증 사진을 업로드 해주세요</h2>
                    <h3>쉼터 체크인 시 본인 확인의 용도로만 사용 됩니다.</h3>
                    <div className="guest_identity_photo">
                        <div className="guest_identity_h4">
                            본인임을 증명 할 수 있는 신분증 사진을 업로드
                            해주세요
                            <br />
                            예) 학생증, 청소년증, 민증, 운전면허증 등등
                        </div>
                        <input type="file" id="userImg" />
                        <Button variant="contained">사진 업로드</Button>
                    </div>
                    <div className="guest_identity_button">
                    <Button variant="outlined">게스트 등록하기</Button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default GuestSignUp;
