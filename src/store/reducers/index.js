import {combineReducers} from 'redux' 
import authReducer from './authReducers'
import taskReducer from './tasksReducer'
export default combineReducers({
    user: authReducer,  
    tasks : taskReducer
})