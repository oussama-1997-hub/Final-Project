import { combineReducers } from 'redux';
import {userReducer} from './userReducer';
import {postReducer} from './postReducer';
import authReducer from './authReducer'; 


const rootReducer = combineReducers({
    userReducer,
    authReducer,
    postReducer
})

export default rootReducer;