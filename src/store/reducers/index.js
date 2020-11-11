import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import authReducer from './authReducers'
import taskReducer from './tasksReducer'
export default combineReducers({
    auth: authReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    tasks : taskReducer
})