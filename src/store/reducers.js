import { combineReducers } from "redux";
import taskReducer from './reducers/tasksReducer'
import UserReducer from "./reducers/UserReducer"; 

const RootReducer = combineReducers({
    user: UserReducer,
    // settings:settingsReducer,
    tasks:taskReducer,
    // notifications:notificationsReducer,
})

export default RootReducer;