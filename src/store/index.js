
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { offline } from '@redux-offline/redux-offline';
// import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { persistStore, persistReducer } from 'redux-persist'
import * as localforage from 'localforage'

import firebase from '../utils/firebase';
import rootReducer from './reducers';

// redux-offline
// offlineConfig.persistOptions = { storage: localforage }; // store offline data in indexedDB

// redux-persist
const persistConfig = {
    key: 'root',
    storage: localforage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;
        
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
// redux-offline
        // offline(offlineConfig),
        persistedReducer,
        reduxFirestore(firebase),
    )
);
const persistor = persistStore(store);

export { store, persistor };