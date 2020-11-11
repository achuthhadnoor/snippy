import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import authReducer from './authReducers'
import taskReducer from './tasksReducer'
import locationReducer from '../location'
import { persistReducer } from 'redux-persist'
import * as localforage from 'localforage'

export default combineReducers({
    auth: authReducer,
    firebase:persistReducer( {key:'firebaseState',storage:localforage } ,firebaseReducer),
    firestore:firestoreReducer,
    tasks : taskReducer,
    location: locationReducer
})