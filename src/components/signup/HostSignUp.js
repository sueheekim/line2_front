import React, { useRef, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../_actions/user_action';

function HostSignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState();
    const [userImgs, setUserImgs] = useState('');
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

    const onSubmit = e => {
        e.preventDefault();

        let body ={
            loginName : user.loginName,
            password : user.password,
            userEmail : user.userEmail,
            userImg : userImgs,
            userName : user.userName,
            userPhoneNumber : user.userPhoneNumber,
            host : 1
        }

        if(!body.loginName || !body.password || !body.userEmail || !body.userImg || !body.userName || !body.userPhoneNumber){
            alert('모든 항목에 빈칸이 있으면 가입 될 수 없습니다.')
        } else {
            dispatch(registerUser(body))
            .then(response =>{
                if(response.payload.code === 1){
                    alert('안심 호스트 되기가 완료되었습니다.')
                    navigate('/login');
                } else {
                    alert('가입 실패');
                }
            });
        }
    };

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <div className={'container'}>
                    <h1>안심 서비스의 호스트 되기</h1>
                    <div>
                        <h2>사용하실 아이디를 입력하세요</h2>
                        <TextField
                            required
                            fullWidth
                            helperText="아이디를 입력하세요"
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
                        <h2>성함을 입력하세요</h2>
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
                        <h2>사회 복지시설 인증 사진을 업로드 해주세요</h2>
                        <h3>복지시설 확인의 용도로만 사용 됩니다.</h3>
                        <div className="signup_identity_photo">
                            <div className="signup_identity h4">
                                정부24의 사회복지 시설운영 신고서 혹은
                                <br />
                                쉼터 허가 증명서 등 복지시설을 증명할 수 있는
                                서류를 등록해주세요.
                                <img
                                    alt=""
                                    src={`/img/${userImgs}`}
                                    onClick={() => delImg(userImg)}
                                />
                            </div>
                            <input type="file" id="image" ref={userImg} />
                            <Button variant="contained" onClick={uploadImg}>
                                사진 업로드
                            </Button>
                        </div>
                        <div className="signup_identity_button_area">
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
