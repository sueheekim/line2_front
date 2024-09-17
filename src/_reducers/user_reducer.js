import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
} from '../_actions/types'

export default function (state={}, action) {
    switch(action.type){
        case LOGIN_USER:
            return {...state, user : action.payload}
            break;
        case REGISTER_USER:
            return {...state, register: action.payload}
            break;
        case LOGOUT_USER:
            return {...state = null}
            break;
        default:
            return state;
    }
}






