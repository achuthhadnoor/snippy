
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {  getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import * as localforage from 'localforage'

import firebase from '../utils/firebase';
import rootReducer from './reducers';

offlineConfig.persistOptions = { storage: localforage }; // store offline data in indexedDB

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        offline(offlineConfig),
        reduxFirestore(firebase), 
    )
);

export default store;