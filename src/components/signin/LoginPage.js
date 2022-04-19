import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../../_actions/user_action'

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =(e) =>{
        e.preventDefault();

        let body ={
            loginName : loginName,
            password : password 
        }

        dispatch(loginUser(body))
        .then(res =>{
            if(res.payload){
                navigate('/');
            } else {
                alert('Error');
            }
        })

    }

  return (
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
  )

}

export default LoginPage