import React, { useRef, useState } from 'react';
import {
    FormControl,
    TextField,
    Button,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {registerUser} from '../../_actions/user_action'
import Swal from 'sweetalert2';

function GuestSignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userImgs, setUserImgs] = useState('');
    const [user, setUser] = useState();
    const userImg = useRef();

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const uploadImg = () => {
        setUserImgs(...userImgs,userImg.current.value.substr('C:\\fakepath\\'.length))
    };

    const delImg = item => {
        if (window.confirm('사진을 삭제하시겠습니까?')) {
            setUserImgs(null);
        }
    };

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const onSubmit = e => {
        e.preventDefault();

        let body ={
            loginName : user.loginName,
            password : user.password,
            userEmail : user.userEmail,
            userGender : user.userGender,
            userImg : userImgs,
            userName : user.userName,
            userPhoneNumber : user.userPhoneNumber,
            host : 0
        }

        if(!body.loginName || !body.password || !body.userEmail || !body.userGender || !body.userImg || !body.userName || !body.userPhoneNumber){
            Toast.fire({
                icon: 'error',
                title: '모든 항목에 빈칸이 있으면 안됩니다.'
              })
        } else {
            dispatch(registerUser(body))
            .then(response =>{
                if(response.payload.code === 1){
                    Toast.fire({
                        icon: 'success',
                        title: '안심 게스트 되기 성공!'
                      })
                    navigate('/login');
                } else {
                    Toast.fire({
                        icon: 'error',
                        title: '회원가입 실패'
                      })
                }
            })
        }
    };

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <div className={'container'}>
                    <h1>안심 서비스의 게스트 되기</h1>
                    <div>
                        <h2>사용하실 아이디를 입력하세요</h2>
                        <TextField
                            required
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
                            required
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
                            required
                            fullWidth
                            label="이름"
                            id="outlined-multiline-flexible"
                            placeholder="예)김미영"
                            multiline
                            maxRows={4}
                            name="userName"
                            onChange={handleChange}
                        />
                        <h2>성별을 선택하세요</h2>
                        <FormControl sx={{ m: 2, minWidth: 700 }}>
                            <InputLabel>성별</InputLabel>
                            <Select name="userGender" onChange={handleChange}>
                                <MenuItem value={0}>여</MenuItem>
                                <MenuItem value={1}>남</MenuItem>
                            </Select>
                        </FormControl>
                        <h2>핸드폰 번호를 입력하세요</h2>
                        <TextField
                            required
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
                            required
                            fullWidth
                            label="이메일 주소"
                            id="outlined-multiline-flexible"
                            placeholder="예)abced@gmail.com"
                            multiline
                            maxRows={4}
                            name="userEmail"
                            onChange={handleChange}
                        />

                        <h2>본인 인증 사진을 업로드 해주세요</h2>
                        <h3>
                            쉼터 체크인 시 본인 확인의 용도로만 사용 됩니다.
                        </h3>
                        <div className="signup_identity_photo">
                            <div className="signup_identity h4">
                                본인임을 증명할 수 있는 신분증 사진을
                                등록해주세요
                                <br />
                                예) 학생증, 청소년증, 민증, 운전면허증 등등
                            </div>
                                <img
                                    alt=""
                                    src={`/img/${userImgs}`}
                                    onClick={() => delImg(userImg)}
                                />
                            <input type="file" id="image" ref={userImg} />
                            <Button variant="contained" onClick={uploadImg}>
                                사진 업로드
                            </Button>
                        </div>
                        <div className="signup_identity_button_area">
                            <Button variant="contained" type="submit">
                                게스트 등록하기
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default GuestSignUp;
