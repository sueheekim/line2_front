import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
} from './types'

export function loginUser(dataTosubmit){
    
    const request = axios.post('/user/v1/user/login',dataTosubmit )
    .then(res =>res.data)
    

    return {
        type: LOGIN_USER,
        payload : request
    }
}

export function registerUser(dataTosubmit){
    
    const request = axios.post('/user/v1/user',dataTosubmit )
    .then(res =>res.data)
    console.log();

    return {
        type: REGISTER_USER, 
        payload : request
    }
}


export function logoutUser(){

    return {
        type: LOGOUT_USER,
    }
}



