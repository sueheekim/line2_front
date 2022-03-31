import React from 'react';
import { TextField } from '@mui/material';

function HostSignUp() {
    return (
        <>
            <form>
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
                        />
                    </div>
                </div>
            </form>
        </>
    );
}

export default HostSignUp;
