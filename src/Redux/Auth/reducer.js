import { AUTH_REQUEST, AUTH_REQUEST_FAILURE, AUTH_GET_REQUEST_SUCCESS } from "./actionTypes"
const initAuthState = {
    isAuth: false,
    token: "",
    isLoading: false,
    errorMessage: null
}
export const reducer = (state = initAuthState, { type, payload }) => {
    switch (type) {

        case AUTH_REQUEST: return { ...state, isLoading: true }
        case AUTH_GET_REQUEST_SUCCESS: return { ...state, isLoading: false, token: payload }
        case AUTH_REQUEST_FAILURE: return { ...state, isLoading: false, errorMessage: payload }
        default: {
            return state;
        }
    }
}


