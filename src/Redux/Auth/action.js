import { AUTH_REQUEST, AUTH_REQUEST_FAILURE, AUTH_GET_REQUEST_SUCCESS, REGISTER_SUCCESS_REQUEST } from "./actionTypes"
import { BASE_URL } from "@/URL/base_url";
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
export const registerSuccessAction = (payload) => {
    return { type: REGISTER_SUCCESS_REQUEST, payload }
}


export const loginRequest = (loginData) => async (dispatch) => {
    try {
        const res = await axios.post(`${BASE_URL}api/user/login`, loginData);
        dispatch(authRequestSuccessAction(res.data.token))
        // console.log(res.data)
    } catch (error) {
        dispatch(authRequestFailureAction(error.response?.data?.msg || "Login failed"));
        throw error;
    }
}


export const signupRequest = (signupData) => async (dispatch) => {
    try {
        const res = await axios.post(`${BASE_URL}/api/user/register`, signupData);
        dispatch(authRequestSuccessAction(res.data.userID))
        console.log(res.data.userID)
    } catch (error) {
        dispatch(authRequestFailureAction(error.response?.data?.msg || "Signup failed"));
        throw error;
    }
}






