import {combineReducers} from 'redux' 
import authReducer from './authReducers'
import taskReducer from './tasksReducer'
export default combineReducers({
    auth: authReducer,  
    tasks : taskReducer
})