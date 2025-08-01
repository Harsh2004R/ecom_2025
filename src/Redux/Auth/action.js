import { AUTH_GET_REQUEST, AUTH_REQUEST_FAILURE, AUTH_GET_REQUEST_SUCCESS } from "./actionTypes"

export const authRequestAction = () => {
    return { type: AUTH_GET_REQUEST }
}

export const authRequestSuccessAction = (payload) => {
    return { type: AUTH_GET_REQUEST_SUCCESS, payload }
}
export const authRequestFailureAction = (payload) => {
    return { type: AUTH_REQUEST_FAILURE, payload }
}









