import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './utils/theme';
import GlobalStyles from './utils/global'
import Store from './store'
import firebase from './utils/firebase'

const rrfProps = {
    firebase,
    config: { userProfile: true, useFirestoreForProfile: true },
    dispatch: Store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={Store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <ThemeProvider theme={theme}>
                <App />
                <GlobalStyles />
            </ThemeProvider>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
