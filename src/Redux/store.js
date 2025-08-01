import { legacy_createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { reducer as authReducer } from "./Auth/reducer"
const RootReducer = {
    authReducer,
}

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk))







