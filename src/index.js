import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorkerRegistration';

import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './utils/theme';
import GlobalStyles from './utils/global'
import Store from './store'
 

ReactDOM.render(
    <Provider store={Store}>
            <ThemeProvider theme={theme}>
                <App />
                <GlobalStyles />
            </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA