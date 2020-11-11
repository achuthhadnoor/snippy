import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import * as serviceWorker from './serviceWorkerRegistration';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './utils/theme';
import GlobalStyles from './utils/global'
import {store,persistor} from './store'
import firebase from './utils/firebase'
import { PersistGate } from 'redux-persist/integration/react';

const rrfProps = {
    firebase,
    config: { userProfile: true, useFirestoreForProfile: true },
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <ThemeProvider theme={theme}>
                    <App />
                    <GlobalStyles />
                </ThemeProvider>
            </ReactReduxFirebaseProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();