import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {loginUser} from '../../_actions/user_action'

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');

        
    const Toast = Swal.mixin({
        toast: true,
        position: 'center-center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const onSubmit =(e) =>{
        e.preventDefault();

        let body ={
            loginName : loginName,
            password : password 
        }

        dispatch(loginUser(body))
        .then(res =>{
            if(res.payload){
                Toast.fire({
                    icon: 'success',
                    title: '로그인 성공'
                  })
                navigate('/');
            } else {
                Toast.fire({
                    icon: 'error',
                    title: '로그인 실패'
                  })
            }
        })

    }

  return (
      <div className='login-container' >
        <div className='login-box'>
            <h2>Login</h2>
            <form 
                onSubmit={onSubmit}
            >
                <div className='user-box'>
                    <input type='loginName' value={loginName} onChange={(e)=>setLoginName(e.target.value)} required/>
                    <label>LoginName</label>
                </div>
                <div className='user-box'>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <label>password</label>
                </div>
                <br/>
                    <button type='submit' className='btn-hover'>
                        Login
                    </button>
            </form>
        </div>
    </div>
  )

}

export default LoginPage