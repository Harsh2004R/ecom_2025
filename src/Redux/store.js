import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk'
import { reducer as authReducer } from "./Auth/reducer"
const RootReducer = combineReducers({
    authReducer,
})

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk))







