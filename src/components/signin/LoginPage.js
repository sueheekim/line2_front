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
    <div style={{
        display : 'flex', justifyContent:'center', alignItems: 'center',
        width:'100%', height:'100vh'
    }}>
        <form style={{display :'flex', flexDirection:'column'}}
            onSubmit={onSubmit}
        >
            <label>LoginName</label>
            <input type='loginName' value={loginName} onChange={(e)=>setLoginName(e.target.value)}/>
            <label>password</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button type='submit'>
                Login
            </button>
        </form>
    </div>
  )
}

export default LoginPage