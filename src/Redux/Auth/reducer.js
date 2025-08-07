import { AUTH_REQUEST, AUTH_REQUEST_FAILURE, AUTH_GET_REQUEST_SUCCESS, REGISTER_SUCCESS_REQUEST, LOGOUT } from "./actionTypes"
const tokenFromStorage = localStorage.getItem("auth-token");
const initAuthState = {
    isAuth: !!tokenFromStorage,
    token: tokenFromStorage || "",
    isLoading: false,
    errorMessage: null,
    userID: null,
}
export const reducer = (state = initAuthState, { type, payload }) => {
    switch (type) {

        case AUTH_REQUEST: return { ...state, isLoading: true }
        case AUTH_GET_REQUEST_SUCCESS: return { ...state, isLoading: false, token: payload, isAuth: true }
        case AUTH_REQUEST_FAILURE: return { ...state, isLoading: false, errorMessage: payload }
        case REGISTER_SUCCESS_REQUEST: return { ...state, isLoading: false, userID: payload }
        case LOGOUT: return { ...initAuthState, isAuth: false, token: "" };
        default: {
            return state;
        }
    }
}


