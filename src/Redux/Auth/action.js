import { AUTH_REQUEST, AUTH_REQUEST_FAILURE, AUTH_GET_REQUEST_SUCCESS } from "./actionTypes"
import axios from 'axios';
export const authRequestAction = () => {
    return { type: AUTH_REQUEST }
}

export const authRequestSuccessAction = (payload) => {
    return { type: AUTH_GET_REQUEST_SUCCESS, payload }
}
export const authRequestFailureAction = (payload) => {
    return { type: AUTH_REQUEST_FAILURE, payload }
}


export const loginRequest = (loginData) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:4000/api/user/login", loginData);
        dispatch(authRequestSuccessAction(res.data.token))
        // console.log(res.data)
    } catch (error) {
        dispatch(authRequestFailureAction(error.response?.data?.msg || "Login failed"));
        throw error;
    }
}







