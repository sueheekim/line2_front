import React from 'react';
import { TextField } from '@mui/material';

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
                    <TextField
                        fullWidth
                        label="loginName"
                        id="outlined-multiline-flexible"
                        placeholder="영문+숫자 조합 최소 8자리"
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                    />
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
