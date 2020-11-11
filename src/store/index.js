
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import * as localforage from 'localforage' 

import rootReducer from './reducers';

offlineConfig.persistOptions = { storage: localforage }; // store offline data in indexedDB

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk),
        offline(offlineConfig)
    )
);

export default store;