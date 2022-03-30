import React from 'react';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    TextField,
} from '@mui/material';

function GuestSignUp() {
    const [value, setValue] = React.useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <>
            <p>게스트 회원가입</p>
            <div className={'container'}>
                <div>
                    <h2>사용하실 아이디를 입력하세요</h2>
                    <TextField
                        fullWidth
                        label="loginName"
                        id="outlined-multiline-flexible"
                        placeholder="영문+숫자 조합 최소 8자리"
                        maxRows={4}
                        value={value}
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
                        value={value}
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
                        value={value}
                        onChange={handleChange}
                    />
                     <h2>성별을 선택하세요</h2>
                    <FormControl>
                        <RadioGroup row>
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="여자"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="남자"
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
                        value={value}
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
                        value={value}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
}

export default GuestSignUp;
